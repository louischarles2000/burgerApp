import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('localId');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, signUp) => {
    return dispatch => {
        dispatch(authStart());
    const authData = {
        email,
         password,
         returnSecureToken: true
    };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkIZLGP6KIKerot24XbMNMM2m0HwqlBXI';
        if(!signUp){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkIZLGP6KIKerot24XbMNMM2m0HwqlBXI';
        }
        axios.post(url, authData)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('localId', response.data.localId);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        })
    };

};

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    };
};


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        
        if(!token){
            dispatch(logOut());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            const localId = localStorage.getItem('localId');
            if(expirationDate > new Date()){
              dispatch(authSuccess(token, localId)); 
              dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) /1000 )) 
            }else{
                dispatch(logOut());
            }
            
        }
    };
};
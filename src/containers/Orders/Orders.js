import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

class Orders extends Component {
    componentDidMount () {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }
    
    redirectHandler = () => {
        console.log('redircet works')
        return <Redirect to="/" />;
    }

    render () {
        let orders = <Spinner />;
        if ( !this.props.loading ) {
            console.log(this.props.orders.length);
            if(this.props.orders.length < 1){
                orders = (
                    <div>
                        <h1>Sorry! you don't have orders.</h1>
                        <Button btnType="Success" clicked={this.redirectHandler}>Make an order now!</Button>
                    </div>
                );
            }else{
               orders = this.props.orders.map( order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
                 ) ); 
            }
            
            
        }
        
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch( actions.fetchOrders(token, userId) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
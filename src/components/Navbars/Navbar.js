import React, { } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Typography/Typography';
import styles from '../../assets/jss/sqedulize/components/sidebarStyle';
import Typography from '@material-ui/core/Typography/Typography';

const useStyles = makeStyles(styles);

const Navbar = props => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">This is the Nav bar</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
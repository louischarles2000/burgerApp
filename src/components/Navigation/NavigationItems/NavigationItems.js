import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
      
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            {props.authenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
            {props.authenticated
              ?<NavigationItem link="/logout">Logout</NavigationItem>
              :<NavigationItem link="/auth">Authenticate</NavigationItem>}
        </ul>
    );
}

export default navigationItems;
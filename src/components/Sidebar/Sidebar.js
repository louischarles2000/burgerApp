import React, { } from 'react';
import { NavLink } from 'react-router-dom';

// import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'

import styles from '../../assets/jss/sqedulize/components/sidebarStyle';
import logoImg from './Louis-Logo.png';

const useStyles = makeStyles(styles);

const Sidebar = props => {
    const testRoutes = [
        {
            path: "/dashboard",
            name: "Dashboard",
            // icon: Dashboard,
            // component: DashboardPage,
            layout: "/admin"
          },
          {
            path: "/user",
            name: "User Profile",
            // icon: Person,
            // component: UserProfile,
            layout: "/admin"
          },
          {
            path: "/table",
            name: "Table List",
            // icon: "content_paste",
            // component: TableList,
            layout: "/admin"
          },
          {
            path: "/typography",
            name: "Typography",
            // icon: LibraryBooks,
            // component: Typography,
            layout: "/admin"
          }
    ];
    const classes = useStyles();
    
    const links = (
        <div>
            <List className={classes.list}>
                {testRoutes.map((prop, index) => {
                    <p>{prop.name}</p>
                })}
            </List>
        </div>
    );

    const brandName = (
        <div className={classes.logo}>
            <a
                href="https://www.elouischarles.com"
                className={classes.logoLink}
                target="_blank"
            >
                <div className={classes.logoImage}>
                    <img src={logoImg} alt="logo" className={classes.logo} />
                </div>
                SQEDULIZE
            </a>
            
        </div>
    );
    return (
        <div>
        <Drawer
            variant="temporary"
            anchor="left"
            open
            className={classes.drawerPaper}
            ModalProps={{keepMounted: true}}
            >
            {/* {brandName} */}
            {links}
        </Drawer>
            {/* <Hidden mdUp implementation="css">
            </Hidden> */}
        </div>
    );
}

export default Sidebar;
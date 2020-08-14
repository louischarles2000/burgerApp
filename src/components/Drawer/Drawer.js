import React from 'react';
import PropTypes from 'prop-types';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { defaultFont } from '../../shared/style_utility';
// import image from './drawer-img.jpg';
import image from './drawer-img3.JPEG';
// import image from './drawer-img2.png';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      ...defaultFont
    },
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      // background: "#8e44ad",
      background: "#621981",
      opacity: ".8"
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    ...defaultFont
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    ...defaultFont
  },
  list: {
    color: '#fff',
    ...defaultFont
  },
  divider: {
    backgroundColor: ' rgb(168, 164, 164)',
    width: '80%',
    margin: '5px auto'
  },
  listIcon:{
    color: '#fff'
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div style={{zIndex: '5', color: '#fff'}}>
      <div className={classes.toolbar} >
        {/* <h3>Louis Charles</h3> */}
      </div>
      <Divider className={classes.divider}/>
      <List className={classes.list}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider  className={classes.divider}/>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.listIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
        <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.mobileOpen}
            onClose={props.toggle}
            classes={{
            paper: classes.drawerPaper,
            }}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawer}
            {
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")", backgroundPosition: 'center', backgroundSize: 'cover'}}
            />}
        </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
        <Drawer
            style={{ backgroundImage: "url(" + image + ")"}}
            classes={{
            paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
        >
            {drawer}
            {
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")"}}
            />}
        </Drawer>
        </Hidden>
  </nav>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

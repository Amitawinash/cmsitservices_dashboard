import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserIcon from '@material-ui/icons/AccountCircle';
import LeafIcon from '@material-ui/icons/Eco';
import EyeIcon from '@material-ui/icons/Visibility';
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined'
import {Link} from "react-router-dom";
import {UsersPage} from "../../_pages/UsersPage";
import {Route, Switch, Redirect} from 'react-router-dom';
const drawerWidth = 240;

const Page = (name) => {
  const Comp = () => {
    return (<h1 style={{textAlign: 'center'}}>{name}</h1>)
  }
  return Comp;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: 6
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const img = <img style={{marginTop: 10}}src="https://unsplash.it/40/40"/>
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        title={img}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon/>
          </IconButton>
          <img src="https://unsplash.it/40/40"/>

          <Typography variant="h6" noWrap className={classes.title}>
            Logo
          </Typography>
          <Typography variant="h6" noWrap>
            User Name
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {
            ['user', 'leaf', 'eye', 'wallet'].map((text, index) => (
                <ListItem button key={text} component={Link} to={"/" + text}
                          onClick={() => props.toggleDrawer('left', false)}>
                  <ListItemIcon>
                    {text === 'user' && <UserIcon/>}
                    {text === 'leaf' && <LeafIcon/>}
                    {text === 'eye' && <EyeIcon/>}
                    {text === 'wallet' && <WalletIcon/>}
                  </ListItemIcon>
                    <ListItemText primary={text.toUpperCase()}/>
                </ListItem>
              )
            )
          }
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Switch>
          <Route path="/users" component={UsersPage}/>
          <Route path="/leaf" component={Page('Leaf')}/>
          <Route path="/eye" component={Page('Eye')}/>
          <Route path="/wallet" component={Page('Wallet')}/>
          <Redirect from="*" to="/users"/>
        </Switch>
      </main>
    </div>
  );
}
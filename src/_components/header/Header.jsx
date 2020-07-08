import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LeftDrawer from './LeftDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => setState({...state, [anchor]: open});
  return (
    <div className={classes.root}>
      <LeftDrawer toggleDrawer={toggleDrawer} showDrawer={state.left}></LeftDrawer>
    </div>
  );
}
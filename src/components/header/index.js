import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    color: theme.palette.primary.contrastText
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}>
            <Link color='inherit' component={NavLink} exact={true} activeClassName='is-active' to='/'>Home</Link>
            <Link color='inherit' component={NavLink} activeClassName='is-active' to='/our-story'>Our Story</Link>
            <Link color='inherit' component={NavLink} activeClassName='is-active' to='/reception'>Reception</Link>
            <Link color='inherit' component={NavLink} activeClassName='is-active' to='/registry'>Registry</Link>
            {props.showRSVP && 
              <Link color='inherit' component={NavLink} activeClassName='is-active' to='/rsvp'>RSVP</Link>
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
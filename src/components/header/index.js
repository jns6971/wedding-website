import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography,
  List,
  ListItem,
  Container
} from '@material-ui/core';

import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    padding: '0 40px',
    height: '69px',
    [theme.breakpoints.up('md')]: {
      height: '90px'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  title: {
    display: 'none',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  },
  link: {
    display: 'flex',
    position: 'relative',
    verticalAlign: 'top',
    padding: '0 24px',
    fontSize: '11px',
    lineHeight: '23px',
    boxSizing: 'border-box',
    fontWeight: 600,
    textTransform: 'uppercase',
    textDecoration: 'none',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'none'
    }
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const showPages = {
    showRSVP: props.showRSVP || false,
    showWedding: props.showWedding || false
  };

  const headerClassName = `${classes.root} header`;
  const linkClassName = `${classes.link} link`;

  return (
    <div className={headerClassName}>
      <AppBar className={classes.wrapper} position='static' color='inherit'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Container className={classes.title} color='primary'>
            <Link className={linkClassName} color='inherit' component={NavLink} exact={true} activeClassName='is-active' to='/'>
              <span className='hover'>Home</span>
            </Link>
            <Link className={linkClassName} color='inherit' component={NavLink} activeClassName='is-active' to='/our-story'>
              <span className='hover'>Our Story</span>
            </Link>
            {showPages.showWedding && 
              <Link className={linkClassName} color='inherit' component={NavLink} activeClassName='is-active' to='/wedding'>
                <span className='hover'>Wedding</span>
              </Link>
            }
            <Link className={linkClassName} color='inherit' component={NavLink} activeClassName='is-active' to='/reception'>
              <span className='hover'>Reception</span>
            </Link>
            <Link className={linkClassName} color='inherit' component={NavLink} activeClassName='is-active' to='/registry'>
              <span className='hover'>Registry</span>
            </Link>
            {showPages.showRSVP && 
              <Link className={linkClassName} color='inherit' component={NavLink} activeClassName='is-active' to='/rsvp'>
                <span className='hover'>RSVP</span>
              </Link>
            }
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
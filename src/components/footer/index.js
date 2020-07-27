import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  },
}));

const Footer = (props) => {
	const classes = useStyles();

	const showPages = {
    showRSVP: props.showRSVP || false,
    showWedding: props.showWedding || false
  };
	
  return (
    <footer className={classes.root}>
      <nav>
      	<Container className={classes.title} color='primary'>
          <Link color='inherit' component={NavLink} exact={true} activeClassName='is-active' to='/'>Home</Link>
          <Link color='inherit' component={NavLink} activeClassName='is-active' to='/our-story'>Our Story</Link>
          {showPages.showWedding && 
            <Link color='inherit' component={NavLink} activeClassName='is-active' to='/wedding'>Wedding</Link>
          }
          <Link color='inherit' component={NavLink} activeClassName='is-active' to='/reception'>Reception</Link>
          <Link color='inherit' component={NavLink} activeClassName='is-active' to='/registry'>Registry</Link>
          {showPages.showRSVP && 
            <Link color='inherit' component={NavLink} activeClassName='is-active' to='/rsvp'>RSVP</Link>
          }
        </Container>
      </nav>
      <h6>Created by Ali &amp; Jordan</h6>
    </footer>
  );
};

export default Footer;
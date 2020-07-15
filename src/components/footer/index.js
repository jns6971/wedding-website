import React from 'react';
import {NavLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer = (props) => {
  return (
    <footer>
      <nav>
      	<Link component={NavLink} exact={true} activeClassName='is-active' to='/'>Home</Link>
        <Link component={NavLink} activeClassName='is-active' to='/our-story'>Our Story</Link>
        <Link component={NavLink} activeClassName='is-active' to='/reception'>Reception</Link>
        <Link component={NavLink} activeClassName='is-active' to='/registry'>Registry</Link>
        {props.showRSVP && 
          <Link component={NavLink} activeClassName='is-active' to='/rsvp'>RSVP</Link>
        }
      </nav>
      <h6>Created by Ali &amp; Jordan</h6>
    </footer>
  );
};

export default Footer;
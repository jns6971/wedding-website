import React from 'react';
import {
  NavLink as Link
} from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer>
      <nav>
        <Link exact={true} activeClassName='is-active' to='/'>Home</Link>
        <Link activeClassName='is-active' to='/our-story'>Our Story</Link>
        <Link activeClassName='is-active' to='/reception'>Reception</Link>
        <Link activeClassName='is-active' to='/registry'>Registry</Link>
        {props.showRSVP && 
          <Link activeClassName='is-active' to='/rsvp'>RSVP</Link>
        }
      </nav>
      <h6>Created by Ali &amp; Jordan</h6>
    </footer>
  );
};

export default Footer;
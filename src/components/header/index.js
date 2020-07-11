import React from 'react';
import {
  NavLink as Link
} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link exact={true} activeClassName='is-active' to='/'>Home</Link>
        <Link activeClassName='is-active' to='/our-story'>Our Story</Link>
        <Link activeClassName='is-active' to='/reception'>Reception</Link>
        <Link activeClassName='is-active' to='/registry'>Registry</Link>
        <Link activeClassName='is-active' to='/rsvp'>RSVP</Link>
      </nav>
      <section>Hero</section>
    </header>
  );
};

export default Header;
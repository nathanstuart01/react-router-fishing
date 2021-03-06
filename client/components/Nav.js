import React from 'react';
import { Link } from 'react-router';

const Nav = ({}) => (
  <nav className='green darken-2'>
    <div className="nav-wrapper">
      <Link to='/'>Fishing License</Link>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to='/about_us' >About Us</Link></li>
        <li><Link to='/contact_us'>Contact Us</Link></li>
        <li><Link to='/license'>Licenses</Link></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><Link to='/about_us' >About Us</Link></li>
        <li><Link to='/contact_us'>Contact Us</Link></li>
        <li><Link to='/license'>Licenses</Link></li>
      </ul>
    </div>
  </nav>

)

export default Nav;

import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => (
        <div className="links">
          <div className="link">
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          </div>
          <div className="link">
            <NavLink to="/about-us" activeClassName="is-active">About Us</NavLink>
          </div>
          <div className="link">
            <NavLink to="/services" activeClassName="is-active">Services</NavLink>
          </div>
          <div className="link">
            <NavLink to="/contact-us" activeClassName="is-active">Contact Us</NavLink>
          </div>
          <div className="link">
            <NavLink to="/apply-now" activeClassName="is-active">APPLY NOW</NavLink>
          </div>
        </div>
);

export default Links;

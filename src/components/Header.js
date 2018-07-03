import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    console.log(props);
    return (
      <div className="bar">
        <div className="header__title">Pillars Funding</div>
        <Links />
        <button onClick={Links.toggleLinks} className="hamburger"></button>
      </div>
    );
}

class Links extends React.Component {
  state = {
    visible: true
  };
  toggleLinks = () => {
    this.setState(prevState => ({
        visible: !prevState.visible
      }));
    console.log(visible);
  };
    render(){
      return (
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
            <NavLink to="/apply-now" activeClassName="is-active">Apply Now</NavLink>
          </div>
        </div>
      );
    }
}


export default Header;

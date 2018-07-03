import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Pillars Funding</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem className="link">
                  <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink to="/about-us" activeClassName="is-active">About Us</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink to="/services" activeClassName="is-active">Services</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink to="/contact-us" activeClassName="is-active">Contact Us</NavLink>
                </NavItem>
                <NavItem className="link">
                  <NavLink to="/apply-now" activeClassName="is-active">Apply Now</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }
}

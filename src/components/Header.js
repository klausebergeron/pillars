import React from 'react';
import {NavLink} from 'react-router-dom';
import Links from './Links';



export default class Header extends React.Component {
  state = {
    toggled: false,
    width: 0
  };
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
    console.log(window.innerWidth);
  }
  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  toggleLinks = () => {
    this.setState(prevState => ({
        toggled: !prevState.toggled
      }));
    console.log(this.toggled);
  };
  render() {
    return (
      <div className="bar container">
        <NavLink to="/" className="header__title">Pillars Funding</NavLink>
        <button onClick={this.toggleLinks} className="hamburger"><span>  --  </span></button>
        {(((this.state.toggled) || (window.innerWidth > 845) ) && <Links />)}
      </div>
    );
  };
};

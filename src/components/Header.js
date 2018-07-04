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
        <div className="header__title">Pillars Funding</div>
        <button onClick={this.toggleLinks} className="hamburger"><span>  --  </span></button>
        {((this.state.toggled) && <Links />)}
        {((window.innerWidth > 680) && <Links />)}
      </div>
    );
  };
};

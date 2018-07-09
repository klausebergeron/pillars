import React from 'react';
import {NavLink} from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import { CSSTransition } from 'react-transition-group';
import Links from './Links';



export default class Header extends React.Component {
  state = {
    show: false,
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
        show: !prevState.show
      }));
    console.log(this.show);
  };
  render() {
    const { show } = this.state
    return (
      <div>
      <div className="bar">
        <div className="bar-container">
          <NavLink to="/" className="header__title">Pillars Funding</NavLink>
          <button onClick={this.toggleLinks} className="hamburger"></button>
            {(window.innerWidth > 845) && <Links />}
        </div>
      </div>
      <CSSTransition
        timeout={300}
        in={show}
        classNames="drop"
        unmountOnExit
        onExited={() => {
          this.setState({
            show: false,
          });
        }}
        >
        <Links />
      </CSSTransition>
    </div>
    );
  };
};

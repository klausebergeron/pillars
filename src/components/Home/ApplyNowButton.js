import React from'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


export default class ApplyNowButton extends React.Component {
  render () {
    return (
        <Link to="/apply-now" className="apply-btn">Apply Now</Link>
    );
  }
}

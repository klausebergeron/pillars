import React from 'react';
import {Link} from 'react-router-dom';

const PillarsHomePage = () => (
  <div>
    <div className="content__home">
      <div>
        <div className="row">
          <h1 className="financial-solutions">Financial Solutions</h1>
        </div>
        <div className="row">
          <h1 className="financial-solutions-reflect">Financial Solutions</h1>
        </div>
      </div>
      <div className="row planet-img">
        <div className="info-block block-2">
          <div className="video-box">
            <iframe className="video" src="https://www.youtube.com/embed/QPKKQnijnsM" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="block-2">
          <Link to="/apply-now" className="apply-btn">Apply Now</Link>
        </div>
      </div>
      <div className="row">
        <div className="block-2"></div>
        <div className="info-block block-2">
          Some stuff
        </div>
      </div>
    </div>
  </div>
)

export default PillarsHomePage;

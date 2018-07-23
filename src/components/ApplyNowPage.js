import React from 'react';
import ApplicationForm from './ApplicationForm';


const ApplyNowPage = (props) => {
  console.log(props);
  return (
    <div className="content__applyNow">
      <div className="titlerow">
        <div className="row">
          <h1 className="fade-in-top">Application for Funding</h1>
        </div>
        <div className="row">
          <div className="line"></div>
        </div>
        <div className="row">
          <h4>New Application</h4>
        </div>
          <div className="row">
            <p>
              Fill out the application below<br/>
              Upload your last 4 business bank statements<br/>
              Upload your last 4 statements of credit card processing (if you process credit cards)<br/>
              Sign the form using your mouse<br/>
              Submit the form<br/>
            </p>
          </div>
      </div>
      <ApplicationForm />
    </div>
  );
}

export default ApplyNowPage;

import React from'react';
//import LocationSearchInput from './LocationSearchInput.js';

export default class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: '',
      dba: '',
      address: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row form-row">
          <label>
            Business Name:
          </label>
            <input
              name="businessName"
              type="string"
              value={this.state.businessName}
              onChange={this.handleInputChange} />
        </div>
        <div className="row form-row">
          <label>
            DBA:
          </label>
            <input
              name="dba"
              type="string"
              value={this.state.dba}
              onChange={this.handleInputChange} />
        </div>
        <div className="row form-row">
          <label>
            Address:
          </label>
          <input
            name="address"
            type="string"
            value={this.state.dba}
            onChange={this.handleInputChange} />
        </div>
      </form>
    );
  }
}

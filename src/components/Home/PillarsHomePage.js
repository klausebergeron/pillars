import React from 'react';
import ApplyNowButton from './ApplyNowButton';
import FinancialSolutions from './FinancialSolutions';
import HomeBody from './HomeBody';


export default class PillarsHomePage extends React.Component {
  state = {
    showRow: false
  }
  rowUp = () => {
    this.setState({showRow: true});
  }

  render () {
    return (
      <div>
        <div className="content__home">
          <ApplyNowButton />
          {(this.state.showRow == false) &&
            <FinancialSolutions rowUp={this.rowUp}/>
          }
            <HomeBody />
          
        </div>
      </div>
    );
  }
}

import React from "react";

const FinancialSolutions = (props) => {
      return (
        <div>
          <div className="row">
            <h1
              onAnimationEnd={(e) => props.rowUp()}
              className="financial-solutions">
              Financial Solutions
            </h1>
          </div>
          <div className="row">
            <h1
              className="financial-solutions-reflect">
              Financial Solutions
            </h1>
          </div>
        </div>
      )
  }

export default FinancialSolutions;

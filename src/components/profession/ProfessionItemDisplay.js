import React from "react";

class ProfessionItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { responsibilityArray } = this.props;
    return (
      <div className="profession-item-container">
        <div className="profession-column-container">
          <div className="column">
            <h2>{this.props.company}</h2>
            <h2>{this.props.position}</h2>
          </div>
          <div className="column">
            <h2 className="right-align">{this.props.location}</h2>
            <h2 className="right-align">{this.props.time}</h2>
          </div>
          <div>
            {responsibilityArray.map((item) => {
              return <h3>{item.responsibility}</h3>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionItemDisplay;

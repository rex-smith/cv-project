import React from "react";
import DisplayField from "../DisplayField";

function ProfessionItemDisplay(props) {
  const { responsibilityArray, company, position, location, time } = props;
  return (
    <div className="profession-item-container">
      <div className="profession-column-container">
        <div className="column">
          <DisplayField value={company} />
          <DisplayField value={position} />
        </div>
        <div className="column">
          <DisplayField value={location} />
          <DisplayField value={time} />
        </div>
        <div>
          {/* {responsibilityArray.map((item) => {
            return <DisplayField value={item.responsibility} key={item.id} />;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default ProfessionItemDisplay;

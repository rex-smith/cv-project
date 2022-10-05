import React from "react";
import uniqid from "uniqid";
import InterestItemForm from "./InterestItemForm";
import InterestItemDisplay from "./InterestItemDisplay";
import "./interests.css";

class InterestList extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: true,
      interestArray: [
        {
          interest: "Hiking",
          id: uniqid(),
        },
      ],
    };

    this.addInterestItem = this.addInterestItem.bind(this);
  }

  addInterestItem() {
    this.setState((prevState) => ({
      interestArray: [
        ...prevState.interestArray,
        {
          interest: "",
          id: uniqid(),
        },
      ],
      showForm: true,
    }));
  }

  handleInterestSubmit = (event, id) => {
    event.preventDefault();
    let interest = event.target.interest.value;

    this.setState((prevState) => ({
      interestArray: prevState.interestArray.map((item) => {
        if (item.id === id) {
          return {
            interest: interest,
            id: id,
          };
        } else {
          return item;
        }
      }),
      showForm: false,
    }));
  };

  showInterestForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <div className="interest-list">
        <ul>
          {this.state.showForm
            ? this.state.interestArray.map((item) => {
                return (
                  <InterestItemForm
                    interest={item.interest}
                    id={item.id}
                    key={item.id}
                    handleInterestSubmit={this.handleInterestSubmit}
                  />
                );
              })
            : this.state.interestArray.map((item) => {
                return (
                  <InterestItemDisplay
                    interest={item.interest}
                    id={item.id}
                    key={item.id}
                  />
                );
              })}
        </ul>
        <div className="button-container">
          <button
            className="button button-edit"
            onClick={this.showInterestForm}
          >
            Edit
          </button>
          <button className="button button-add" onClick={this.addInterestItem}>
            Add New
          </button>
        </div>
      </div>
    );
  }
}

export default InterestList;

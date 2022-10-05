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

    this.removeInterestItem = this.removeInterestItem.bind(this);
    this.addInterestItem = this.addInterestItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addInterestItem(event) {
    event.preventDefault();
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

  handleChange(index, e) {
    let interestArray = this.state.interestArray;
    interestArray[index][e.target.name] = e.target.value;
    this.setState({ interestArray: interestArray });
  }

  removeInterestItem(event, id) {
    event.preventDefault();
    this.setState((prevState) => ({
      interestArray: prevState.interestArray.filter((item) => item.id !== id),
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
    });
  };

  showInterestForm = (event) => {
    event.preventDefault();
    this.setState({
      showForm: true,
    });
  };

  render() {
    const { showForm } = this.state;
    let content;
    if (showForm) {
      content = (
        <div className="interest-list">
          <form
            action=""
            className="interest-item-container"
            onSubmit={this.handleSubmit}
          >
            <ul>
              {this.state.interestArray.map((item, index) => {
                return (
                  <InterestItemForm
                    interest={item.interest}
                    id={item.id}
                    key={item.id}
                    index={index}
                    handleChange={this.handleChange}
                    removeInterestItem={this.removeInterestItem}
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
              <button
                className="button button-add"
                onClick={this.addInterestItem}
              >
                Add New
              </button>
              <input
                type="submit"
                value="Save"
                className="button button-save"
              ></input>
            </div>
          </form>
        </div>
      );
    } else {
      content = (
        <div className="interest-item-container">
          <ul>
            {this.state.interestArray.map((item) => {
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
            <button
              className="button button-add"
              onClick={this.addInterestItem}
            >
              Add New
            </button>
          </div>
        </div>
      );
    }

    return <div className="interest-list">{content}</div>;
  }
}

export default InterestList;

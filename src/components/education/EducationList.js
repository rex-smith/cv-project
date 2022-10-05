import React from "react";
import uniqid from "uniqid";
import EducationItemDisplay from "./EducationItemDisplay";
import EducationItemForm from "./EducationItemForm";
import "./education.css";

class EducationList extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: true,
      educationArray: [
        {
          institution: "University of Waterloo",
          degree: "Bachelor of Arts",
          time: "2014 - 2018",
          location: "Waterloo, Canada",
          id: uniqid(),
        },
      ],
    };

    this.addEducationItem = this.addEducationItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addEducationItem(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      educationArray: [
        ...prevState.educationArray,
        {
          institution: "",
          degree: "",
          time: "",
          location: "",
          id: uniqid(),
        },
      ],
      showForm: true,
    }));
  }

  removeEducationItem(event, id) {
    event.preventDefault();
    this.setState((prevState) => ({
      educationArray: prevState.educationArray.filter((item) => item.id !== id),
    }));
  }

  handleChange(index, e) {
    let educationArray = this.state.educationArray;
    educationArray[index][e.target.name] = e.target.value;
    this.setState({ educationArray: educationArray });
  }

  handleEducationSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
    });
  };

  showEducationForm = (event) => {
    event.preventDefault();
    this.setState({
      showForm: true,
    });
  };

  render() {
    let { showForm } = this.state;
    let content;
    if (showForm) {
      content = (
        <form
          action=""
          onSubmit={this.handleEducationSubmit}
          className="education-item-container"
        >
          {this.state.educationArray.map((item, index) => {
            return (
              <EducationItemForm
                institution={item.institution}
                degree={item.degree}
                time={item.time}
                location={item.location}
                handleChange={this.handleChange}
                removeEducationItem={this.removeEducationItem}
                key={item.id}
                index={index}
                id={item.id}
              />
            );
          })}
          <div className="button-container">
            <button
              onClick={this.showEducationForm}
              className="button button-edit"
            >
              Edit
            </button>
            <button
              onClick={this.addEducationItem}
              className="button button-add"
            >
              Add New
            </button>
            <input type="submit" value="Save" className="button button-save" />
          </div>
        </form>
      );
    } else {
      content = (
        <div>
          {this.state.educationArray.map((item) => {
            return (
              <EducationItemDisplay
                institution={item.institution}
                degree={item.degree}
                time={item.time}
                location={item.location}
                key={item.id}
                id={item.id}
              />
            );
          })}
          <div className="button-container">
            <button
              onClick={this.showEducationForm}
              className="button button-edit"
            >
              Edit
            </button>
            <button
              onClick={this.addEducationItem}
              className="button button-add"
            >
              Add New
            </button>
          </div>
        </div>
      );
    }

    return <div className="education-list">{content}</div>;
  }
}

export default EducationList;

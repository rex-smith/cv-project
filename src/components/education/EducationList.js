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
  }

  addEducationItem() {
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

  handleEducationSubmit = (event, id) => {
    event.preventDefault();
    let institution = event.target.institution.value;
    let degree = event.target.degree.value;
    let time = event.target.time.value;
    let location = event.target.location.value;

    // Updating the information for the Education Item that was submitted
    this.setState((prevState) => ({
      educationArray: prevState.educationArray.map((item) => {
        if (item.id === id) {
          return {
            institution: institution,
            degree: degree,
            time: time,
            location: location,
            id: id,
          };
        } else {
          return item;
        }
      }),
      showForm: false,
    }));
  };

  showEducationForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <div className="education-list">
        {this.state.showForm
          ? this.state.educationArray.map((item) => {
              return (
                <EducationItemForm
                  institution={item.institution}
                  degree={item.degree}
                  time={item.time}
                  location={item.location}
                  handleEducationSubmit={this.handleEducationSubmit}
                  key={item.id}
                  id={item.id}
                />
              );
            })
          : this.state.educationArray.map((item) => {
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
          <button onClick={this.addEducationItem} className="button button-add">
            Add New
          </button>
        </div>
      </div>
    );
  }
}

export default EducationList;

import React from "react";
import uniqid from "uniqid";
import ProfessionItemDisplay from "./ProfessionItemDisplay.js";
import ProfessionItemForm from "./ProfessionItemForm.js";
import "./profession.css";

class ProfessionList extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: true,
      professionArray: [
        {
          company: "Twitter",
          position: "Head of Security",
          time: "2020-2022",
          location: "San Francisco, CA",
          id: uniqid(),
        },
      ],
    };

    this.addProfessionItem = this.addProfessionItem.bind(this);
  }

  addProfessionItem() {
    this.setState((prevState) => ({
      professionArray: [
        ...prevState.professionArray,
        {
          company: "",
          position: "",
          time: "",
          location: "",
          id: uniqid(),
        },
      ],
      showForm: true,
    }));
  }

  handleProfessionSubmit = (event, id) => {
    event.preventDefault();
    let company = event.target.company.value;
    let position = event.target.position.value;
    let time = event.target.time.value;
    let location = event.target.location.value;

    // Updating the information for the profession Item that was submitted
    this.setState((prevState) => ({
      professionArray: prevState.professionArray.map((item) => {
        if (item.id === id) {
          return {
            company: company,
            position: position,
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

  showProfessionForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <div className="profession-list">
        {this.state.showForm
          ? this.state.professionArray.map((item) => {
              return (
                <ProfessionItemForm
                  company={item.company}
                  position={item.position}
                  time={item.time}
                  location={item.location}
                  handleProfessionSubmit={this.handleProfessionSubmit}
                  key={item.id}
                  id={item.id}
                />
              );
            })
          : this.state.professionArray.map((item) => {
              return (
                <ProfessionItemDisplay
                  company={item.company}
                  position={item.position}
                  time={item.time}
                  location={item.location}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
        <div className="button-container">
          <button
            onClick={this.showProfessionForm}
            className="button button-edit"
          >
            Edit
          </button>
          <button
            onClick={this.addProfessionItem}
            className="button button-add"
          >
            Add New
          </button>
        </div>
      </div>
    );
  }
}

export default ProfessionList;

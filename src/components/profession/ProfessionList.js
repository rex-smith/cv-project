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
          responsibilityArray: [
            {
              responsibility: "",
              id: uniqid(),
            },
          ],
          id: uniqid(),
        },
      ],
    };

    this.addProfessionItem = this.addProfessionItem.bind(this);
    this.removeProfessionItem = this.removeProfessionItem.bind(this);
    this.addResponsibilityItem = this.addResponsibilityItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponsibilityChange =
      this.handleResponsibilityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addProfessionItem(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      professionArray: [
        ...prevState.professionArray,
        {
          company: "",
          position: "",
          time: "",
          location: "",
          responsibilityArray: [
            {
              responsibility: "",
              id: uniqid(),
            },
          ],
          id: uniqid(),
        },
      ],
      showForm: true,
    }));
  }

  addResponsibilityItem(event, professionId) {
    event.preventDefault();
    this.setState((prevState) => ({
      professionArray: prevState.professionArray.map((item) => {
        let newItem = item;
        if (item.id === professionId) {
          newItem = {
            company: item.company,
            position: item.position,
            time: item.time,
            location: item.location,
            responsibilityArray: [
              ...item.responsibilityArray,
              {
                responsibility: "",
                id: uniqid(),
              },
            ],
            id: item.id,
          };
          return newItem;
        } else {
          return item;
        }
      }),
    }));
  }

  handleResponsibilityChange(responsibilityIndex, professionIndex, e) {
    let professionArray = this.state.professionArray;
    let newResponsibilityArray =
      professionArray[professionIndex].responsibilityArray;

    newResponsibilityArray[responsibilityIndex][e.target.name] = e.target.value;
    professionArray[professionIndex].responsibilityArray =
      newResponsibilityArray;
    this.setState({ professionArray: professionArray });
  }

  removeProfessionItem(event, id) {
    event.preventDefault();
    this.setState((prevState) => ({
      professionArray: prevState.professionArray.filter(
        (item) => item.id !== id
      ),
    }));
  }

  handleChange(index, e) {
    let professionArray = this.state.professionArray;
    professionArray[index][e.target.name] = e.target.value;
    this.setState({ professionArray: professionArray });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
    });
  };

  showProfessionForm = (event) => {
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
        <form
          action=""
          className="profession-item-container"
          onSubmit={this.handleSubmit}
        >
          {this.state.professionArray.map((item, index) => {
            return (
              <ProfessionItemForm
                company={item.company}
                position={item.position}
                time={item.time}
                location={item.location}
                responsibilityArray={item.responsibilityArray}
                key={item.id}
                index={index}
                id={item.id}
                handleChange={this.handleChange}
                removeProfessionItem={this.removeProfessionItem}
                addResponsibilityItem={this.addResponsibilityItem}
                handleResponsibilityChange={this.handleResponsibilityChange}
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
            <input type="submit" value="Save" className="button button-save" />
          </div>
        </form>
      );
    } else {
      content = (
        <div>
          {this.state.professionArray.map((item) => {
            return (
              <ProfessionItemDisplay
                company={item.company}
                position={item.position}
                time={item.time}
                location={item.location}
                responsibilityArray={item.responsibilityArray}
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
    return <div className="profession-list">{content}</div>;
  }
}

export default ProfessionList;

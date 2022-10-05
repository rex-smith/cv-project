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
    this.removeProfessionItem = this.removeProfessionItem.bind(this);
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
          id: uniqid(),
        },
      ],
      showForm: true,
    }));
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
                handleChange={this.handleChange}
                removeProfessionItem={this.removeProfessionItem}
                key={item.id}
                index={index}
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

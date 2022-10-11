import React, { useState } from "react";
import uniqid from "uniqid";
import ProfessionItemDisplay from "./ProfessionItemDisplay.js";
import ProfessionItemForm from "./ProfessionItemForm.js";
import "./profession.css";

function ProfessionList() {
  const [showForm, setShowForm] = useState(true);
  const [professionArray, setProfessionArray] = useState([
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
  ]);

  const addProfessionItem = (event) => {
    event.preventDefault();
    setProfessionArray((prevProfessionArray) => [
      ...prevProfessionArray,
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
    ]);
    setShowForm(true);
  };

  const addResponsibilityItem = (event, professionId) => {
    event.preventDefault();

    setProfessionArray((prevProfessionArray) =>
      prevProfessionArray.map((item) => {
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
      })
    );
  };

  const handleResponsibilityChange = (
    responsibilityIndex,
    professionIndex,
    e
  ) => {
    let newProfessionArray = professionArray;
    let newResponsibilityArray =
      newProfessionArray[professionIndex].responsibilityArray;

    newResponsibilityArray[responsibilityIndex][e.target.name] = e.target.value;
    newProfessionArray[professionIndex].responsibilityArray =
      newResponsibilityArray;
    setProfessionArray(newProfessionArray);
  };

  const removeProfessionItem = (event, id) => {
    event.preventDefault();
    setProfessionArray((prevProfessionArray) =>
      prevProfessionArray.filter((item) => item.id !== id)
    );
  };

  const handleChange = (index, e) => {
    let newProfessionArray = professionArray;
    newProfessionArray[index][e.target.name] = e.target.value;
    setProfessionArray(newProfessionArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProfessionArray = [];
    let companyArray = event.target.elements.company;
    let positionArray = event.target.elements.position;
    let locationArray = event.target.elements.location;
    let timeArray = event.target.elements.location;

    if (companyArray.length) {
      for (let i = 0; i < companyArray.length; i++) {
        let professionObject = {
          company: companyArray[i].value,
          position: positionArray[i].value,
          location: locationArray[i].value,
          time: timeArray[i].value,
          id: uniqid(),
        };
        newProfessionArray.push(professionObject);
      }
    } else {
      let professionObject = {
        company: companyArray.value,
        position: positionArray.value,
        location: locationArray.value,
        time: timeArray.value,
        id: uniqid(),
      };
      newProfessionArray = [professionObject];
    }
    setProfessionArray(newProfessionArray);
    setShowForm(false);
  };

  const showProfessionForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  let content;
  if (showForm) {
    content = (
      <form
        action=""
        className="profession-item-container"
        onSubmit={handleSubmit}
      >
        {professionArray.map((item, index) => {
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
              handleChange={handleChange}
              removeProfessionItem={removeProfessionItem}
              addResponsibilityItem={addResponsibilityItem}
              handleResponsibilityChange={handleResponsibilityChange}
            />
          );
        })}
        <div className="button-container">
          <button onClick={showProfessionForm} className="button button-edit">
            Edit
          </button>
          <button onClick={addProfessionItem} className="button button-add">
            Add New
          </button>
          <input type="submit" value="Save" className="button button-save" />
        </div>
      </form>
    );
  } else {
    content = (
      <div>
        {professionArray.map((item) => {
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
          <button onClick={showProfessionForm} className="button button-edit">
            Edit
          </button>
          <button onClick={addProfessionItem} className="button button-add">
            Add New
          </button>
        </div>
      </div>
    );
  }
  return <div className="profession-list">{content}</div>;
}

export default ProfessionList;

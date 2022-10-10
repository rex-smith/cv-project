import React, { useState } from "react";
import uniqid from "uniqid";
import EducationItemDisplay from "./EducationItemDisplay";
import EducationItemForm from "./EducationItemForm";
import Button from "../Button";
import Submit from "../Submit";
import "./education.css";

function EducationList() {
  const [showForm, setShowForm] = useState(true);
  const [educationArray, setEducationArray] = useState([
    {
      institution: "University of Waterloo",
      degree: "Bachelor of Arts",
      time: "2014 - 2018",
      location: "Waterloo, Canada",
      id: uniqid(),
    },
  ]);

  const addEducationItem = (event) => {
    event.preventDefault();
    setEducationArray([
      ...educationArray,
      {
        institution: "",
        degree: "",
        time: "",
        location: "",
        id: uniqid(),
      },
    ]);
    setShowForm(true);
  };

  const removeEducationItem = (event, id) => {
    event.preventDefault();
    setEducationArray((prevEducationArray) =>
      prevEducationArray.filter((item) => item.id !== id)
    );
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    let newEducationArray = [];
    let institutionArray = event.target.elements.institution;
    let degreeArray = event.target.elements.degree;
    let timeArray = event.target.elements.time;
    let locationArray = event.target.elements.location;

    if (institutionArray.length) {
      for (let i = 0; i < institutionArray.length; i++) {
        let educationObject = {
          institution: institutionArray[i].value,
          degree: degreeArray[i].value,
          time: timeArray[i].value,
          location: locationArray[i].value,
          id: uniqid(),
        };
        newEducationArray.push(educationObject);
      }
    } else {
      let educationObject = {
        institution: institutionArray.value,
        degree: degreeArray.value,
        time: timeArray.value,
        location: locationArray.value,
        id: uniqid(),
      };
      newEducationArray = [educationObject];
    }
    setEducationArray(newEducationArray);
    setShowForm(false);
  };

  const showEducationForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  let content;
  if (showForm) {
    content = (
      <form
        action=""
        onSubmit={handleEducationSubmit}
        className="education-item-container"
      >
        {educationArray.map((item) => {
          return (
            <EducationItemForm
              institution={item.institution}
              degree={item.degree}
              time={item.time}
              location={item.location}
              removeEducationItem={removeEducationItem}
              key={item.id}
              id={item.id}
            />
          );
        })}
        <div className="button-container">
          <Button
            onClick={showEducationForm}
            text="Edit"
            buttonClass="button-edit"
          />
          <Button
            onClick={(e) => addEducationItem(e)}
            buttonClass="button-add"
            text="Add New"
          />
          <Submit />
        </div>
      </form>
    );
  } else {
    content = (
      <div>
        {educationArray.map((item) => {
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
          <Button
            onClick={showEducationForm}
            text="Edit"
            buttonClass="button-edit"
          />
          <Button
            onClick={(e) => addEducationItem(e)}
            text="Add New"
            buttonClass="button-add"
          />
        </div>
      </div>
    );
  }

  return <div className="education-list">{content}</div>;
}

export default EducationList;

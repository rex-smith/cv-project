import React, { useState } from "react";
import uniqid from "uniqid";
import InterestItemForm from "./InterestItemForm";
import InterestItemDisplay from "./InterestItemDisplay";
import "./interests.css";

function InterestList() {
  const [showForm, setShowForm] = useState(true);
  const [interestArray, setInterestArray] = useState([
    {
      interest: "Hiking",
      id: uniqid(),
    },
  ]);

  const addInterestItem = (event) => {
    event.preventDefault();
    setInterestArray((prevInterestArray) => [
      ...prevInterestArray,
      {
        interest: "",
        id: uniqid(),
      },
    ]);
    setShowForm(true);
  };

  const removeInterestItem = (event, id) => {
    event.preventDefault();
    setInterestArray((prevInterestArray) =>
      prevInterestArray.filter((item) => item.id !== id)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newInterestArray = [];
    let submittedInterestArray = event.target.elements.interest;
    if (submittedInterestArray.length) {
      for (let i = 0; i < submittedInterestArray.length; i++) {
        let interestObject = {
          interest: submittedInterestArray[i].value,
          id: uniqid(),
        };
        newInterestArray.push(interestObject);
      }
    } else {
      let interestObject = {
        interest: submittedInterestArray.value,
        id: uniqid(),
      };
      newInterestArray = [interestObject];
    }
    setInterestArray(newInterestArray);
    setShowForm(false);
  };

  const showInterestForm = (event) => {
    event.preventDefault();
    setShowForm(true);
  };

  let content;
  if (showForm) {
    content = (
      <div className="interest-list">
        <form
          action=""
          className="interest-item-container"
          onSubmit={handleSubmit}
        >
          <ul>
            {interestArray.map((item, index) => {
              return (
                <InterestItemForm
                  interest={item.interest}
                  id={item.id}
                  key={item.id}
                  index={index}
                  removeInterestItem={removeInterestItem}
                />
              );
            })}
          </ul>
          <div className="button-container">
            <button className="button button-edit" onClick={showInterestForm}>
              Edit
            </button>
            <button className="button button-add" onClick={addInterestItem}>
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
          {interestArray.map((item) => {
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
          <button className="button button-edit" onClick={showInterestForm}>
            Edit
          </button>
          <button className="button button-add" onClick={addInterestItem}>
            Add New
          </button>
        </div>
      </div>
    );
  }

  return <div className="interest-list">{content}</div>;
}

export default InterestList;

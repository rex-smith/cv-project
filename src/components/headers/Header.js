import React, { useState, useEffect } from "react";
import HeaderDisplay from "./HeaderDisplay";
import HeaderForm from "./HeaderForm";
import Button from "../Button";
import Submit from "../Submit";
import "./header.css";

function Header(props) {
  const [showForm, setShowForm] = useState(true);
  const [fullName, setFullName] = useState("Jane L. Doe");
  const [address, setAddress] = useState("123 Appletree Way");
  const [email, setEmail] = useState("janedoe@gmail.com");
  const [phone, setPhone] = useState("(123)456-7890");

  const handleHeaderSubmit = (event) => {
    event.preventDefault();
    setFullName(event.target.name.value);
    setAddress(event.target.address.value);
    setEmail(event.target.email.value);
    setPhone(event.target.phone.value);
    setShowForm(false);
  };

  const showEdit = () => {
    setShowForm(true);
  };

  let content;
  if (showForm) {
    content = (
      <form
        action=""
        className="header"
        onSubmit={(e) => handleHeaderSubmit(e)}
      >
        <HeaderForm
          fullName={fullName}
          address={address}
          email={email}
          phone={phone}
        />
        <div className="button-container">
          <Button onClick={showEdit} text="Edit" buttonClass="button-edit" />
          <Submit />
        </div>
      </form>
    );
  } else {
    content = (
      <div>
        <HeaderDisplay
          fullName={fullName}
          address={address}
          email={email}
          phone={phone}
        />
        <div className="button-container">
          <Button onClick={showEdit} text="Edit" buttonClass="button-edit" />
        </div>
      </div>
    );
  }

  return <div className="header-container">{content}</div>;
}

export default Header;

import React, { useState, useEffect } from "react";
import FormField from "../FormField";

function FormHeader(props) {
  const [fullName, setFullName] = useState(props.fullName);
  const [address, setAddress] = useState(props.address);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);

  return (
    <div>
      <div className="form-group field">
        <FormField property="name" value={fullName} />
      </div>
      <div className="secondary-header-fields">
        <FormField property="address" value={address} />
        <span className="bar"></span>
        <FormField property="email" value={email} />
        <span className="bar"></span>
        <FormField property="phone" value={phone} />
      </div>
    </div>
  );
}

export default FormHeader;

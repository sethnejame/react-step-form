import React, { useState, useEffect } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [user, setUser] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  const nextStep = () => {
    const { step } = user;
    setUser({ step: step + 1 });
  };

  const prevStep = () => {
    const { step } = user;
    step > 0 ? setUser({ step: step - 1 }) : console.log("Already at Step 1");
  };

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { step, firstName, lastName, email, occupation, city, bio } = user;
  const values = { step, firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return <FormPersonalDetails values={values} />;
    case 2:
      return <FormUserDetails values={values} />;
    case 3:
      return <Confirm values={values} />;
    case 4:
      return <Success values={values} />;
    default:
      return;
  }
};

export default UserForm;

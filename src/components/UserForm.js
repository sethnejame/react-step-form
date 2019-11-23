import React, { useState, useEffect } from "react";

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
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>User Form</h1>
    </div>
  );
};

export default UserForm;

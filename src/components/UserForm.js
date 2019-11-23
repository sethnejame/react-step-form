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

  return (
    <div>
      <h1>User Form</h1>
    </div>
  );
};

export default UserForm;

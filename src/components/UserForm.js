import React { useState, useEffect } from "react";

const UserForm = () => {
  const [user, setUser] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''

  })
  return (

  <div>
    <h1>User Form</h1>
  </div>
)}

export default UserForm;

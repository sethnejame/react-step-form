import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = props => {
  const moveForward = e => {
    e.preventDefault();
    nextStep();
  };

  const {
    step,
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
    handleChange,
    nextStep
  } = props.values;

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange}
          name="firstName"
          defaultValue={firstName}
        />
      </>
    </MuiThemeProvider>
  );
};

export default FormUserDetails;

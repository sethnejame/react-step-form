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
    bio
  } = props.values;
  const { handleChange, nextStep } = props;

  console.log(props.values);

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
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange}
          name="lastName"
          defaultValue={lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange}
          name="email"
          defaultValue={email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={moveForward}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;

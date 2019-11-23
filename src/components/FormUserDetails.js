import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = props => {
  const moveForward = e => {
    e.preventDefault();
    props.nextStep();
  };
  const { step, firstName, lastName, email, occupation, city, bio } = props;
  return (
    <div>
      <h1>Form User Details</h1>
    </div>
  );
};

export default FormUserDetails;

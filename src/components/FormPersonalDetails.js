import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = props => {
  const moveForward = e => {
    e.preventDefault();
    nextStep();
  };

  const moveBackward = e => {
    e.preventDefault();
    prevStep();
  };

  const { occupation, bio, city } = props.values;
  const { handleChange, nextStep, prevStep } = props;

  console.log(props.values);

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange}
          name="occupation"
          defaultValue={occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange}
          name="city"
          defaultValue={city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={handleChange}
          name="bio"
          defaultValue={bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={moveForward}
        />
        <RaisedButton
          label="Go Back"
          primary={false}
          style={styles.button}
          onClick={moveBackward}
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

export default FormPersonalDetails;
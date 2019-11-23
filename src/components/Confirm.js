import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = props => {
  const moveForward = e => {
    e.preventDefault();
    // API post call here
    nextStep();
  };

  const moveBackward = e => {
    e.preventDefault();
    prevStep();
  };

  const { nextStep, prevStep } = props;
  const { firstName, lastName, email, occupation, city, bio } = props.values;

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm Your Details" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
        <RaisedButton
          label="Looks good!"
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

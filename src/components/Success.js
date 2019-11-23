import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Success!" />
        <h1>Thanks for your submission!</h1>
        <p>You'll receive an e-mail shortly with further instructions.</p>
      </>
    </MuiThemeProvider>
  );
};

export default Success;

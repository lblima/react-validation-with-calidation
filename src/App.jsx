import React, { Component, Fragment } from "react";
import { FormValidation } from "calidation";

import logo from './logo.svg';
import './App.css';

const config = {
  username: {
    isRequired: "The Username is required"
  },
  email: {
    isRequired: "The e-mail is required",
    isEmail: "You need enter a valid email, too"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Form Validation with Calidation</h1>
        </header>
        
        <div className="container">
          <h2>User Form</h2>
          <FormValidation config={config}>
            {({ errors, submitted }) => (
              <Fragment>
                <div className="input-group">
                  <label>
                    Username <input name="username" />
                  </label>
                  {submitted && errors.username && <span className="error">{errors.username}</span>}
                </div>

                <div className="input-group">
                  <label>
                    E-mail <input name="email" type="email" />
                  </label>
                  {submitted && errors.email && <span className="error">{errors.email}</span>}
                </div>
                
                <button type="submit">Submit</button>
              </Fragment>
            )}
          </FormValidation>
        </div>
      </div>
    );
  }
}

export default App;

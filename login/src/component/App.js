import React, { Component } from 'react';
import SignupForm from './SignupForm'


class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="container">

              <SignupForm />
          </div>

      </div>
    );
  }
}

export default App;

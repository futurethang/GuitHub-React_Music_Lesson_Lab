import React, { Component } from "react";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div class="grid-container">
          <div class="VIDEO">VIDEO</div>
          <div class="VIDEO-LIST">VIDEO LIST</div>
          <div class="VIDEO-DETAILS">
            <div class="NOTES">NOTES</div>
          </div>
          <div class="TOOLS">TOOLS</div>
        </div>
      </div>
    );
  }
}

export default App;

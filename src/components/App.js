import React, { Component } from "react";

import "../css/App.css";
import AddAppointments from "./AddAppointments.js";
import ListAppointments from "./ListAppointments.js";
import SearchAppointments from "./SearchAppointments.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ashish",
      data: []
    };
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />

                <ListAppointments />

                <SearchAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

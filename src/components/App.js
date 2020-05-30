import React, { Component } from "react";

import "../css/App.css";
import AddAppointments from "./AddAppointments.js";
import ListAppointments from "./ListAppointments.js";
import SearchAppointments from "./SearchAppointments.js";
import { without } from "lodash";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ashish",
      index: 0,
      formDisplay: true,
      data: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const d = result.map((item) => {
          item.ID = this.state.index;
          this.setState({ index: this.state.index + 1 });
          return item;
        });

        this.setState({
          data: d,
        });
      });
    //console.log("Data: ", this.state.data);
  }
  deleteItem(item) {
    let newData = without(this.state.data, item);
    this.setState({ data: newData });
  }
  toggleFormDisplay() {
    this.setState({
      formDisplay: !this.state.formDisplay,
    });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleFormDisplay}
                />

                <ListAppointments
                  data={this.state.data}
                  deleteData={this.deleteItem}
                />

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

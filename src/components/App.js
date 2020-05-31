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
      orderBy: "petName",
      orderDir: "desc",
      index: 0,
      formDisplay: true,
      data: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    this.addNewRecord = this.addNewRecord.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
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
  addNewRecord(newRecord) {
    let newData = this.state.data;
    newRecord.ID = this.state.index;

    newData.unshift(newRecord);
    this.setState({
      index: this.state.index + 1,
      data: newData,
    });
  }

  changeOrder(ob, od) {
    this.setState({
      orderBy: ob,
      orderDir: od,
    });
  }

  render() {
    let order;
    let filterData = this.state.data;

    if (this.state.orderBy === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filterData.sort((a, b) => {
      if (
        a[this.state.orderBy].toLowerCase() <
        b[this.state.orderBy].toLowerCase()
      ) {
        return 1 * order;
      } else {
        return -1 * order;
      }
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleFormDisplay}
                  addNewRecord={this.addNewRecord}
                />

                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                />

                <ListAppointments
                  data={filterData}
                  deleteData={this.deleteItem}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

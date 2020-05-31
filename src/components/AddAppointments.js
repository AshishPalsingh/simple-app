import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class AddAppointments extends Component {
  constructor() {
    super();

    this.state = {
      petName: "",
      ownerName: "",
      aptNotes: "",
      aptDate: "",
      aptTime: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addRecord = this.addRecord.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  addRecord(e) {
    e.preventDefault();

    let tempRecord = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptNotes: this.state.aptNotes,
      aptDate: this.state.aptDate + " " + this.state.aptTime,
    };

    this.props.addNewRecord(tempRecord);
    this.props.toggleForm();

    this.setState({
      petName: "",
      ownerName: "",
      aptNotes: "",
      aptDate: "",
    });
  }
  render() {
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.addRecord}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  value={this.state.petName}
                  onChange={this.handleChange}
                  placeholder="Pet's Name"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  value={this.state.ownerName}
                  onChange={this.handleChange}
                  placeholder="Owner's Name"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                  id="aptDate"
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                  id="aptTime"
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  value={this.state.aptNotes}
                  onChange={this.handleChange}
                  id="aptNotes"
                  placeholder="Appointment Notes"
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;

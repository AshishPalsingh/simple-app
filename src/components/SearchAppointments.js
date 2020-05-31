import React, { Component } from "react";

class SearchAppointments extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              type="text"
              className="form-control"
              onChange={(e) => this.props.searchRecord(e.target.value)}
              aria-label="Search Appointments"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "petName" ? "active" : "")
                  }
                  onClick={(e) =>
                    this.props.changeOrder("petName", this.props.orderBy)
                  }
                  href="#"
                >
                  Pet Name
                </button>
                <button
                  onClick={(e) =>
                    this.props.changeOrder("aptDate", this.props.orderBy)
                  }
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "aptDate" ? "active" : "")
                  }
                  href="#"
                >
                  Date
                </button>
                <button
                  onClick={(e) =>
                    this.props.changeOrder("ownerName", this.props.orderBy)
                  }
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "ownerName" ? "active" : "")
                  }
                  href="#"
                >
                  Owner
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  onClick={(e) =>
                    this.props.changeOrder(this.props.orderBy, "asc")
                  }
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  onClick={(e) =>
                    this.props.changeOrder(this.props.orderBy, "desc")
                  }
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;

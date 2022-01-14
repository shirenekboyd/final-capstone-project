import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//---may need to import function here from utils/api-----//
//import { New}

export default function NewReservations() {
  return (
    <>
      <h1>Create Reservation</h1>
      <form>
        <div className="row">
          <div>
            <div className="col">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last Name"
              aria-label="Last Name"
            />
          </div>
          <div>
            <div className="col">
              <label htmlFor="mobile_number" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="mobile_number"
                className="form-control"
                placeholder="Mobile Number"
                aria-label="Mobile Number"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <div className="col">
              <label htmlFor="reservation_date" className="form-label">
                Date
              </label>
              <input
                type="date"
                id="reservation_date"
                name="reservation_date"
                className="form-control"
                placeholder="Date"
                aria-label="Date"
              />
            </div>
          </div>
          <div>
            <div className="col">
              <label htmlFor="reservation_time" className="form-label">
                Time
              </label>
              <input
                type="time"
                id="reservation_time"
                name="reservation_time"
                className="form-control"
                placeholder="Time"
                aria-label="Time"
              />
            </div>
          </div>
          <div>
            <div className="col">
              <label htmlFor="people" className="form-label">
                People
              </label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                className="form-control"
                aria-label="People"
              />
            </div>
          </div>
        </div>
        {/*Cancel button when clicked returns the user to the previous page */}
        <button type="button" class="btn btn-secondary m-2">
          Cancel
        </button>
        {/*Submit button when clicked saves the new reservation, then displays the /dashboard page for the date of the new reservation */}
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </>
  );
}

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import EventStore from "../../store/EventStore";

const CreateEventForm = () => {
  let { EventForm, EventFormChange, createEventRequest, EventListByUserRequest } = EventStore();
  const navigate = useNavigate();

  const Save = async () => {
    let res = await createEventRequest(EventForm);
    console.log('res-check',res)
    if (res) {
      toast.success("Event Create");
      await EventListByUserRequest()
      navigate('/my-event')
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-5 rounded-3">
        <h6>Create Event Form</h6>
        <hr />
        <div className="row mb-4">
          <div className="col-md-3 p-2">
            <label className="form-label">Event Name </label>
            <input
              value={EventForm.name}
              onChange={(e) => {
                EventFormChange("name", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>
          <div className="col-md-3 p-2">
            <label className="form-label">Date </label>
            <input
              value={EventForm.date}
              onChange={(e) => {
                EventFormChange("date", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>

          <div className="col-md-3 p-2">
            <label className="form-label">Time </label>
            <input
              value={EventForm.time}
              onChange={(e) => {
                EventFormChange("time", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>
          <div className="col-md-3 p-2">
            <label className="form-label">Location </label>
            <input
              value={EventForm.location}
              onChange={(e) => {
                EventFormChange("location", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>
          <div className="col-md-3 p-2">
            <label className="form-label">Description </label>
            <input
              value={EventForm.cus_city}
              onChange={(e) => {
                EventFormChange("description", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>
          <div className="col-md-3 p-2">
            <label className="form-label">Category Id </label>
            <input
              value={EventForm.categoryID}
              onChange={(e) => {
                EventFormChange("categoryID", e.target.value);
              }}
              type="text"
              className="form-control "
            />
          </div>
          
        </div>


        <div className="row mt-4">
          <div className="col-md-3 p-2">
            <button onClick={Save} className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;

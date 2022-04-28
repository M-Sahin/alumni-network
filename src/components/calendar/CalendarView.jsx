import React from "react";
import Button from "react-bootstrap/Button";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import loadEvents from './Calendar.jsx'
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Nav from "../navbar/Navbar";

function Calendar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  loadEvents();
  console.log(JSON.parse(localStorage.getItem("events")))


  function saveEvent(){

    let title = document.getElementById("eventTitle").value;
    let description = document.getElementById("eventDescription").value;
    let allowGuests = document.getElementById("eventGuests").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;
    let isTrueSet = (allowGuests === 'true');

    fetch('https://localhost:44370/api/Events', {
    method: 'POST',      
    headers: {'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      createdByUserId: 1,
      name: title,
      description: description,
      allowGuests: isTrueSet,
      banner_Image: "https://localhost:44370/swagger/index.html",
      startTime: startTime,
      endTime: endTime
    }),
  });
  setShow(false)
  const myTimeout = setTimeout(loadEvents, 1000);

}


  return(
  <div style={{ backgroundColor: 'white' }}>
    <Nav />

    <div className= "container-md">
      <div className ="row">
        <div className = "col-10">
          <h1>Calendar</h1>
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin  ]}
            progressiveEventRendering=  {true}
            initialView="dayGridMonth"
            events= {JSON.parse(localStorage.getItem("events"))}
          />
        </div>
      </div>
    </div>
      <Button variant="primary" onClick={handleShow}>
          Launch demo modal
      </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div classname = "container">
              <div classname = "row">
                <div classname = "col">
                  <input type="text" class="form-control" id="eventTitle" placeholder="Example title"></input>
                </div>
              </div>
              <div classname = "row">
                <div classname = "col">
                  <textarea class="form-control" id="eventDescription" placeholder="Example description" rows="3"></textarea>
                </div>
              </div>
              <div classname = "row">
                <div classname = "col">
                  <label for="startTime">start:</label>
                </div>
                <div classname = "col">
                  <input type="datetime-local" id="startTime"></input>
                </div>
              </div>
              <div classname = "row">
                <div classname = "col">
                  <label for="endTime">end:</label>
                </div>
                <div classname = "col">
                  <input type="datetime-local" id="endTime"></input>
                </div>
              </div>
              <div classname = "row">
                <div classname = "col">
                <select class="form-select" aria-label="Default select example" id= "eventGuests">
                  <option selected>Allow guests?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
              </select>                
              </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveEvent}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  </div>
  );
}

export default Calendar
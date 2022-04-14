import React from "react";
import Button from "react-bootstrap/Button";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import loadEvents from './Calendar.jsx'


function Calendar(){
  loadEvents();
  console.log(JSON.parse(localStorage.getItem("events"))
  )
  
  return(
  <div>
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
  </div>
  );
}

export default Calendar
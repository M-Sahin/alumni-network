import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import 'react-calendar/dist/Calendar.css';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { render } from '@testing-library/react';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


export default class CalendarPage extends React.Component {
  render(){
    return (
      <div>
        <div className= "container-md">
          <div className ="row">
            <div className = "col-10">
              <h1>Calendar</h1>
              <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin  ]}
                progressiveEventRendering=  {true}
                initialView="dayGridMonth"
                events= {(async () => {
                  console.log(await this.loadEvents())
                })()}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

   async loadEvents (){ // bind with an arrow function
  let events = []
  let eventsData = []
  let test = [
      {title: 'aaaa', 
      date: '2022-04-13'}, 
      {title: 'aaaa', 
      date: '2022-04-14'}
  ]
    await fetch("https://localhost:44370/api/events")  
    .then(response => response.json())
    .then(data => events.push(data));
    events[0].map(event=>{
      eventsData.push({
        title: event.name,
        date: event.endTime
      })
    })

    return await test;
  }
  
}

import React from 'react'

async function loadEvents (){
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
      localStorage.setItem("events", JSON.stringify(eventsData))
      return await test;
}
export default loadEvents
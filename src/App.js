import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./components/login/Login";
import Calendar from "./components/calendar/CalendarView";

import TimelineView from "./components/timeline/TimelineView";
import RepliesView from "./components/replies/RepliesView";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
         	 		<Route path="/Calendar" element={<Calendar />} />	
					<Route path="/timeline" element={ <TimelineView /> } />	
					<Route path="/replies" element={ <RepliesView /> } />				
							
          	</Routes>
          </div>
          </BrowserRouter>   
  );
}

export default App;

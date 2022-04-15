import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./components/login/Login";
import TimelineView from "./components/timeline/TimelineView";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>					
					<Route path="/" element={<Login />} />	
					<Route path="/timeline" element={ <TimelineView /> } />					
							
          </Routes>
          </div>
          </BrowserRouter>   
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Login from "./components/login/Login";
import Timeline from "./components/timeline/Timeline";
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>					
					<Route path="/" element={<Login />} />	
					<Route path="/timeline" element={ <Timeline /> } />	
							
          </Routes>
          </div>
          </BrowserRouter>   
  );
}

export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import Timeline from "./components/timeline/Timeline";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
	return (
		<div className="App">
			<Nav />
		<BrowserRouter>
			<div className="App">
				<Routes>					
					<Route path="/" element={<Login />} />	
					<Route path="/timeline" element={ <Timeline /> } />	
							
          </Routes>
          </BrowserRouter>   
		  </div>
  );
}

export default App;

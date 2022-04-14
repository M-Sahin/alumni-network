import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import Nav from "./components/navbar/navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
	return (
		<div className="App">
			<Nav />
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
          </Routes>
          </BrowserRouter>   
		  </div>
  );
}

export default App;

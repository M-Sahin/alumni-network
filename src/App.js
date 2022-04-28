import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/Login";
import Nav from "./components/navbar/navbar.js";
import Secured from "./components/secured/securedPage";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak"
import PrivateRoute from "./components/helpers/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
	return (
		<div className="App">
			<Nav />
			<ReactKeycloakProvider authClient={keycloak}>
		<BrowserRouter>
				<Routes>					
					<Route exact path="/" element={<Login />} />	
					<Route path="/secured" element={<PrivateRoute><Secured /></PrivateRoute>} />				
          </Routes>
          </BrowserRouter>  
		  </ReactKeycloakProvider> 
		  </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
import LoginForm from "./components/login/LoginForm";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <div className="App">
         <Navbar />
        <Card body>
          <LoginForm />
        </Card>
      </div>
    
  );
}

export default App;

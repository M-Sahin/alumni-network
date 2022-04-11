import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";
import LoginForm from "./components/login/LoginForm";




function App() {
  return (
    <div className="App">
        
        <Card body>
          <LoginForm />
        </Card>
      </div>
    
  );
}

export default App;

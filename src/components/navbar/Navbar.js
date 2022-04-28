import React from "react";
import keycloak from "../../keycloak";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Nav  = () => (
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Alumni Network</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Timeline">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Timeline">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Calendar">Calendar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Topics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Groups</a>
        </li>
        </ul>
    </div>
    <form className="d-flex">
      <>
    <Link to={{
      pathname: '/', 
    }} ><Button variant="primary" class="btn btn-primary">Logout</Button> </Link>
    </>

    </form>
  </div>
</nav>
</div>


);

export default Nav
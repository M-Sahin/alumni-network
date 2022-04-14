import React from "react";
import keycloak from "../../keycloak";


const Nav  = () => (
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Alumni Network</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Topics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Groups</a>
        </li>
        </ul>
        <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    <form className="d-flex">
             {!keycloak.authenticated && (
							<button
								className="btn btn-secondary d-flex"
								type="button"
								onClick={() => keycloak.login()}
							>Login
							</button>
						)}
               {!!keycloak.authenticated && (
                <button
                className="btn btn-secondary d-flex"  
                type="button"
                onClick={() => keycloak.logout()}>
                Logout ({keycloak.tokenParsed.preferred_username})
                </button>
                 )}
        </form>
  </div>
</nav>
</div>


);

export default Nav
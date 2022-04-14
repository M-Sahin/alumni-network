import React from "react";
import keycloak from "../../keycloak";


const Nav  = () => (
<div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Alumni Network</a>
    <form className="d-flex">
						
                            {!keycloak.authenticated && (
							<button
								className="login-button btn d-flex"
								type="button"
								onClick={() => keycloak.login()}
							>Login
							</button>
						)}
                        {!!keycloak.authenticated && (
                   <button
                   className="logout-button btn d-flex"  
                   type="button"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                 )}
        </form>
  </div>
</nav>
</div>


);

export default Nav
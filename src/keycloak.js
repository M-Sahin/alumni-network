import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://keycloak-alumninetwork.herokuapp.com/auth/",
 realm: "AlumniNetwork",
 clientId: "React-client",
});

export default keycloak;
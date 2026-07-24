import Auth from "./core/auth.js";

const logged = await Auth.initialize();

if (!logged) {

    window.location.href = "/pages/login.html";

}

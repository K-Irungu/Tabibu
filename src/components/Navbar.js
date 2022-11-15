import React from "react";
import logo from "../img/logo.png";
// import {BrowserRouter as Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav class=" navbar navbar-light bg-light">
        <div>
          <a class="navbar-brand" href="./Home">
            <div className="App-header bg-light">
              <img
                src={logo}
                class=" App-logo "
                alt="logo"
              />
              <div class="h2 logo-text">Tabibu Wako</div>
            </div>
          </a>
        </div>
        <div class=" navbar-expand-xl navbar-dark bg-danger">
          <ul class="navbar-nav ms-auto">
          <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/SpecialistCard">
                Our Specialists
              </a>
            </li>

            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Booking">
                Book
              </a>
            
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="/Appointment">
                View Appointments
              </a>
            </li>
      
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

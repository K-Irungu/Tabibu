import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SpecialistCard from "./components/SpecialistCard";
import Booking from "./components/Booking";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Appointment from "./components/Appointment";
// import Book from "./components/Book";

// import Appointment from "./components/Appointment";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  
  return (
  <div>
    <Navbar />
    <Router>
      
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/Booking" element= {<Booking />}/>
      <Route path="/Details" element= {<Details />}/>
      <Route path="/Appointment" element= {<Appointment />}/>
      <Route path="/SpecialistCard" element= {<SpecialistCard />}/>
      {/* <Route path="/Book" element= {<Book />}/> */}
    </Routes>
    

  </Router>
  <Footer />
  

  </div>
  );
}

export default App;

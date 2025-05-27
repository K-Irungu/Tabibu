import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
// import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Login from "./components/Login";
// import SpecialistCard from "./components/SpecialistCard";
// import Booking from "./components/Booking";
// import Details from "./components/Details";
// import Footer from "./components/Footer";
import Appointments from "./components/Appointments";



import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  
  return (
  <div className="app">
    {/* <Navbar /> */}
    <Router>
      
    <Routes>
      <Route path="/" element= {<Login />}/>
      <Route path="/overview" element= {<Overview />}/>
      <Route path="/appointments" element= {<Appointments />}/>

      {/* <Route path="/Book" element= {<Book />}/> */}
    </Routes>
    

  </Router>
  {/* <Footer /> */}
  

  </div>
  );
}

export default App;

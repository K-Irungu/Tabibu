import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import avi2m from "../img/avi-2m.png";
// import avi1 from "../img/avi-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'
function SpecialistCard() {


    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:9297/doctors")
        .then((res) => {
          console.log(res.data);
          // setData(res?.data?.data)
          setData(res.data);
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    }, []);
    return (
      <div>
<div className="col-md-12">
        <h1 className="my-3 text-center text-danger">Meet our specialists</h1>
    </div>

    
      
<div className="row p-5">
{data.length > 0 &&
          data.map((item, index) => {
            return (

  <div class="card-group col-lg-3 col-md-4 col-sm-3 mb-3">
  <div class="card rounded shadow d-flex justify-content-center align-items-center p-3 bg-danger rounded-lg flex-column">
    <img id= "myImage" src={avi2m}  class="img card-img-top rounded-circle" alt="..." />
    <div class="card-body">
      {/* <h5 class="card-title">Card title</h5> */}
      <h6 class="card-title text-white">{item.doctor_name}</h6>
      </div><h6 class="card-text text-white">{item.specialty}</h6>
      <div className="social-icons my-2">
                <a href="./" class="text-white"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="./" class="text-white"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="./" class="text-white"><FontAwesomeIcon icon={faInstagram}/></a>
    </div>
  </div>
  </div>
    )})}
</div>
</div>
 );
}

export default SpecialistCard;
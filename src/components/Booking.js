import React, { useState } from "react";

function Booking() {
  const [patient_name, setPatient_name] = useState("");
  const [specialist, setSpecialist] = useState("");

  // Place the input values in State
  const handlePatient_name = (event) => setPatient_name(event.target.value) 
  const handleDoctorsName = (event) => setSpecialist(event.target.value) 

  // Do the post request, persist that information on the API
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      specialist: specialist,
      patient_name: patient_name
    };
    const configurationObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    fetch("http://localhost:9297/appointments", configurationObj)

  }
  
  return (
    <div className="row">
      <div className="col-sm-12">
      <h1 class="text-danger text-center">Book your Appointment</h1>
      <h3 className="specialist-selector">Pick a specialist from "Our Specialists" and type their name here</h3>

<div class="bg-light pt-5 m-5 pb-5 ">
      <section class=" mb-3 container my-2 bg-danger w-50 text-light p-2 rounded">
        <form onSubmit={handleSubmit} className="row g-3 p-3">

          <div className="col-md-4">
            <label className="form-label "><h5 >Patient's Name</h5></label>
            <input placeholder="Enter patient's name" type="text" name="patient_name" className="form-control p-2" onChange={(e) => handlePatient_name(e)} />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Doctor's name</h5></label>
            <input placeholder="Enter doctor's name `" type="text" name=" doctor_name" className="form-control p-2" onChange={(e) => handleDoctorsName(e)}/>
          </div>

          <div className="col-12 d-flex justify-content-center">
             <button type="submit"  className="btn btn-success mt-4"><a class="nav-link active" href="./Appointment">  Book </a></button>  
          </div>
          
        </form>
        </section>
      </div>
    </div>
    
    </div>
  );
}

export default Booking;

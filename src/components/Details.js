import React, { useState } from 'react'

function Details({ currentId, getAppointments }) {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");


  // Update the database, then display updated database
  function updateAppointment(e) {
    e.preventDefault();

    fetch(`http://localhost:9297/appointments/${currentId}`, {
      method: 'PATCH',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        specialist: doctorName,
        patient_name: patientName
      })
    })
    .then((result) => result.json()
    .then(getAppointments)
    .then(console.log(currentId))
    )

  }
  return (
    <div>
        <h1 class="text-danger text-center"> Edit Appointment:  </h1>
        <h2 className="numero"> Appointment {currentId} </h2>
        <div class="bg-light">
      <section class=" mb-3 container my-2 bg-danger w-50 text-light p-2 rounded">
        <form  onSubmit={ updateAppointment }className="row g-3 p-3">
          <div className="col-md-4 " >
            <label className="form-label "><h5 >Patient's Name</h5></label>
            <input
            placeholder="Enter Patient's name"
              type="text"
              name="patient_name"
              className="form-control p-2"
              value={patientName}
              onChange={(e) => {setPatientName(e.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label"><h5>Doctors name</h5></label>
            <input
              placeholder="Enter Dr's name"
              type="text"
              name=" doctor_name"
              className="form-control p-2"
              value={doctorName} 
              onChange={(e)=>{setDoctorName(e.target.value)}}
            />
          </div>

          <div className="col-12 d-flex justify-content-center">
            <button  type="submit" className="btn btn-success mt-4">
              Save
            </button>
          </div>
        </form>
        </section>
      </div>

        </div>         

    );
}
export default Details;




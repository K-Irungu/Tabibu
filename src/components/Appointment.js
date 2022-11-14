
import React, { useEffect, useState } from 'react'
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrescriptionBottleMedical,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [appointments, setAppointments] = useState([])
  const [isEditing, setIsEditing] = useState(null)
  const [currentId, setCurrentID] = useState()
  useEffect(() => { getAppointments() }, [appointments])

  // Get all appointments
  const  getAppointments = () => {
    fetch("http://localhost:9297/appointments")
    .then((result) => result.json())
    .then((data) => setAppointments(data))
  }

  // Delete an appoinment
  function deleteAppoinment(e) {
    let appointmentId = e.target.parentElement.parentElement.parentElement.firstChild.innerText
    fetch(`http://localhost:9297/appointments/${appointmentId}`, { method: "DELETE" } )
  }

  // Update an appointment
  // Step 1: Put appointment id in state. Step 2: Handle the update with the details provided.(This happens within the Details component)

  function editAppointment(e) {
    let appointmentId = e.target.parentElement.parentElement.parentElement.firstChild.innerText 
    setIsEditing(!isEditing)
    setCurrentID(appointmentId)
  }


let list_of_appointments = appointments.map((appointment_data, i) =>
              <tr key={i}>
                <td>{appointment_data.id}</td>
                <td>{appointment_data.patient.patient_name}</td>
                <td>{appointment_data.doctor.doctor_name}</td>
                <td>{appointment_data.doctor.specialty}</td>

                <td>
                    <div class="d-flex justify-content-evenly">
                      {/* <a  href= "/Details" class="btn btn-dark"> <FontAwesomeIcon icon={faStethoscope} />  Update</a> */}
                      <button  onClick={editAppointment}class="btn btn-success" ><FontAwesomeIcon icon={faSyringe} /> Edit</button>
                      <button  onClick={deleteAppoinment} class="btn btn-danger" ><FontAwesomeIcon icon={faPrescriptionBottleMedical} />  Delete</button>
                    </div>
                </td>
              </tr>)


  return (
    <div className="table-responsive-md">
      { isEditing? <Details currentId= {currentId} getAppointments= {getAppointments}></Details> : <></> }
      <table  class = "table table-striped caption-top">
        <caption>
            <h1 class="text-danger">List of Appointments</h1>
        </caption>
        <thead class="thead-dark">
          <tr>
              <th scope="col">
                <h3 class="text-danger">ID</h3>
              </th>
              <th scope="col">
                <h3 class="text-danger">Patient's Name</h3>
              </th>
              <th scope="col">
                <h3 class="text-danger">Doctor's Name</h3>
              </th>
              <th scope="col">
                <h3 class="text-danger">Speciality</h3>
              </th>
          </tr>
        </thead>
        <tbody> 
          {list_of_appointments}
        </tbody>
      </table>
    </div>
  );
}
export default App;
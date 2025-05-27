import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ReactComponent as DoctorIllustration } from "../img/doc.svg";
import { useNavigate } from "react-router-dom";

import {
  // FaUserMd,
  FaCalendarAlt,
  FaComments,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  // FaHeartbeat,
  FaDelicious,
  FaPhoneAlt,
  FaSistrix,
  FaRegBell,
  FaRegFilePdf,
} from "react-icons/fa";

const reportsData = [
  { name: "complete-blood-count-2023-02-01.pdf", date: "02/1/2023" },
  { name: "liver-function-test-2023-02-01.pdf", date: "02/1/2023" },
  { name: "chest-xray-2023-02-01.pdf", date: "02/1/2023" },
  { name: "thyroid-function-test-2023-02-01.pdf", date: "02/1/2023" },
  { name: "lipid-profile-2023-02-01.pdf", date: "02/1/2023" },
];

const appointmentsData = [
  {
    doctor: "Dr. Amelia Rodriguez",
    specialization: "Cardiologist",
    date: "2025-06-01",
    time: "09:00",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    doctor: "Dr. Noah Thompson",
    specialization: "Dermatologist",
    date: "2025-05-24",
    time: "14:30",
    status: "upcoming",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    doctor: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    date: "2025-06-03",
    time: "10:15",
    status: "upcoming",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    doctor: "Dr. Elias Becker",
    specialization: "Orthopedic Surgeon",
    date: "2025-06-05",
    time: "11:00",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    doctor: "Dr. Hannah Kim",
    specialization: "Neurologist",
    date: "2025-05-21",
    time: "15:00",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    doctor: "Dr. Marcus Li",
    specialization: "Endocrinologist",
    date: "2025-06-02",
    time: "13:45",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    doctor: "Dr. Sophia Ahmed",
    specialization: "Gynecologist",
    date: "2025-06-06",
    time: "08:30",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    doctor: "Dr. Daniel Park",
    specialization: "General Practitioner",
    date: "2025-05-27",
    time: "12:00",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    doctor: "Dr. Julia Mendes",
    specialization: "Psychiatrist",
    date: "2025-05-20",
    time: "17:20",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    doctor: "Dr. Leon Becker",
    specialization: "Dentist",
    date: "2025-06-04",
    time: "10:45",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    doctor: "Dr. Maria Gonzales",
    specialization: "Ophthalmologist",
    date: "2025-06-07",
    time: "16:10",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    doctor: "Dr. Ethan Wright",
    specialization: "Pulmonologist",
    date: "2025-05-22",
    time: "09:30",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    doctor: "Dr. Clara Belle",
    specialization: "Rheumatologist",
    date: "2025-06-08",
    time: "14:00",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    doctor: "Dr. Yusuf El-Amin",
    specialization: "Allergist",
    date: "2025-06-01",
    time: "10:30",
    status: "completed",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    doctor: "Dr. Amina Hossain",
    specialization: "Oncologist",
    date: "2025-05-23",
    time: "13:15",
    status: "completed",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];

const vitalsData = [
  { label: "Body Temperature", value: "36.2 °C" },
  { label: "Pulse", value: "85 bpm" },
  { label: "Blood Pressure", value: "80/70 mmHg" },
  { label: "Breathing Rate", value: "15 breaths/m" },
];

const Overview = () => {
  const navigate = useNavigate();


    // State for active sidebar menu
  const [activeMenu, setActiveMenu] = useState("overview");

const renderMenuItem = (key, Icon, label, route = null) => (
  <li
    className={activeMenu === key ? "active" : ""}
    onClick={() => {
      setActiveMenu(key);
      if (route) navigate(route);
    }}
    style={{ cursor: "pointer" }}
  >
    <Icon /> {label}
  </li>
);


    // Function to render content inside `.hero-and-reports` based on activeMenu
  // const renderContent = () => {
  //   switch (activeMenu) {
  //     case "overview":
  //       return (
  //         <div className="hero-and-reports">
  //           <div className="hero-banner">
  //             <div className="hero-text">
  //               <h3>Your Health, Our Priority</h3>
  //               <p>
  //                 Manage appointments, access reports, and connect with top
  //                 specialists all on one platform.
  //               </p>
  //             </div>
  //             <div className="hero-image">
  //               <DoctorIllustration />
  //             </div>
  //           </div>

  //           <div className="reports reports-card">
  //             <h4>My Reports</h4>
  //             <ul>
  //               {reportsData.map((report, index) => (
  //                 <li key={index}>
  //                   <FaRegFilePdf className="red-icon" />
  //                   {report.name} <span>{report.date}</span>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       );

  //     case "appointments":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>Upcoming Appointments</h3>
  //           <ul>
  //             {appointmentsData
  //               .filter((a) => a.status === "upcoming" || a.status === "active")
  //               .map((appointment, i) => (
  //                 <li key={i}>
  //                   <img
  //                     src={appointment.image}
  //                     alt={appointment.doctor}
  //                     style={{ width: 40, borderRadius: "50%", marginRight: 10 }}
  //                   />
  //                   <strong>{appointment.doctor}</strong> - {appointment.specialization} <br />
  //                   <small>
  //                     {appointment.date} at {appointment.time} ({appointment.status})
  //                   </small>
  //                 </li>
  //               ))}
  //           </ul>
  //         </div>
  //       );

  //     case "calendar":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>Calendar View</h3>
  //           <p>Here you can see your schedule in calendar format (placeholder).</p>
  //           {/* You can integrate a calendar component here */}
  //         </div>
  //       );

  //     case "message":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>Messages</h3>
  //           <p>You have no new messages (placeholder).</p>
  //         </div>
  //       );

  //     case "reports":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>All Reports</h3>
  //           <ul>
  //             {reportsData.map((report, index) => (
  //               <li key={index}>
  //                 <FaRegFilePdf className="red-icon" />
  //                 {report.name} <span>{report.date}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );

  //     case "settings":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>Settings</h3>
  //           <p>Update your preferences here (placeholder).</p>
  //         </div>
  //       );

  //     case "logout":
  //       return (
  //         <div className="hero-and-reports">
  //           <h3>Log out</h3>
  //           <p>You have been logged out (placeholder).</p>
  //         </div>
  //       );

  //     default:
  //       return null;
  //   }
  // };
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <i className="fa-solid fa-stethoscope"></i>
          Tabi<span className="grey-letter">bu</span>
        </div>

        <ul className="nav-links">
          {/* Section 1 */}
          <div className="sidebar-section">
            <div className="section-divider" />
            {renderMenuItem("overview", FaDelicious, "Overview")}
{renderMenuItem("appointments", FaCalendarAlt, "Appointments", "/appointments")}
            {renderMenuItem("calendar", FaCalendarAlt, "Calendar")}
          </div>

          {/* Section 2 */}
          <div className="sidebar-section">
            <div className="section-divider" />
            {renderMenuItem("message", FaComments, "Message")}
            {renderMenuItem("reports", FaFileAlt, "Reports")}
          </div>

          {/* Section 3 */}
          <div className="sidebar-section">
            <div className="section-divider" />
            {renderMenuItem("settings", FaCog, "Settings")}
            {renderMenuItem("logout", FaSignOutAlt, "Log out")}
            <li className="support" style={{ cursor: "pointer" }}>
              <FaPhoneAlt /> Support
            </li>
          </div>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h2>Welcome, Stephen</h2>
          <div className="user-profile">
            <FaSistrix />
            <FaRegBell />
            <div className="profile-container">
              <img
                src="https://images.unsplash.com/photo-1714666990471-0b1cb70c0824?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
              />
              <span>Stephen Wanjiku</span>
            </div>
          </div>
        </header>

        {/* Hero + Reports */}
        <section className="hero-and-reports">
          <div className="hero-banner">
            <div className="hero-text">
              <h3>Your Health, Our Priority</h3>
              <p>
                Manage appointments, access reports, and connect with top
                specialists all on one platform.
              </p>
            </div>
            <div className="hero-image">
              <DoctorIllustration />
            </div>
          </div>

          <div className="reports reports-card">
            <h4>My Reports</h4>
            <ul>
              {reportsData.map((report, index) => (
                <li key={index}>
                  <FaRegFilePdf className="red-icon" />
                  {report.name} <span>{report.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vitals */}
        <section className="vitals">
          <h4 className="section-vitals">Vitals</h4>
          {vitalsData.map((vital, index) => (
            <div className="card" key={index}>
              {vital.label} <span>{vital.value}</span>
            </div>
          ))}
        </section>

        {/* Appointments */}
        <section className="appointments-reports">
                    <h4 className="section-vitals">Appointments</h4>

          <div className="appointments">
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
<tbody>
  {appointmentsData.map((appointment, index) => (
    <tr key={index}>
      <td>
        <div className="profile-container" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={appointment.image}
            alt={appointment.doctor}
            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span>{appointment.doctor}</span>
        </div>
      </td>
      <td>{appointment.specialization}</td>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>
        <span className={`status ${appointment.status}`}>
          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
        </span>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>

          {/*
          <div className="calendar">
            <h4>Date</h4>
            <div className="date-box">
              <p>Wed 20</p>
              <p>Dr. Lionel</p>
              <span>Cardiologist</span>
            </div>
          </div>
          */}
        </section>
      </main>
    </div>
  );
};

export default Overview;

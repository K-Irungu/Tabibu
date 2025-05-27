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
  FaDelicious,
  FaPhoneAlt,
  FaSistrix,
  FaRegBell,
  FaRegFilePdf,
} from "react-icons/fa";

// Static data outside the component to avoid re-creation on each render
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



// Sidebar menu items configuration
const sidebarMenuItems = [
  {
    section: "Section 1",
    items: [
      {
        key: "overview",
        icon: FaDelicious,
        label: "Overview",
        route: "/overview",
      },
      {
        key: "appointments",
        icon: FaCalendarAlt,
        label: "Appointments",
        route: "/appointments",
      },
      { key: "calendar", icon: FaCalendarAlt, label: "Calendar" },
    ],
  },
  {
    section: "Section 2",
    items: [
      { key: "message", icon: FaComments, label: "Message" },
      { key: "reports", icon: FaFileAlt, label: "Reports" },
    ],
  },
  {
    section: "Section 3",
    items: [
      { key: "settings", icon: FaCog, label: "Settings" },
      { key: "logout", icon: FaSignOutAlt, label: "Log out" },
    ],
  },
];

// Helper component for sidebar menu item
const SidebarMenuItem = ({ icon: Icon, label, isActive, onClick }) => (
  <li
    className={isActive ? "active" : ""}
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <Icon /> {label}
  </li>
);

// Helper component for Appointment row
const AppointmentRow = ({ appointment }) => {
  const { doctor, specialization, date, time, status, image } = appointment;
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <tr>
      <td className="doctor-col">
        <div
          className="profile-container"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <img
            src={image}
            alt={doctor}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              objectFit: "cover",
              marginLeft: 10,
            }}
          />
          <span>{doctor}</span>
        </div>
      </td>
      <td>{specialization}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <span className={`status ${status}`}>{formattedStatus}</span>
      </td>
    </tr>
  );
};

const Appointments = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !selectedSpecialization ||
      !selectedDoctor ||
      !selectedDate ||
      !selectedTime
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newAppointment = {
      doctor: selectedDoctor,
      specialization: selectedSpecialization,
      date: selectedDate,
      time: selectedTime,
      status: "upcoming",
      image:
        appointmentsData.find((doc) => doc.doctor === selectedDoctor)?.image ||
        "https://via.placeholder.com/32",
    };

    appointmentsData.unshift(newAppointment);

    setShowModal(false);
    setSelectedSpecialization("");
    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");

    setSuccessMessage("Appoinment Booked Successfully!");

    // Clear message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const specializations = [
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "Orthopedic Surgeon",
    "Neurologist",
    "Endocrinologist",
    "Gynecologist",
    "General Practitioner",
    "Psychiatrist",
    "Dentist",
    "Ophthalmologist",
    "Pulmonologist",
    "Rheumatologist",
    "Allergist",
    "Oncologist",
  ];

  // Group doctors by specialization
  const doctorsBySpecialization = specializations.reduce(
    (acc, specialization) => {
      acc[specialization] = appointmentsData.filter(
        (doc) => doc.specialization === specialization
      );
      return acc;
    },
    {}
  );

  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    const spec = e.target.value;
    setSelectedSpecialization(spec);
    setSelectedDoctor(""); // Reset doctor when specialization changes
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedTime("");
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const renderModal = () => {
    if (!showModal) return null;

    const availableDoctors = selectedSpecialization
      ? doctorsBySpecialization[selectedSpecialization]
      : [];

    const selectedDoctorData = availableDoctors.find(
      (doc) => doc.doctor === selectedDoctor
    );

    // const availableDate = selectedDoctorData ? selectedDoctorData.date : null;

    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>Create Appointment</h3>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <label>
              Specialization:
              <select
                value={selectedSpecialization}
                onChange={handleSpecializationChange}
              >
                <option value="">--Select Specialization--</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Doctor:
              <select
                value={selectedDoctor}
                onChange={handleDoctorChange}
                disabled={!selectedSpecialization}
              >
                <option value="">--Select Doctor--</option>
                {availableDoctors.map((doc) => (
                  <option key={doc.doctor} value={doc.doctor}>
                    {doc.doctor}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Appointment Date:
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                disabled={!selectedDoctorData}
                min={selectedDoctorData ? selectedDoctorData.date : ""}
              />
            </label>

            <label>
              Appointment Time:
              <input
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
                disabled={!selectedDoctorData}
              />
            </label>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="button" className="close-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("appointments");

  // Handle menu item click and navigation
  const handleMenuClick = (key, route) => {
    setActiveMenu(key);
    if (route) navigate(route);
  };

  // Render the sidebar menu sections and items
  const renderSidebar = () =>
    sidebarMenuItems.map(({ section, items }, idx) => (
      <div key={idx} className="sidebar-section">
        <div className="section-divider" />
        {items.map(({ key, icon, label, route }) => (
          <SidebarMenuItem
            key={key}
            icon={icon}
            label={label}
            isActive={activeMenu === key}
            onClick={() => handleMenuClick(key, route)}
          />
        ))}
        {/* Support link only in Section 3 */}
        {section === "Section 3" && (
          <li className="support" style={{ cursor: "pointer" }}>
            <FaPhoneAlt /> Support
          </li>
        )}
      </div>
    ));

  // Content rendered based on active menu selection
  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return (
          <div className="hero-and-reports">
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
                {reportsData.map(({ name, date }, index) => (
                  <li key={index}>
                    <FaRegFilePdf className="red-icon" /> {name}{" "}
                    <span>{date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "appointments":
        return (
          <section className="appointments-reports">
            <div className="top">
              
              <h4 className="section-vitals">Appointments</h4>
             
            </div>

            <div className="actions">
                            {successMessage?   <div className="success-message">   <i className="fa-sharp fa-regular fa-circle-check" style={{ color: "green", marginRight: "8px" }}></i>
    {successMessage}</div>: 
              <button className="create-btn" onClick={openModal}>
                <i className="fas fa-plus" style={{ marginRight: "6px" }}></i>
                Create Appointment
              </button>
    }
            </div>
            <div className="appointments new">
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
                  {appointmentsData.map((appointment, idx) => (
                    <AppointmentRow key={idx} appointment={appointment} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );

      case "calendar":
        return (
          <div className="hero-and-reports">
            <h3>Calendar View</h3>
            <p>
              Here you can see your schedule in calendar format (placeholder).
            </p>
          </div>
        );

      case "message":
        return (
          <div className="hero-and-reports">
            <h3>Messages</h3>
            <p>You have no new messages (placeholder).</p>
          </div>
        );

      case "reports":
        return (
          <div className="hero-and-reports">
            <h3>All Reports</h3>
            <ul>
              {reportsData.map(({ name, date }, index) => (
                <li key={index}>
                  <FaRegFilePdf className="red-icon" /> {name}{" "}
                  <span>{date}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case "settings":
        return (
          <div className="hero-and-reports">
            <h3>Settings</h3>
            <p>Update your preferences here (placeholder).</p>
          </div>
        );

      case "logout":
        return (
          <div className="hero-and-reports">
            <h3>Log out</h3>
            <p>You have been logged out (placeholder).</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <i className="fa-solid fa-stethoscope"></i>
          Tabi<span className="grey-letter">bu</span>
        </div>

        <ul className="nav-links">{renderSidebar()}</ul>
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

        {/* Dynamic content based on active menu */}
        {renderContent()}
        {renderModal()}
      </main>
    </div>
  );
};

export default Appointments;

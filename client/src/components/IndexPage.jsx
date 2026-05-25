
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

import {
  FaHeartPulse,
  FaBars,
  FaTableColumns,
  FaUser,
  FaCalendarCheck,
  FaRightFromBracket,
  FaUserDoctor,
  FaUsers,
  FaHospital,
  FaCalendarPlus,
  FaFileMedical,
  FaVideo,
  FaBell
} from 'react-icons/fa6';

const IndexPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="indexpage">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo-section">
          <div className="logo-icon">
            <FaHeartPulse />
          </div>

          <h2>HealthCare+</h2>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

          <li><a href="#home">Home</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#doctors">Doctors</a></li>

          <li><a href="#appointments">Appointments</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="nav-right">

          <button
              className="appointment-btn"
              onClick={() => navigate('/appointment')}>
              Book Appointment
          </button>

          {/* Profile Dropdown */}
          <div className="profile-container">

            <div
              className="profile-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="https://i.imgur.com/6VBx3io.png"
                alt="profile"
              />
            </div>

            {dropdownOpen && (

              <div className="dropdown-menu">

                <a href="/dashboard">
                  <FaTableColumns />
                  Dashboard
                </a>

                <a href="/profile">
                  <FaUser />
                  My Profile
                </a>

                <a href="/appointments">
                  <FaCalendarCheck />
                  Appointments
                </a>

                <a href="/login" className="logout">
                  <FaRightFromBracket />
                  Logout
                </a>

              </div>

            )}

          </div>

          {/* Mobile Menu */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </div>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Smart Hospital Appointment
            <span> Management System</span>
          </h1>

          <p>
            Book appointments instantly, manage patient records,
            connect with doctors and experience seamless healthcare.
          </p>

          <div className="hero-buttons">

            {/* <button className="primary-btn">
              Get Started
            </button> */}
            <button
                className="primary-btn"
                onClick={() => navigate('/appointment')}
              >
                Get Started
              </button>

            <button className="secondary-btn">
              Explore Services
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
            alt="doctor"
          />

        </div>

      </section>


      {/* Stats */}
      <section className="stats-section">

        <div className="stat-card">
          <FaUserDoctor className="stat-icon" />
          <h2>120+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>10K+</h2>
          <p>Happy Patients</p>
        </div>

        <div className="stat-card">
          <FaCalendarCheck className="stat-icon" />
          <h2>25K+</h2>
          <p>Appointments</p>
        </div>

        <div className="stat-card">
          <FaHospital className="stat-icon" />
          <h2>15+</h2>
          <p>Hospital Branches</p>
        </div>

      </section>


      {/* Services */}
      <section className="services" id="services">

        <div className="section-title">

          <h2>Our Services</h2>

          <p>
            Advanced healthcare facilities for better patient care.
          </p>

        </div>

        <div className="service-container">

          <div className="service-card">
            <FaCalendarPlus className="service-icon" />
            <h3>Easy Appointment</h3>
            <p>Book appointments quickly and easily.</p>
          </div>

          <div className="service-card">
            <FaFileMedical className="service-icon" />
            <h3>Medical Records</h3>
            <p>Manage patient reports securely.</p>
          </div>

          <div className="service-card">
            <FaVideo className="service-icon" />
            <h3>Video Consultation</h3>
            <p>Consult doctors remotely online.</p>
          </div>

          <div className="service-card">
            <FaBell className="service-icon" />
            <h3>Notifications</h3>
            <p>Receive reminders instantly.</p>
          </div>

        </div>

      </section>


      {/* Doctors */}
      <section className="doctors" id="doctors">

        <div className="section-title">

          <h2>Our Specialists</h2>

          <p>Meet our experienced doctors.</p>

        </div>

        <div className="doctor-container">

          <div className="doctor-card">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="doctor"
            />

            <h3>Dr. Raj Sharma</h3>

            <p>Cardiologist</p>

          </div>

          <div className="doctor-card">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="doctor"
            />

            <h3>Dr. Priya Sen</h3>

            <p>Neurologist</p>

          </div>

          <div className="doctor-card">

            <img
              src="https://randomuser.me/api/portraits/men/51.jpg"
              alt="doctor"
            />

            <h3>Dr. Amit Das</h3>

            <p>Orthopedic</p>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="footer" id="contact">

        <div className="footer-content">

          <div>
            <h3>HealthCare+</h3>

            <p>
              Smart Hospital Appointment Management System.
            </p>
          </div>

          <div>

            <h4>Quick Links</h4>

            <ul>

              <li><a href="#home">Home</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#doctors">Doctors</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          <div>

            <h4>Contact</h4>

            <p>Email: healthcare@gmail.com</p>

            <p>Phone: +91 9876543210</p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Hospital Appointment Management System
          </p>

        </div>

      </footer>

    </div>
  );
};

export default IndexPage;

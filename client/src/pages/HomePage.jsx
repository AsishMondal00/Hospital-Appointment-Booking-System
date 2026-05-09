import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const features = [
  {
    title: "Book Appointments",
    desc: "Schedule doctor visits quickly without waiting in long queues.",
    icon: "📅",
  },
  {
    title: "Find Doctors",
    desc: "Search doctors by department and specialty.",
    icon: "👨‍⚕️",
  },
  {
    title: "Patient Records",
    desc: "Securely manage patient information anytime.",
    icon: "📁",
  },
  {
    title: "24/7 Support",
    desc: "Healthcare assistance whenever you need it.",
    icon: "💙",
  },
];

function HomePage() {
  const [status, setStatus] = useState("Checking server...");
  const navigate = useNavigate();

  useEffect(() => {
    const loadHealth = async () => {
      try {
        const response = await fetch("/api/health");
        const data = await response.json();
        setStatus(`${data.service} is ${data.status}`);
      } catch (error) {
        setStatus("Backend server is offline");
      }
    };

    loadHealth();
  }, []);

  return (
    <main className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MediCare</h1>

        <button
          className="login-btn"
          onClick={() => navigate("/auth")}
        >
          Login
        </button>
      </nav>
    <hr />
      {/* Hero Section */}
      <section className="hero-section">

        {/* Left Content */}
        <div className="hero-content">
          <p className="subtitle">WELCOME TO SMART HEALTHCARE</p>

          {/* <h1>
            Hospital Appointment <br />
            Booking System
          </h1> */}

          <p className="description">
            Easily book appointments, connect with trusted doctors,
            manage patient records, and simplify healthcare services
            with our modern hospital management platform.
          </p>

          <div className="button-group">
            <button
              className="start-btn"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </button>

            <button className="learn-btn">
              Learn More
            </button>
          </div>

          {/* <div className="status-box">
            {status}
          </div> */}
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
            alt="Hospital"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Our Features</h2>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 MediCare Hospital System. All rights reserved.
      </footer>
    </main>
  );
}

export default HomePage;
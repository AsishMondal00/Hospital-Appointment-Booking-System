import React, { useState } from 'react';
import './Appointment.css';

const AppointmentPage = () => {

  const [step, setStep] = useState(1);

  const [appointmentData, setAppointmentData] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
  });

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  // Generate OTP
  const sendOtp = () => {

    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();

    setGeneratedOtp(randomOtp);

    alert(`Demo OTP: ${randomOtp}`);

    setStep(2);
  };

  // Verify OTP
  const verifyOtp = () => {

    if (otp === generatedOtp) {
      alert('OTP Verified Successfully');
      setStep(3);
    }
    else {
      alert('Invalid OTP');
    }
  };

  // Payment Success
  const handlePayment = () => {

    alert('Payment Successful & Appointment Booked');

    setStep(4);
  };

  return (

    <div className="appointment-container">

      <div className="appointment-card">

        <h1>Hospital Appointment Booking</h1>

        {/* STEP 1 */}
        {step === 1 && (

          <div>

            <div className="input-group">
              <label>Patient Name</label>

              <input
                type="text"
                name="patientName"
                value={appointmentData.patientName}
                onChange={handleChange}
                placeholder="Enter patient name"
              />
            </div>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={appointmentData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={appointmentData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="input-group">
              <label>Select Doctor</label>

              <select
                name="doctor"
                value={appointmentData.doctor}
                onChange={handleChange}
              >
                <option value="">Choose Doctor</option>
                <option>Dr. Raj Sharma</option>
                <option>Dr. Priya Sen</option>
                <option>Dr. Amit Das</option>
              </select>
            </div>

            <div className="row">

              <div className="input-group">
                <label>Date</label>

                <input
                  type="date"
                  name="date"
                  value={appointmentData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Time</label>

                <input
                  type="time"
                  name="time"
                  value={appointmentData.time}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button
              className="main-btn"
              onClick={sendOtp}
            >
              Send OTP
            </button>

          </div>

        )}


        {/* STEP 2 OTP */}
        {step === 2 && (

          <div className="otp-section">

            <h2>OTP Verification</h2>

            <p>
              Enter the OTP sent to your mobile/email.
            </p>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="otp-input"
            />

            <button
              className="main-btn"
              onClick={verifyOtp}
            >
              Verify OTP
            </button>

          </div>

        )}


        {/* STEP 3 PAYMENT */}
        {step === 3 && (

          <div className="payment-section">

            <h2>Payment Gateway</h2>

            <div className="payment-card">

              <p><strong>Consultation Fee:</strong> ₹500</p>

              <div className="payment-options">

                <label>
                  <input type="radio" name="payment" />
                  UPI
                </label>

                <label>
                  <input type="radio" name="payment" />
                  Credit Card
                </label>

                <label>
                  <input type="radio" name="payment" />
                  Debit Card
                </label>

                <label>
                  <input type="radio" name="payment" />
                  Net Banking
                </label>

              </div>

              <button
                className="main-btn"
                onClick={handlePayment}
              >
                Pay Now
              </button>

            </div>

          </div>

        )}


        {/* STEP 4 SUCCESS */}
        {step === 4 && (

          <div className="success-section">

            <h2>Appointment Booked Successfully</h2>

            <p>
              Thank you for booking your appointment.
            </p>

            <div className="summary-box">

              <p>
                <strong>Patient:</strong>
                {appointmentData.patientName}
              </p>

              <p>
                <strong>Doctor:</strong>
                {appointmentData.doctor}
              </p>

              <p>
                <strong>Date:</strong>
                {appointmentData.date}
              </p>

              <p>
                <strong>Time:</strong>
                {appointmentData.time}
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default AppointmentPage;
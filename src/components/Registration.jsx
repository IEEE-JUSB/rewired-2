import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    year: "",
    department: "",
    customDepartment: "",
    eventName: "Rewired 2.0",
    transactionId: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);


    const submissionData = {
      ...formData,
      department: formData.department === "Other" ? formData.customDepartment : formData.department
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Registration successful! Check your email for verification.' });
        setFormData({
          email: "",
          name: "",
          phoneNumber: "",
          year: "",
          department: "",
          customDepartment: "",
          eventName: "Rewired 2.0",
          transactionId: ""
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const yearOptions = [
    "1st Year", "2nd Year", "3rd Year", "4th Year"
  ];

  const departmentOptions = [
    "Chemical Engineering",
    "Civil Engineering", 
    "Computer Science & Engineering",
    "Construction Engineering",
    "Electrical Engineering",
    "Electronics & Telecommunication Engineering",
    "Food Technology & Bio-Chemical Engineering",
    "Information Technology",
    "Instrumentation and Electronics Engineering",
    "Mechanical Engineering",
    "Metallurgical & Material Engineering",
    "Pharmaceutical Technology",
    "Power Engineering",
    "Printing Engineering",
    "Production Engineering",
    "Other"
  ];

  return (
    <section className="w-full min-h-[90svh] flex flex-col items-center px-4 md:px-0 py-16">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-red mb-4">Event Registration</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join us for Rewired 2.0! Complete the form below to secure your spot at this exciting event.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-background border-2 border-red/40 rounded-2xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-red font-semibold mb-2 text-lg">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-red font-semibold mb-2 text-lg">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Phone and Year Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-red font-semibold mb-2 text-lg">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-red font-semibold mb-2 text-lg">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                >
                  <option value="" className="bg-zinc-900 text-white">Select your year</option>
                  {yearOptions.map((year, index) => (
                    <option key={index} value={year} className="bg-zinc-900 text-white">{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-red font-semibold mb-2 text-lg">
                Department *
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
              >
                <option value="" className="bg-zinc-900 text-white">Select your department</option>
                {departmentOptions.map((dept, index) => (
                  <option key={index} value={dept} className="bg-zinc-900 text-white">{dept}</option>
                ))}
              </select>
              
              {formData.department === "Other" && (
                <div className="mt-3">
                  <label htmlFor="customDepartment" className="block text-red font-semibold mb-2 text-lg">
                    Specify Department *
                  </label>
                  <input
                    type="text"
                    id="customDepartment"
                    name="customDepartment"
                    value={formData.customDepartment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                    placeholder="Enter your department name"
                  />
                </div>
              )}
            </div>

            {/* Event Name */}
            <div>
              <label htmlFor="eventName" className="block text-red font-semibold mb-2 text-lg">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                disabled
                className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-red/20 rounded-lg text-white/70 cursor-not-allowed"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

            {/* Left Side: Transaction ID Input */}
            <div>
              <label htmlFor="transactionId" className="block text-red font-semibold mb-2 text-lg">
                Transaction ID *
              </label>
              <input
                type="text"
                id="transactionId"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-900/50 border-2 border-red/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition-all duration-300"
                placeholder="Enter your transaction ID"
              />
              <p className="text-sm text-white/60 mt-2">
                Complete the payment and enter the transaction ID from your payment receipt
              </p>
            </div>

            {/* Right Side: UPI Payment Details */}
            <div className="flex flex-col items-center justify-center h-full"> 
              <div className="text-center">
                <p className="text-red font-semibold mb-4 text-lg">UPI Payment</p>
                <div 
                  className="w-32 h-32 bg-zinc-800/50 border-2 border-red/30 rounded-lg flex items-center justify-center mb-4 p-2 cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto" 
                  onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50';
                    modal.onclick = () => modal.remove();
                    
                    const qrContent = document.createElement('div');
                    qrContent.className = 'bg-white p-6 rounded-lg max-w-sm mx-4';
                    qrContent.onclick = (e) => e.stopPropagation();
                    
                    qrContent.innerHTML = `
                      <div class="text-center">
                        <p class="text-black font-semibold mb-4 text-lg">UPI Payment QR Code</p>
                        <div class="w-64 h-64 bg-white border-2 border-red rounded-lg flex items-center justify-center p-4 mx-auto">
                          <div class="w-full h-full grid grid-cols-16 gap-0.5">
                            ${Array.from({ length: 256 }, () => 
                              `<div class="w-full h-full rounded-sm ${Math.random() > 0.4 ? 'bg-black' : 'bg-white'}"></div>`
                            ).join('')}
                          </div>
                        </div>
                        <div class="mt-4 text-black">
                          <p class="text-sm font-medium">UPI ID: rewired@example</p>
                          <p class="text-lg font-bold text-gray-800 my-2">Amount: ₹XXX</p> 
                          <p class="text-xs text-gray-500 mt-2">Click anywhere outside to close</p>
                        </div>
                      </div>
                    `;
                    
                    modal.appendChild(qrContent);
                    document.body.appendChild(modal);
                  }}
                >
                  {/* QR Code Placeholder */}
                  <div className="w-full h-full bg-white rounded-sm p-1">
                    <div className="w-full h-full grid grid-cols-8 gap-0.5">
                      {Array.from({ length: 64 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-full h-full rounded-sm ${
                            Math.random() > 0.4 ? 'bg-black' : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/60 mb-1">UPI ID: rewired@example</p>
 
                  <p className="text-xl font-bold text-white my-3">Amount: ₹XXX</p>
                  <p className="text-xs text-white/40 mt-1">Click QR to enlarge</p>
                </div>
              </div>
            </div>
          </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 bg-red text-white font-bold text-xl rounded-lg hover:bg-red/80 disabled:bg-red/50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? "Processing..." : "Complete Registration"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div className={`p-4 rounded-lg text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/30 border border-green-500/50 text-green-300' 
                  : 'bg-red-900/30 border border-red-500/50 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-red hover:text-red/80 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Registration;

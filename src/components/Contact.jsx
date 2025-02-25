import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName) {
      newErrors.firstName = "Please fill the first name";
    } 
    
    if (!formData.lastName) {
      newErrors.lastName = "Please fill the last name";
    } 
    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row mt-[50px] mb-11">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 bg-black text-white p-8 flex flex-col justify-center relative"
        style={{
          backgroundImage:
            "url('https://pic.rutube.ru/playlist/b62ec9ae-0f11-11ef-b70f-02420a000521.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Address</h2>
        <p className="mb-6">
          Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
        </p>
        <h2 className="text-xl font-semibold mb-4">Let's Talk</h2>
        <p className="text-gray-400 mb-6">+1 800 1236879</p>
        <h2 className="text-xl font-semibold mb-4">General Support</h2>
        <p className="text-gray-400">contact@example.com</p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[#1b1a1a] relative">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Send Us A Message
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="tel"
            name="phone"
            placeholder=" +1 800 000000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <textarea
            name="message"
            placeholder="Write us a message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md h-32"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[black] text-white p-3 rounded-md hover:bg-gray-900"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

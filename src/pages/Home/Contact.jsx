import React from "react";
import Swal from "sweetalert2";
import "./Contact.css"


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "18277203-921e-4c99-a931-182240612d36");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };
  return (
    <div>
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter Your name"
              name="name"
              required
            ></input>
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter Your name"
              name="email"
              required
            ></input>
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              name="message"
              className="field-mess"
              placeholder="Enter Your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;

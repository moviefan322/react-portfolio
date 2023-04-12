import React from "react";
import { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [message, setMessage] = useState({
    sender: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      setResponse("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("https://mailthis.to/philman202@yahoo.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      console.log(res);
      setResponse("Your message has been sent!");
    } catch (err) {
      setResponse("Oops! There was an error. Please try again.");
      console.error(err);
    }
  };

  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value }); // update the message state with the new input value

    if (event.target.name === "email") {
      setIsEmailValid(validateEmail(event.target.value));
    }
    if (!isEmailValid) {
      setResponse("Please enter a valid email address.");
    } else {
      setResponse(null);
    }
  };

  const getAngry = (event) => {
    if (event.target.value === "") {
      setResponse("All fields must be filled in.");
    }
  };

  return (
    <div id="contact">
      <h1>Contact Me!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sender">Name:</label>
          <input
            type="text"
            name="sender"
            value={message.name}
            onChange={handleChange}
            onMouseOut={getAngry}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={message.email}
            onChange={handleChange}
            onMouseOut={getAngry}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message.message}
            onChange={handleChange}
            onMouseOut={getAngry}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <p style={{ color: "darkred", fontWeight: "bold" }}>{response}</p>
      )}
    </div>
  );
};

export default Contact;

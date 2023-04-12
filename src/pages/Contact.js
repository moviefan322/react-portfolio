import React from "react";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    console.log(message);
    e.preventDefault();
    try {
      const res = await fetch("https://mailthis.to/philman202@yahoo.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      await res;
      setResponse("Your message has been sent!");
    } catch (err) {
      setResponse("Oops! There was an error. Please try again.");
      console.error(err);
    }
  };

  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value }); // update the message state with the new input value
  };

  return (
    <div id="contact">
      <h1>Contact Me!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={message.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={message.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default Contact;

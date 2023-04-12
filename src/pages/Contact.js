import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Me!</h1>
      <form
        id="contact-form"
        method="post"
        action="mailto:youremail@youremail.com"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

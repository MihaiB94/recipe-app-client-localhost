import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
   const form = useRef();
   const [success, setSuccess] = useState(false);

   function sendEmail(e) {
      e.preventDefault();

      emailjs
         .sendForm(
            "gmail_service",
            "recipe_app_template",
            form.current,
            "8W4dWO7EkOvm14McP"
         )
         .then(
            (result) => {
               console.log(result.text);
               setSuccess(true);
            },
            (error) => {
               console.log(error.text);
               setSuccess(false);
            }
         );
      e.target.reset();
   }

   return (
      <div className="contact">
         <div className="contact-box">
            <div className="contact-links">
               <h2>CONTACT</h2>
               <div className="links">
                  <div className="contact-link">
                     <a>
                        <i className="fa-brands fa-gitlab contact-icon"></i>
                     </a>
                  </div>
                  <div className="contact-link">
                     <a>
                        <i className="fa-brands fa-square-facebook contact-icon"></i>
                     </a>
                  </div>
                  <div className="contact-link">
                     <a>
                        <i className="fa-brands fa-twitter contact-icon"></i>
                     </a>
                  </div>
                  <div className="contact-link">
                     <a>
                        <i className="fa-brands fa-linkedin contact-icon"></i>
                     </a>
                  </div>
               </div>
            </div>

            <div className="contact-form-wrapper">
               <form ref={form} onSubmit={sendEmail}>
                  <div className="form-item upInputs">
                     <input
                        className="contact-form-input"
                        placeholder=" "
                        type="text"
                        name="name"
                        required
                     />
                     <label className="contact-form-label">Name:</label>
                  </div>

                  <div className="form-item upInputs">
                     <input
                        className="contact-form-input "
                        placeholder=" "
                        type="email"
                        name="email"
                        required
                     />
                     <label className="contact-form-label">Email:</label>
                  </div>

                  <div className="form-item">
                     <textarea
                        className="contact-form-input"
                        name="message"
                        required
                     ></textarea>
                     <label className="contact-form-label">Message:</label>
                  </div>
                  <button className="submit-btn">Send</button>
                  {success && (
                     <span className="success-txt-email">
                        The email was sent successful
                     </span>
                  )}
               </form>
            </div>
         </div>
      </div>
   );
}

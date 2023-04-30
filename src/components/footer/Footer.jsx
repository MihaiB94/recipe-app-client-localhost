import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
   const openCodepen = () => {
      window.open('https://codepen.io/mih_ai94');
   };

   const openLinkedIn = () => {
      window.open('https://www.linkedin.com/in/mihai-bordeniuc/');
   };

   const openGithub = () => {
      window.open('https://github.com/MihaiB94');
   };
   return (
      <div className="footer">
         <div className="footer-container">
            <div className="left-section">
               <div className="footer-links">
                  <Link to="/">Home</Link>
                  {/* <Link to="/about">About</Link> */}
                  <Link to="/contact">Contact</Link>
               </div>
               <p>Mihai Bordeniuc &copy; 2022</p>
            </div>
            <div className="right-section">
               <div className="social-link">
                  <i className="fa-brands fa-codepen" onClick={openCodepen}></i>
               </div>

               <div className="social-link">
                  <i
                     className="fa-brands fa-linkedin"
                     onClick={openLinkedIn}
                  ></i>
               </div>
               <div className="social-link">
                  <i className="fa-brands fa-github" onClick={openGithub}></i>
               </div>
            </div>
         </div>
      </div>
   );
}

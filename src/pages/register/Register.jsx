import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './register.css';
import '../../style/generalStyle.css';
import '../../style/form/generalForm.css';
import '../../style/form/messageBelowBtn.css';

export default function Register() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [navbarHeight, setNavbarHeight] = useState(0);
   const [footerHeight, setFooterHeight] = useState(0);
   const formHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
   const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

   useEffect(() => {
      const footer = document.querySelector('.footer');
      const navbar = document.querySelector('.nav');

      if (navbar) {
         setNavbarHeight(navbar.offsetHeight);
      }

      if (footer) {
         setFooterHeight(footer.offsetHeight);
      }
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      // Validate input
      // Validate input
      if (!username || !username.trim()) {
         setError('Please enter a valid username.');
         return;
      }

      if (!email || !password || !confirmPassword) {
         setError('Please fill in all fields.');
         return;
      }

      if (password !== confirmPassword) {
         setError('Passwords do not match.');
         return;
      }

      if (!passwordRegex.test(password)) {
         setError(
            'Password must contain at least 1 uppercase, 1 lowercase, 1 digit, 1 special character, and be between 8 and 20 characters long.'
         );
         return;
      }

      // Clear error message
      setError('');

      setIsLoading(true); // set loading to true before making the API call
      setError('');
      try {
         const res = await axios.post('/authentication/register', {
            username: username.toLowerCase(), // Convert username to lowercase
            email: email.toLowerCase(), // Convert email to lowercase
            password,
            confirmPassword
         });
         console.log(res.data); // add this line to log the response data
         const token = res.data.token; // Get the token value from the response
         console.log(token);
         // save JWT token to local storage
         localStorage.setItem('token', res.data.token);

         setIsLoading(false);
         setError('');

         res.data && window.location.replace('/account/status');
      } catch (err) {
         if (err.response) {
            setError(err.response.data.message); // Update error message to show only the "message" field from the response
         } else {
            setError(
               error.response?.data?.message ??
                  'An error occurred while registering. Please try again.'
            );
         }
         setIsLoading(false); // set loading to false after API call completes
      }
   };

   return (
      <div className="general-form" style={{ height: formHeight }}>
         {isLoading ? (
            <div className="loading-spinner-container">
               <div className="loading-msg">Please Wait!</div>
               <div className="loading-spinner">
                  <BeatLoader color={'#000'} />
               </div>
            </div>
         ) : (
            <div className="general-form-container">
               <div className="general-form-box-wrapper">
                  <div className="form-header">
                     <h1>Register Account</h1>
                  </div>
                  <div className="login-form-wrapper">
                     <form onSubmit={handleSubmit}>
                        <div className="general-form-group">
                           <label
                              className="general-form-label"
                              htmlFor="username"
                           >
                              Username
                           </label>
                           <input
                              className="general-form-input"
                              type="text"
                              id="username"
                              name="username"
                              required="required"
                              onChange={(e) => setUsername(e.target.value)}
                           />
                        </div>

                        <div className="general-form-group">
                           <label
                              className="general-form-label"
                              htmlFor="email"
                           >
                              Email Address
                           </label>
                           <input
                              className="general-form-input"
                              type="email"
                              id="email"
                              name="email"
                              required="required"
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </div>

                        <div className="general-form-group">
                           <label
                              className="general-form-label"
                              htmlFor="password"
                           >
                              Password
                           </label>
                           <input
                              className="general-form-input"
                              type="password"
                              id="password"
                              name="password"
                              required="required"
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </div>
                        <div className="general-form-group">
                           <label
                              htmlFor="confirmPassword"
                              className="general-form-label"
                           >
                              Confirm Password
                           </label>
                           <input
                              className="general-form-input"
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              required="required"
                              onChange={(e) =>
                                 setConfirmPassword(e.target.value)
                              }
                           />
                        </div>

                        <div className="general-form-group-btn">
                           <button className="general-form-btn" type="submit">
                              Register
                           </button>
                        </div>

                        <div className="message-under-btn">
                           <p> Already have an account?</p>
                           <Link
                              className="link message-under-btn-link "
                              to="/login"
                           >
                              Login
                           </Link>
                        </div>
                        {error && <p className="general-form-error">{error}</p>}
                     </form>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

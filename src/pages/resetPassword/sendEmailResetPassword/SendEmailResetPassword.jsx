import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../style/generalStyle.css';
import '../../../style/form/generalForm.css';
import '../sendEmailResetPassword/sendEmailResetPassword.css';
import '../../../style/colorPalette.css';
import { BarLoader } from 'react-spinners';

export default function ResetPassword() {
   const [email, setEmail] = useState('');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [successMessage, setSuccessMessage] = useState('');

   const [navbarHeight, setNavbarHeight] = useState(0);
   const [footerHeight, setFooterHeight] = useState(0);
   const formHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;

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

   const resetPassword = async (e) => {
      e.preventDefault();
      setError('');
      setSuccessMessage(''); // reset the success message state
      setIsLoading(true);
      try {
         await axios.post('/authentication/resetpassword', {
            email
         });

         setIsLoading(false);
         // show a success message to the user
         setSuccessMessage(
            'If the email is valid, shortly you will receive an email with the reset password link'
         );
      } catch (error) {
         setError(error.message);
         console.log(error);

         setIsLoading(false);
      }
   };

   return (
      <div
         className="general-form-submit-message"
         style={{ height: formHeight }}
      >
         {successMessage ? (
            <div className="general-form-submit-message-container">
               <p className="general-form-success">{successMessage}</p>
               <p className="general-form-error">
                  If you did not received any email or the link is expired than
                  click on{' '}
                  <Link
                     className="link message-under-btn-link"
                     onClick={() => window.location.reload()}
                  >
                     Reset Password
                  </Link>{' '}
                  and try again!
               </p>
            </div>
         ) : (
            <div className="general-form-container">
               <div className="general-form-box-wrapper">
                  <div className="form-header reset-password-header">
                     <h1 className="reset-password-title">
                        Forgot your password?
                     </h1>
                     <hr className="forgot-password-hr" />
                     <h3 className="reset-password-subtitle">
                        Enter your email address to reset your password
                     </h3>
                  </div>

                  <div className="general-form-form-wrapper">
                     <form
                        className="general-form-form"
                        onSubmit={resetPassword}
                     >
                        <div className="general-form-group">
                           <label
                              className="general-form-label"
                              htmlFor="email"
                           >
                              Email
                           </label>
                           <input
                              className="general-form-input"
                              id="email"
                              type="email"
                              name="email"
                              required="required"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                           />
                        </div>

                        {isLoading ? (
                           <div className="general-form-group-btn">
                              <div className="login-spinner">
                                 <BarLoader color={'#c4d806'} />
                              </div>
                           </div>
                        ) : (
                           <div className="general-form-group-btn">
                              <button
                                 className="general-form-btn"
                                 type="submit"
                              >
                                 Reset Password
                              </button>
                           </div>
                        )}

                        {error && <p className="general-form-error">{error}</p>}

                        <div className="message-under-btn">
                           <p>Do not have an account yet?</p>
                           <Link
                              className="link message-under-btn-link "
                              to="/register"
                           >
                              Register
                           </Link>
                        </div>
                        <div className="message-under-btn">
                           <p>Already have an account?</p>
                           <Link
                              className="link message-under-btn-link "
                              to="/login"
                           >
                              Login
                           </Link>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './resetPasswordPage.css';

export default function ResetPassword() {
   const { resetToken } = useParams();
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

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

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setErrorMessage('Passwords do not match');
         return;
      }
      try {
         const response = await fetch(
            `/authentication/resetpassword/${resetToken}`,
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({ password })
            }
         );
         const data = await response.json();
         if (response.ok) {
            setErrorMessage('');

            // Redirect the user to the login page or dashboard
            window.location.replace('/login');
         } else {
            setErrorMessage(data.message);
         }
      } catch (error) {
         console.error(error);
         setErrorMessage('Server error');
      }
   };

   return (
      <div className="general-form" style={{ height: formHeight }}>
         <div className="general-form-container">
            <div className="general-form-box-wrapper">
               <div className="form-header reset-password-header">
                  <h1 className="reset-password-title">Reset Your Password</h1>
                  <hr className="forgot-password-hr" />
               </div>

               <div className="general-form-form-wrapper">
                  <form className="general-form-form" onSubmit={handleSubmit}>
                     <div className="general-form-group">
                        <label className="general-form-label" htmlFor="email">
                           New Password
                        </label>
                        <input
                           className="general-form-input"
                           type="password"
                           id="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                        />
                     </div>
                     <div className="general-form-group">
                        <label className="general-form-label" htmlFor="email">
                           Confirm Password
                        </label>
                        <input
                           className="general-form-input"
                           type="password"
                           id="confirmPassword"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           required
                        />
                     </div>

                     <div className="general-form-group-btn">
                        <button className="general-form-btn" type="submit">
                           Reset Password
                        </button>
                     </div>

                     {errorMessage === 'Invalid or expired token' ? (
                        <div className="reset-pass-invalid">
                           <p className="general-form-error">{errorMessage}</p>
                           <Link
                              className="link message-under-btn-link "
                              to="/resetpassword"
                           >
                              Click here to send another link!
                           </Link>
                        </div>
                     ) : (
                        <p className="general-form-error">{errorMessage}</p>
                     )}
                  </form>
               </div>
            </div>
         </div>{' '}
      </div>
   );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useContext, useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import './login.css';
import '../../style/generalStyle.css';
import '../../style/form/generalForm.css';
import '../../style/form/messageBelowBtn.css';
import { setToken } from '../../auth';
import axios from 'axios';
import { ContextAPI } from '../../contextAPI/ContextAPI';

export default function Login() {
   const userRef = useRef();
   const passwordRef = useRef();

   const { dispatch, isFetching } = useContext(ContextAPI);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

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

   const submitForm = async (e) => {
      e.preventDefault();
      dispatch({ type: 'LOGIN_START' });
      setIsLoading(true); // set loading to true before making the API call
      setError('');
      try {
         const res = await axios.post('/authentication/login', {
            username: userRef.current.value.trim(),
            password: passwordRef.current.value
         });

         console.log(res.data);
         const { token, expiresIn } = res.data;

         setToken(token, expiresIn);
         dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });

         // Include token in headers for subsequent requests
         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (err) {
         dispatch({ type: 'LOGIN_FAILURE', error: err.response.data.message });
         setError(err.response.data.message); // Update error message
         setIsLoading(false); // set loading to false when API call completes with an error
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
                     <h1>Login into your account</h1>
                  </div>
                  <div className="general-form-form-wrapper">
                     <form className="general-form-form" onSubmit={submitForm}>
                        <div className="general-form-group">
                           <label
                              className="general-form-label"
                              htmlFor="username"
                           >
                              Username
                           </label>
                           <input
                              className="general-form-input"
                              id="username"
                              type="text"
                              name="username"
                              required="required"
                              ref={userRef}
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
                              id="password"
                              type="password"
                              name="password"
                              required="required"
                              ref={passwordRef}
                           />
                        </div>

                        <div className="general-form-group-btn">
                           <button
                              className="general-form-btn"
                              type="submit"
                              disabled={isFetching}
                           >
                              Login
                           </button>
                        </div>

                        {error && <p className="general-form-error">{error}</p>}

                        <div className="message-under-btn">
                           <Link
                              className="link message-under-btn-link"
                              to="/resetpassword"
                           >
                              Forgot your password?
                           </Link>
                        </div>
                        <div className="message-under-btn">
                           <p>Do not have an account yet?</p>
                           <Link
                              className="link message-under-btn-link "
                              to="/register"
                           >
                              Register
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

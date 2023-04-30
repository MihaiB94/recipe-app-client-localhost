import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './confirmAccount.css';

const VerifyAccount = () => {
   const { confirmationToken } = useParams();
   const [message, setMessage] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      const verifyAccount = async () => {
         try {
            const response = await axios.get(
               `/authentication/verify/${confirmationToken}`
            );
            setMessage(response.data.message);
         } catch (err) {
            setMessage(err.response.data.message);
         }
      };

      // Only make the request if account hasn't been verified yet
      if (!message) {
         verifyAccount();
      }
   }, []);
   const handleResendEmail = async () => {
      try {
         const response = await axios.post(
            '/authentication/resend-confirmation-email',
            { confirmationToken } // Send the confirmationToken as payload
         );
         setMessage(response.data.message);
      } catch (err) {
         setMessage(err.response.data.message);
      }
   };

   return (
      <div className="account-verify">
         <div className="account-verify-container">
            {message ? (
               <p className="account-verify-message">{message}</p>
            ) : (
               <p className="account-verify-message">
                  Verifying your account, please wait...
               </p>
            )}
            {message !== 'Account is already verified' && (
               <button
                  className="account-verify-button"
                  onClick={handleResendEmail}
               >
                  Resend Confirmation Email
               </button>
            )}

            {message === 'Account is already verified' ||
               ('Account confirmed successfully' && (
                  <button
                     className="account-verify-button"
                     onClick={() => navigate('/login')}
                  >
                     Go to Login
                  </button>
               ))}
         </div>
      </div>
   );
};

export default VerifyAccount;

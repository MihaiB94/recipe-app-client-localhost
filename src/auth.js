import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { ContextAPI } from './contextAPI/ContextAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const setToken = (token, expiresIn) => {
   // Set token to localStorage and cookies
   localStorage.setItem('token', token);
   // Cookies.set('token', token, { httpOnly: true, expires: expiresIn });

   // Set timer to delete token when it expires
   const tokenExpirationTime = new Date().getTime() + expiresIn * 1000;
   setTimeout(() => {
      localStorage.removeItem('token');
      Cookies.remove('token');
      removeUser();
   }, tokenExpirationTime - Date.now());
};

const removeUser = () => {
   localStorage.removeItem('user');
};

const LogoutUser = () => {
   const { user, dispatch } = useContext(ContextAPI);

   localStorage.removeItem('token');
   Cookies.remove('token');
   dispatch({ type: 'LOGOUT' });
   window.location.reload(); // or redirect the user to the login page
};

const checkTokenExpiration = () => {
   const token = localStorage.getItem('token');
   if (token) {
      const decodedToken = jwt.decode(token);
      if (decodedToken.exp < Date.now() / 1000) {
         // Token has expired, log out the user
         toast.error('Your session has expired. Please log in again.');
         LogoutUser();
      } else {
         // Token is still valid, set a timeout to check again when it expires
         const expiresIn = decodedToken.exp - Date.now() / 1000;
         setTimeout(checkTokenExpiration, expiresIn * 1000);
      }
   }
};

export { setToken, LogoutUser, checkTokenExpiration };

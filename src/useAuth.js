import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { ContextAPI } from './contextAPI/ContextAPI';
import { useContext } from 'react';

const useAuth = () => {
   const { user, setUser } = useContext(ContextAPI);

   useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
         const decodedToken = jwt_decode(token);
         const currentTime = Date.now() / 1000;
         if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token');
            setUser(null);
         } else {
            setUser({
               id: decodedToken.id,
               username: decodedToken.username,
               permissions: decodedToken.permissions
            });
         }
      } else {
         setUser(null);
      }
   }, []);

   return user;
};

export default useAuth;

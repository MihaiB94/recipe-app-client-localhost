import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ContextAPI } from '../../contextAPI/ContextAPI';
import Recipe from '../../components/recipe/Recipe';
import jwt_decode from 'jwt-decode';
const Favorites = () => {
   const [favorites, setFavorites] = useState([]);
   const [error, setError] = useState(null);
   const { user, dispatch } = useContext(ContextAPI);
   const decodedToken = jwt_decode(user.token);
   useEffect(() => {
      axios
         .get(`http://localhost:3000/users/${decodedToken.id}/favorites`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         })
         .then((res) => setFavorites(res.data))
         .catch((err) => setError(err));
   }, []);

   return (
      <div className="recipes">
         <div className="recipes-container">
            {error && <p>{error.message}</p>}
            {favorites.map((recipe) => (
               <Recipe key={recipe._id} recipe={recipe} />
            ))}
         </div>
      </div>
   );
};

export default Favorites;

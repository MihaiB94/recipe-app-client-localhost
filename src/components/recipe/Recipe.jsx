import React, { useContext, useState } from 'react';
import './recipe.css';
import { Link } from 'react-router-dom';

export default function Recipe({ recipe }) {
   const PF = 'http://localhost:5000/images/';
   const conditions = ['https://', 'http://', 'data:image/'];

   return (
      <div className="recipe" key={recipe._id}>
         <Link to={`/recipes/${recipe._id}`} className="link">
            {conditions.some((el) => recipe.image_url.includes(el)) ? (
               <img src={recipe.image_url} className="recipe-img" />
            ) : (
               <img src={PF + recipe.image_url} alt="" className="recipe-img" />
            )}
         </Link>
         <div className="recipe-info">
            <div className="recipe-categories">
               <span className="recipe-category"> {recipe.categories}</span>
            </div>
            <span className="recipe-title">{recipe.title}</span>
            <hr />
            <span className="publish-date">
               {new Date(recipe.createdAt).toDateString()}
            </span>
         </div>
      </div>
   );
}

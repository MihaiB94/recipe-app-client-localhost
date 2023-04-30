import React from 'react';
import Recipe from '../recipe/Recipe';
import './recipes.css';

export default function Recipes({ recipes }) {
   return (
      <div className="recipes">
         <div className="recipes-container">
            {recipes.map((r) => (
               <Recipe key={r._id} recipe={r} />
            ))}
         </div>
      </div>
   );
}

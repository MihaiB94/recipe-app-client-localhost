import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Recipe from "../components/recipe/Recipe";

export default function Search() {
   const [recipes, setRecipes] = useState([]);
   const query = useLocation().search;
   // console.log(query);

   useEffect(() => {
      const fetchRecipes = async () => {
         const res = await axios.get(`/recipes/search${query}`);
         setRecipes(res.data);
         // console.log(res.data);
      };
      fetchRecipes();
   }, [query]);

   return (
      <div className="recipes">
         <div className="recipes-container">
            {recipes.map((r) => (
               <Recipe key={recipes.id} recipe={r} />
            ))}
         </div>
      </div>
   );
}

import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Recipes from '../../components/recipes/Recipes';
import Categories from '../../components/categories/Categories';
import './index.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';

export default function Index() {
   const recipesPerPageNum = 30;
   const [recipes, setRecipes] = useState([]);
   const { search } = useLocation();
   const [currentPage, setCurrentPage] = useState(1);
   const [recipesPerPage, setRecipesPerPage] = useState(recipesPerPageNum);

   useEffect(() => {
      const fetchRecipes = async () => {
         const res = await axios.get('/recipes' + search);
         setRecipes(res.data);
         console.log(res);
      };
      fetchRecipes();
   }, [search]);

   const lastRecipeIndex = currentPage * recipesPerPage;
   const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
   const currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);
   const totalPages = Math.ceil(recipes.length / recipesPerPageNum);
   const nextPage = () => setCurrentPage((prev) => prev + 1);
   const prevPage = () => setCurrentPage((prev) => prev - 1);

   return (
      <React.Fragment>
         <div className="box-shad">
            <div className="box-shad-container">
               <Header />
               <Categories />

               <div className="home-page">
                  <Recipes recipes={currentRecipes} />

                  <Pagination
                     totalRecipes={recipes.length}
                     recipesPerPage={recipesPerPage}
                     setCurrentPage={setCurrentPage}
                     currentPage={currentPage}
                     nextPage={nextPage}
                     prevPage={prevPage}
                     currentRecipes={currentRecipes}
                     totalPages={totalPages}
                  />
               </div>
            </div>
         </div>
      </React.Fragment>
   );
}

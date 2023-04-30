import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../../contextAPI/ContextAPI';
import TextareaAutosize from 'react-textarea-autosize';
import jwt_decode from 'jwt-decode';
import './singlerecipe.css';

export default function SingleRecipe() {
   const location = useLocation();
   const singleRecipePath = location.pathname.split('/')[2];

   const [recipe, setRecipe] = useState({});
   const { user, dispatch } = useContext(ContextAPI);

   const [image_url, setImage_url] = useState('');
   const [title, setTitle] = useState('');
   const [categories, setCategories] = useState([]);
   const [description, setDescription] = useState('');
   const [ingredients, setIngredients] = useState([]);
   const [preparation_steps, setPreparation_steps] = useState([]);
   const [updateMode, setUpdateMode] = useState(false);
   const PF = 'http://localhost:5000/images/';
   const [cats, setCats] = useState([]);
   const conditions = ['https://', 'http://', 'data:image/'];
   const [file, setFile] = useState(null);
   const [favorites, setFavorites] = useState([]);
   const token = localStorage.getItem('token'); // retrieve token from local storage

   console.log(user);
   const addRecipeToFavorites = async (e) => {
      e.preventDefault();

      if (!user) {
         return;
      }

      if (!user.favorites.includes(recipe._id)) {
         try {
            const res = await fetch(
               `http://localhost:3000/users/${user.id}/favorites/${recipe._id}`,
               {
                  method: 'PUT',
                  headers: {
                     'Content-Type': 'application/json',
                     Authorization: `Bearer ${token}`
                  }
               }
            );
            console.log(res);
            if (!res.ok) {
               const errorMessage = await res.json();
               console.error(errorMessage.message);
               return;
            }
            const newUser = await res.json();
            dispatch({
               type: 'UPDATE_USER',
               payload: Object.assign({}, user, newUser)
            });
         } catch (error) {
            console.error(error);
         }
      }
   };

   const removeRecipeFromFavorites = async (e) => {
      e.preventDefault();

      if (!user) {
         return;
      }

      if (user.favorites.includes(recipe._id)) {
         try {
            const res = await fetch(
               `http://localhost:3000/users/${user.id}/favorites/${recipe._id}`,
               {
                  method: 'DELETE',
                  headers: {
                     'Content-Type': 'application/json',
                     Authorization: `Bearer ${token}`
                  }
               }
            );
            console.log(res);
            if (!res.ok) {
               const errorMessage = await res.json();
               console.error(errorMessage.message);
               return;
            }
            const newUser = await res.json();
            dispatch({
               type: 'UPDATE_USER',
               payload: Object.assign({}, user, newUser)
            });
         } catch (error) {
            console.error(error);
         }
      }
   };

   useEffect(() => {
      const fetchRecipe = async () => {
         const res = await axios.get('/recipes/' + singleRecipePath);
         //console.log(res);
         setRecipe(res.data);
         setImage_url(res.data.image_url);
         setTitle(res.data.title);
         setCategories(res.data.categories);
         setDescription(res.data.description);
         setIngredients(res.data.ingredients);
         setPreparation_steps(res.data.preparation_steps);
         setUpdateMode(res.data.updateMode);
      };
      fetchRecipe();

      const fetchCats = async () => {
         const res = await axios.get('/categories');
         setCats(res.data);
      };
      fetchCats();
   }, [singleRecipePath]);

   //DELETE A recipe
   const handleDelete = async () => {
      try {
         if (recipe.userId === user.id) {
            await axios.delete(`/recipes/${recipe._id}`, {
               data: { userId: user.id },
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });
            window.location.replace('/');
         } else {
            console.log('User is not authorized to delete this recipe');
         }
      } catch (error) {
         console.log('Error deleting recipe:', error);
      }
   };

   // Set the changed state when updating ingredient input
   const handleChangeIng = (e, index) => {
      ingredients[index] = e.target.value;
      setIngredients([...ingredients]);
   };

   // Set the changed state when updating preparation steps input
   const handleChangeStep = (e, index) => {
      preparation_steps[index] = e.target.value;
      setPreparation_steps([...preparation_steps]);
   };

   //Handle Edit button
   const handleEdit = async (e) => {
      try {
         if (recipe.userId === user?.id) {
            setUpdateMode(true);
         } else {
            setUpdateMode(false);
            console.log('User is not authorized to edit this recipe');
         }
      } catch (error) {
         console.log('Error Editing recipe:', error);
      }

      e.preventDefault();
   };

   //UPDATE RECIPE
   const handleUpdate = async (e) => {
      e.preventDefault();

      // Create a new FormData object
      const formData = new FormData();
      formData.append('username', user.username);
      formData.append('title', title);
      formData.append('categories', categories);
      formData.append('description', description);
      formData.append('ingredients', JSON.stringify(ingredients));
      formData.append('preparation_steps', JSON.stringify(preparation_steps));
      formData.append('userId', user.id);

      // If an image file is selected, append it to the FormData object
      if (file) {
         const filename = Date.now() + '-' + file.name;
         formData.append('file', file, filename);
         console.log('File appended to formData:', file);
         console.log('formData:', formData);
      }

      // Make a POST request to create a new recipe
      try {
         const response = await axios.put(`/recipes/${recipe._id}`, formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
               Authorization: `Bearer ${token}`
            }
         });

         window.location.replace('/recipes/' + response.data._id);
         setUpdateMode(false);
      } catch (error) {
         console.error(error);
      }
   };

   // MAP over the categories Array and return option with every category
   const optionItems = cats.map((cat, index) => (
      <option key={index}>{cat.category_name}</option>
   ));

   return updateMode ? (
      <div className="update-recipe">
         <form className="update-form-wrapper">
            <div className="updateMode-singleRecipe">
               {file && (
                  <img
                     className="writeImg"
                     src={URL.createObjectURL(file)}
                     alt=""
                  />
               )}

               <div>
                  <label htmlFor="fileInput">
                     <img
                        className="update-single-recipe-img"
                        src={image_url}
                        alt=""
                     />
                  </label>
                  <input
                     type="file"
                     id="fileInput"
                     onChange={(e) => {
                        setFile(e.target.files[0]);
                        console.log(e.target.files[0]);
                     }}
                  />
               </div>
            </div>
            <div className="updateMode-singleRecipe">
               <label className="update-form-label">Title:</label>
               <input
                  type="text"
                  className="update-form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>
            <div className="updateMode-singleRecipe">
               <label className="update-form-label">Category:</label>

               <div className="select-cat">
                  <select
                     multiple={false}
                     value={categories}
                     className="selectOption"
                     onChange={(e) => setCategories(e.target.value)}
                  >
                     {optionItems}
                  </select>
               </div>
            </div>
            <div className="updateMode-singleRecipe">
               <label className="update-form-label">Description:</label>

               <TextareaAutosize
                  type="text"
                  className="update-form-input"
                  value={description}
                  cols="30"
                  rows="10"
                  onChange={(e) => setDescription(e.target.value)}
               />
            </div>
            <div className="updateMode-singleRecipe">
               <label className="update-form-label">Ingredients:</label>

               {ingredients.map((ing, index) => (
                  <div className="update-ingredient" key={index}>
                     <input
                        className="update-form-input"
                        type="text"
                        value={ing}
                        onChange={(e) => handleChangeIng(e, index)}
                     />
                  </div>
               ))}
            </div>
            <div className="updateMode-singleRecipe">
               <label className="update-form-label">Steps:</label>

               {preparation_steps.map((step, index) => (
                  <div className="update-ingredient" key={index}>
                     <TextareaAutosize
                        className="update-form-input"
                        type="text"
                        value={step}
                        onChange={(e) => handleChangeStep(e)}
                     />
                  </div>
               ))}
            </div>

            <div className="button-edit-center">
               <button className="update-btn" onClick={handleUpdate}>
                  Update
               </button>
            </div>
         </form>
      </div>
   ) : (
      <div className="single-recipe">
         <div className="single-recipe-wrapper">
            <div className="single-recipe-main-wrapper">
               <div className="single-recipe-left-content">
                  {recipe.image_url && (
                     <img
                        src={recipe.image_url}
                        alt=""
                        className="single-recipe-img"
                     />
                  )}
               </div>

               <div className="single-recipe-right-content">
                  <div className="technical-info-recipe">
                     <h1 className="single-recipe-title">
                        {title}
                        <div className="user-icons">
                           {user ? (
                              <div className="single-recipe-favorites">
                                 {user.favorites.includes(recipe._id) ? (
                                    <i
                                       onClick={removeRecipeFromFavorites}
                                       className="fa-solid fa-heart"
                                    ></i>
                                 ) : (
                                    <i
                                       className="fa-regular fa-heart"
                                       onClick={addRecipeToFavorites}
                                    ></i>
                                 )}
                              </div>
                           ) : (
                              <div className="single-recipe-favorites">
                                 <Link className="nav-link link" to="/login">
                                    <i
                                       className="fa-regular fa-heart"
                                       onClick={addRecipeToFavorites}
                                    ></i>
                                 </Link>
                              </div>
                           )}
                           {recipe.userId === user?.id && (
                              <div className="edit-delete-icons">
                                 <div className="single-recipe-edit">
                                    <i
                                       className="fa-solid fa-pen-to-square single-recipe-icon"
                                       onClick={handleEdit}
                                    ></i>
                                 </div>
                                 <div className="single-recipe-delete">
                                    <i
                                       className="fa-solid fa-trash single-recipe-icon"
                                       onClick={handleDelete}
                                    ></i>
                                 </div>
                              </div>
                           )}
                        </div>
                     </h1>

                     <div className="single-recipe-info">
                        <span className="single-recipe-author">
                           Author:
                           <span className="single-recipe-author-name">
                              <Link
                                 to={`/?user=${recipe.username}`}
                                 className="link"
                              >
                                 {recipe.username}
                              </Link>
                           </span>
                        </span>
                        <span className="single-recipe-author">
                           Category:
                           <span className="single-recipe-author-name">
                              <Link
                                 to={`/?cat=${recipe.categories}`}
                                 className="link"
                              >
                                 {recipe.categories}
                              </Link>
                           </span>
                        </span>

                        <span className="single-recipe-date">
                           <span className="single-recipe-date">
                              {new Date(recipe.createdAt).toDateString()}
                           </span>
                        </span>
                     </div>
                  </div>
                  <p className="single-recipe-description">
                     {recipe.description}
                  </p>
               </div>
            </div>

            {/* Ingredients and Preparation method */}
            <div className="single-recipe-secondary-wrapper">
               <div className="single-recipe-ingredients">
                  <h3 className="single-recipe-secondary-wrapper-title">
                     Ingredients
                  </h3>
                  <ul className="ing-step-container">
                     {ingredients?.map((ing, index) => (
                        <li className="ingredient" key={index}>
                           {ing}
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="single-recipe-preparation-steps">
                  <h3 className="single-recipe-secondary-wrapper-title">
                     Method
                  </h3>
                  <ol className="ing-step-container">
                     {preparation_steps?.map((step, index) => (
                        <li className="preparation-step" key={index}>
                           {step}
                        </li>
                     ))}
                  </ol>
               </div>
            </div>
         </div>
      </div>
   );
}

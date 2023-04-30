import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import headerImg1 from './img/headerImg1.png';
import backgroungImg from './img/pngegg3.png';
import headerDishImg from './img/header-dish.png';
import whitePlateWithFood from './img/white-plate-with-food.png';
import mobileBg from './img/mobile-bg2.png';

export default function Header() {
   return (
      <div className="header">
         <div className="header-container">
            <div className="banner">
               <div className="left-column">
                  <h1 className="title1">Delicious Recipes</h1>
                  <h1 className="title2">for food lovers</h1>

                  <div className="header-description">
                     <p>
                        Discover mouthwatering recipes for every skill level on
                        Delicious Recipes. From comfort food to global dishes,
                        explore and learn from our vast collection.
                     </p>
                     <p>
                        Get cooking tips and make the most of your ingredients
                        now
                     </p>
                  </div>

                  <div className="btn">
                     <Link className="link" to="/register">
                        <button className="about-btn" type="button">
                           Join us <i className="fa-solid fa-arrow-right"></i>
                        </button>
                     </Link>
                  </div>
               </div>

               <div className="right-column">
                  <img
                     className="header-main-img"
                     src={whitePlateWithFood}
                     alt=""
                  />
                  <img className="header-bg-img" src={backgroungImg} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

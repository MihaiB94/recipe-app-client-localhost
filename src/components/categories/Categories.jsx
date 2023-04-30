import React from 'react';
import './categories.css';
import ThaiCat from './images/cat_Thai.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Categories() {
   const [cats, setCats] = useState([]);

   useEffect(() => {
      const fetchCats = async () => {
         const res = await axios.get('/categories');
         setCats(res.data);
      };
      fetchCats();
   }, []);

   return (
      <div className="categories">
         <div className="categories-container">
            <div className="category-container">
               <Swiper
                  style={{
                     '--swiper-navigation-size': '25px'
                  }}
                  modules={[Navigation]}
                  navigation={true}
                  breakpoints={{
                     768: {
                        // width: 768,
                        slidesPerView: 6,
                        spaceBetween: 50
                     },
                     600: {
                        // width: 576,
                        slidesPerView: 5
                     },
                     450: {
                        // width: 576,
                        slidesPerView: 4
                     },
                     350: {
                        // width: 576,
                        slidesPerView: 3
                     },
                     200: {
                        // width: 576,
                        slidesPerView: 2
                     }
                  }}
               >
                  {cats.map((c) => (
                     <SwiperSlide key={c._id}>
                        <Link to={`/?cat=${c.category_name}`} className="link">
                           <div className="single-cat">
                              <p className="category_name thai_cat">
                                 {c.category_name}
                              </p>
                              <img
                                 className="category_image"
                                 src={c.category_image}
                                 alt=""
                              />
                           </div>
                        </Link>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
}

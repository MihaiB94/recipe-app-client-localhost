import React from 'react';
import './pagination.css';

const Pagination = ({
   totalRecipes,
   recipesPerPage,
   setCurrentPage,
   currentPage,
   nextPage,
   prevPage,
   currentRecipes,
   totalPages
}) => {
   let pages = [];
   for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
      pages.push(i);
   }
   return (
      <div className="pagination">
         <div className="pagination-container">
            <button onClick={prevPage} disabled={currentPage === 1}>
               Previous
            </button>

            {pages.map((page, index) => {
               return (
                  <button
                     key={index}
                     onClick={() => setCurrentPage(page)}
                     className={page === currentPage ? 'active' : ''}
                  >
                     {' '}
                     {page}
                  </button>
               );
            })}
            <button onClick={nextPage} disabled={currentRecipes.length <= 30}>
               Next
            </button>
         </div>{' '}
      </div>
   );
};

export default Pagination;

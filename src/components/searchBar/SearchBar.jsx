import React from "react";

export default function SearchBar() {
   return (
      <form className="search-box">
         <button className="btn-search">
            <i className="fas fa-search"></i>
         </button>
         <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            id="search"
         />
      </form>
   );
}

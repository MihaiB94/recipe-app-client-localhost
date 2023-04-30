import './about.css';
import alexImg from './teamImages/alex.jpg';

export default function About() {
   return (
      <div className="about">
         <div className="about-container">
            <div className="about-content">
               <h1 className="about-title">ABOUT US</h1>
               <div className="backstory-container">
                  <h3 className="subtitle">
                     <span className="left">Our Motto: </span>
                     <span className="right">For Students by Students</span>
                  </h3>
                  <h4 className="subtitle">
                     <span className="left">Website created by: </span>
                     <span className="right">
                        {' '}
                        Alex, Daniil, Adam, Eoin and Precious
                     </span>
                  </h4>
                  <hr className="divider" />
                  <div className="backstory-description">
                     <h5 className="backstory-title">
                        Welcome to our recipe website!
                     </h5>
                     <p className="b-description">
                        <span className="start_char">W</span>elcome to our
                        recipe website! We are dedicated to providing you with a
                        wide variety of delicious and easy-to-follow recipes.
                        Our website is designed for both novice and experienced
                        cooks, and we offer a wide range of recipes to suit
                        different tastes and skill levels. Whether you're a busy
                        parent looking for quick and easy weeknight meals, or a
                        foodie looking to try out new and exciting recipes,
                        we've got you covered. Our website allows you to search
                        for recipes by ingredient, cuisine, meal type, and
                        dietary restriction. We understand that many people have
                        specific dietary needs and we strive to provide options
                        for vegetarians, vegans, gluten-free, low carb, and many
                        more. We also have a "surprise me" option for when
                        you're feeling adventurous and want to try something
                        new. Our recipes are curated and tested by a team of
                        experienced cooks, so you can trust that they will turn
                        out delicious every time. In addition to our recipe
                        database, we also offer a wide range of cooking tips and
                        resources to help you improve your culinary skills. Our
                        blog features articles on everything from knife skills
                        to food pairing, as well as cooking videos to help you
                        visualize each step of a recipe. We also have a active
                        community of food enthusiasts where you can ask
                        questions, share your own recipes and get feedback on
                        your cooking. We believe that cooking should be fun and
                        accessible to everyone, and we're here to help you along
                        the way. We are constantly updating our website with new
                        and exciting recipes, so be sure to check back often.
                        Thank you for visiting our website, and we hope you find
                        some delicious recipes to try out in your kitchen. Happy
                        cooking!
                     </p>
                  </div>
                  <hr className="divider" />
               </div>
            </div>
         </div>

         <div className="team-section">
            <h5 className="team-title">Our Team</h5>
            <div className="team-container">
               <div className="about-team">
                  <img className="about-team-img" src={alexImg} alt="" />

                  <div className="team-info">
                     <h3 className="team-name">Alex Ionescu</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEXk5ueutLersbTU19jn6eqorrLKztDg4+Tq7O22u77Gysyxt7rCxsjZ3N28wcPO0dO93JgwAAACzklEQVRoge2ay5aDIAyGBYOgcnn/tx1w2jP2VCGxiV0M/6qdLj5zI5jMMHR1dXV1dXV1dXV1/UuBcw7gK+AhpMXHGJcU8pc75ey06p3iONzmAghRabWX1mqxt/DBRv3K/n0ANd2Ad8kcsDf+LG9+NMfsIpNE8WDnE8Mf5i+i+DpcFg8tuKTzITbhGT/K4GFCwLPzRTIfAgqeC0+EjvH7hhcIPYxIeJYAfUXDNf+ZSzBdGe6O69qlvqOzV13leH9X5KVDIpieI88Kz+VGgXO7Hkhw7mZjSY7nDvxISjqlVk44MemyLCcd197+pFnpC5UeOOn+q/Tv2v5dOjXreHOeWu+KET4MgUhnvtsRTfe8XWYmwZkvljCR6IYz6bIsKfAr883KkRzPfakldTnDyy7C03Vkn2ERDlvW9voUGu4Fxnf4FzkJ07EvsVpofGBxfhcanQCm14jMDh74lu819yn3gm9knp7l2AUfVIWvoyi8TCvXU7zwpHKTm47HxEbdMiOHfOi+8c2a7lpQwJBm8+cBbXQc79zPwGCTn8sYa53jMtq7d0MADl4/3AV2mWfDmKailEKwZTd2AxjKImxWJqsso9S2kspf1OxTyD/LnbNgwzQX3nG15z+vXiYFMnqM6wn45RFi4n4AKCu4s13UW+nzLgcBppX2Hme0tzxZCIPHWr0PgeHYzoE9OFaRDxDDp/xU66gtvPafxL+1/Gvz1fUrpkvUicW7TLxWfh8b/jT/SvTrdygSfyIXH31OdC5DvXEBQ8h3eNobBi+c+ILDDSfhKWtHNB4de+oaBCXsoog4m8MKN9GAiTvoDzrm7Ra7ZqfLIOZoQn7f1PS9RL4/1R4nEdbsF/At48WivtEbRe+w/1xxEV93PchU21Om2us5++qhqsc9eFl4fXAvmvFF9aWFaM6pRq+hLr7Iqm0tctJpWVXvWHaUFud+tqurq6urrR94WSAvN4lO8wAAAABJRU5ErkJggg=="
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Daniil</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEXk5ueutLersbTU19jn6eqorrLKztDg4+Tq7O22u77Gysyxt7rCxsjZ3N28wcPO0dO93JgwAAACzklEQVRoge2ay5aDIAyGBYOgcnn/tx1w2jP2VCGxiV0M/6qdLj5zI5jMMHR1dXV1dXV1dXV1/UuBcw7gK+AhpMXHGJcU8pc75ey06p3iONzmAghRabWX1mqxt/DBRv3K/n0ANd2Ad8kcsDf+LG9+NMfsIpNE8WDnE8Mf5i+i+DpcFg8tuKTzITbhGT/K4GFCwLPzRTIfAgqeC0+EjvH7hhcIPYxIeJYAfUXDNf+ZSzBdGe6O69qlvqOzV13leH9X5KVDIpieI88Kz+VGgXO7Hkhw7mZjSY7nDvxISjqlVk44MemyLCcd197+pFnpC5UeOOn+q/Tv2v5dOjXreHOeWu+KET4MgUhnvtsRTfe8XWYmwZkvljCR6IYz6bIsKfAr883KkRzPfakldTnDyy7C03Vkn2ERDlvW9voUGu4Fxnf4FzkJ07EvsVpofGBxfhcanQCm14jMDh74lu819yn3gm9knp7l2AUfVIWvoyi8TCvXU7zwpHKTm47HxEbdMiOHfOi+8c2a7lpQwJBm8+cBbXQc79zPwGCTn8sYa53jMtq7d0MADl4/3AV2mWfDmKailEKwZTd2AxjKImxWJqsso9S2kspf1OxTyD/LnbNgwzQX3nG15z+vXiYFMnqM6wn45RFi4n4AKCu4s13UW+nzLgcBppX2Hme0tzxZCIPHWr0PgeHYzoE9OFaRDxDDp/xU66gtvPafxL+1/Gvz1fUrpkvUicW7TLxWfh8b/jT/SvTrdygSfyIXH31OdC5DvXEBQ8h3eNobBi+c+ILDDSfhKWtHNB4de+oaBCXsoog4m8MKN9GAiTvoDzrm7Ra7ZqfLIOZoQn7f1PS9RL4/1R4nEdbsF/At48WivtEbRe+w/1xxEV93PchU21Om2us5++qhqsc9eFl4fXAvmvFF9aWFaM6pRq+hLr7Iqm0tctJpWVXvWHaUFud+tqurq6urrR94WSAvN4lO8wAAAABJRU5ErkJggg=="
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Adam</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEXk5ueutLersbTU19jn6eqorrLKztDg4+Tq7O22u77Gysyxt7rCxsjZ3N28wcPO0dO93JgwAAACzklEQVRoge2ay5aDIAyGBYOgcnn/tx1w2jP2VCGxiV0M/6qdLj5zI5jMMHR1dXV1dXV1dXV1/UuBcw7gK+AhpMXHGJcU8pc75ey06p3iONzmAghRabWX1mqxt/DBRv3K/n0ANd2Ad8kcsDf+LG9+NMfsIpNE8WDnE8Mf5i+i+DpcFg8tuKTzITbhGT/K4GFCwLPzRTIfAgqeC0+EjvH7hhcIPYxIeJYAfUXDNf+ZSzBdGe6O69qlvqOzV13leH9X5KVDIpieI88Kz+VGgXO7Hkhw7mZjSY7nDvxISjqlVk44MemyLCcd197+pFnpC5UeOOn+q/Tv2v5dOjXreHOeWu+KET4MgUhnvtsRTfe8XWYmwZkvljCR6IYz6bIsKfAr883KkRzPfakldTnDyy7C03Vkn2ERDlvW9voUGu4Fxnf4FzkJ07EvsVpofGBxfhcanQCm14jMDh74lu819yn3gm9knp7l2AUfVIWvoyi8TCvXU7zwpHKTm47HxEbdMiOHfOi+8c2a7lpQwJBm8+cBbXQc79zPwGCTn8sYa53jMtq7d0MADl4/3AV2mWfDmKailEKwZTd2AxjKImxWJqsso9S2kspf1OxTyD/LnbNgwzQX3nG15z+vXiYFMnqM6wn45RFi4n4AKCu4s13UW+nzLgcBppX2Hme0tzxZCIPHWr0PgeHYzoE9OFaRDxDDp/xU66gtvPafxL+1/Gvz1fUrpkvUicW7TLxWfh8b/jT/SvTrdygSfyIXH31OdC5DvXEBQ8h3eNobBi+c+ILDDSfhKWtHNB4de+oaBCXsoog4m8MKN9GAiTvoDzrm7Ra7ZqfLIOZoQn7f1PS9RL4/1R4nEdbsF/At48WivtEbRe+w/1xxEV93PchU21Om2us5++qhqsc9eFl4fXAvmvFF9aWFaM6pRq+hLr7Iqm0tctJpWVXvWHaUFud+tqurq6urrR94WSAvN4lO8wAAAABJRU5ErkJggg=="
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Eoin </h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>

               <div className="about-team">
                  <img
                     className="about-team-img"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAMFBMVEXk5ueutLersbTU19jn6eqorrLKztDg4+Tq7O22u77Gysyxt7rCxsjZ3N28wcPO0dO93JgwAAACzklEQVRoge2ay5aDIAyGBYOgcnn/tx1w2jP2VCGxiV0M/6qdLj5zI5jMMHR1dXV1dXV1dXV1/UuBcw7gK+AhpMXHGJcU8pc75ey06p3iONzmAghRabWX1mqxt/DBRv3K/n0ANd2Ad8kcsDf+LG9+NMfsIpNE8WDnE8Mf5i+i+DpcFg8tuKTzITbhGT/K4GFCwLPzRTIfAgqeC0+EjvH7hhcIPYxIeJYAfUXDNf+ZSzBdGe6O69qlvqOzV13leH9X5KVDIpieI88Kz+VGgXO7Hkhw7mZjSY7nDvxISjqlVk44MemyLCcd197+pFnpC5UeOOn+q/Tv2v5dOjXreHOeWu+KET4MgUhnvtsRTfe8XWYmwZkvljCR6IYz6bIsKfAr883KkRzPfakldTnDyy7C03Vkn2ERDlvW9voUGu4Fxnf4FzkJ07EvsVpofGBxfhcanQCm14jMDh74lu819yn3gm9knp7l2AUfVIWvoyi8TCvXU7zwpHKTm47HxEbdMiOHfOi+8c2a7lpQwJBm8+cBbXQc79zPwGCTn8sYa53jMtq7d0MADl4/3AV2mWfDmKailEKwZTd2AxjKImxWJqsso9S2kspf1OxTyD/LnbNgwzQX3nG15z+vXiYFMnqM6wn45RFi4n4AKCu4s13UW+nzLgcBppX2Hme0tzxZCIPHWr0PgeHYzoE9OFaRDxDDp/xU66gtvPafxL+1/Gvz1fUrpkvUicW7TLxWfh8b/jT/SvTrdygSfyIXH31OdC5DvXEBQ8h3eNobBi+c+ILDDSfhKWtHNB4de+oaBCXsoog4m8MKN9GAiTvoDzrm7Ra7ZqfLIOZoQn7f1PS9RL4/1R4nEdbsF/At48WivtEbRe+w/1xxEV93PchU21Om2us5++qhqsc9eFl4fXAvmvFF9aWFaM6pRq+hLr7Iqm0tctJpWVXvWHaUFud+tqurq6urrR94WSAvN4lO8wAAAABJRU5ErkJggg=="
                     alt=""
                  />

                  <div className="team-info">
                     <h3 className="team-name">Precious</h3>
                     <h4 className="profession">Maynooth University Student</h4>
                  </div>
                  <div className="personal-socials">
                     <a href="#">
                        <i className="fa-brands fa-square-facebook"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                     </a>
                     <a href="#">
                        <i className="fa-brands fa-gitlab"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

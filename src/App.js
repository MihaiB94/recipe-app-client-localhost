import React, { useContext } from 'react';

import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Index';
import RecipePage from './pages/recipePage/RecipePage';
import AddRecipe from './pages/addRecipe/AddRecipe';
import UserProfile from './pages/userProfile/UserProfile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SendEmailResetPassword from './pages/resetPassword/sendEmailResetPassword/SendEmailResetPassword';
import ResetPassword from './pages/resetPassword/resetPasswordPage/ResetPasswordPage';
import AccountConfirmation from './pages/confirmAccount/ConfirmAccount';
import RegisterStatus from './pages/accountStatus/AccountStatus';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextAPI } from './contextAPI/ContextAPI';
import Search from './pages/Search';
import './style/colorPalette.css';
import Favorites from './pages/favorites/Favorites';

function App() {
   const { user } = useContext(ContextAPI);

   return (
      <Router>
         <NavBar />
         <div className="main-content">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/register"
                  element={user ? <Home /> : <Register />}
               />
               <Route path="/login" element={user ? <Home /> : <Login />} />
               <Route
                  path="/resetpassword"
                  element={<SendEmailResetPassword />}
               />
               <Route
                  path="/resetpassword/:resetToken"
                  element={<ResetPassword />}
               />
               <Route
                  path="/verify/:confirmationToken"
                  element={<AccountConfirmation />}
               />
               <Route path="/account/status" element={<RegisterStatus />} />
               <Route
                  path="/userProfile"
                  element={user ? <UserProfile /> : <Register />}
               />
               <Route
                  path="/addRecipe"
                  element={user ? <AddRecipe /> : <Register />}
               />
               <Route path="/contact" element={<Contact />} />
               <Route path="/favorites" element={<Favorites />} />
               {/* <Route path="/about" element={<About />} /> */}
               <Route path="/recipes/:recipeId" element={<RecipePage />} />
               <Route path="/search" element={<Search />} />
            </Routes>
         </div>
         <Footer />
      </Router>
   );
}

export default App;

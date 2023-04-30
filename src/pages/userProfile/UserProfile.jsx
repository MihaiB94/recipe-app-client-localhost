import { useContext, useState } from 'react';
import axios from 'axios';
import { ContextAPI } from '../../contextAPI/ContextAPI';
import './userProfile.css';

export default function UserSettings() {
   const { user, dispatch } = useContext(ContextAPI);
   const [profilePic, setProfilePic] = useState(user.profilePic);
   const [username, setUsername] = useState(user.username);
   const [email, setEmail] = useState(user.email);
   const [password, setPassword] = useState('');
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: 'UPDATE_START' });
      const updatedUser = {
         userId: user._id,
         profilePic,
         username,
         email,
         password
      };

      // updatedUser.profilePic = profilePic;

      try {
         const res = await axios.put('/users/' + user._id, updatedUser);
         setSuccess(true);
         dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
      } catch (error) {
         dispatch({ type: 'UPDATE_FAILURE' });
      }
   };

   console.log(user);

   return (
      <div className="user-settings">
         <div className="user-settings-wrapper">
            <div className="settings-title">
               <span className="settings-update-title">
                  Update Your Account
               </span>
               <span className="settings-delete-title">Delete Account</span>
            </div>
            <form className="user-settings-form" onSubmit={handleSubmit}>
               <label>Profile Picture</label>
               <div className="settings-profile-pic">
                  <img src={user.profilePic} alt="" />
                  <div>
                     {' '}
                     <textarea
                        required
                        type="text"
                        cols="30"
                        value={profilePic}
                        onChange={(e) => setProfilePic(e.target.value)}
                     ></textarea>
                  </div>
               </div>

               <label>Username</label>
               <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />

               <label>Email</label>
               <input
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />

               <label>Password</label>
               <input
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button className="settings-submit" type="submit">
                  Update
               </button>
               {success && <span className="success-txt">Profile Updated</span>}
            </form>
         </div>
      </div>
   );
}

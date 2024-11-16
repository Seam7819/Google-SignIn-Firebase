import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import app from "../firebase.init";



const Form = () => {


  const [user, setUser] = useState([])

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app)

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const logInUser = result.user;
        setUser(logInUser)
        console.log(logInUser);
      })
      .catch(error => console.log(error))
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        setUser(null)
        console.log(result);
      })
      .catch(result => console.log(result))
  }

  return (
    
    
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen'>
      
        {
          user && <div>
          <figure className="px-10 pt-10">
                    <img
                      src={user.photoURL}
          
                      className="rounded-xl w-36" />
                  </figure>
                  <h2 className="card-title text-center">{user.displayName}</h2>
                    <p className="text-center">{user.email}</p>
          </div>
        }
        
          
          <div className="card-actions">
            {
              user ?
                <button onClick={handleSignOut} className="btn btn-primary">SignOut</button> :
                <button onClick={handleLogIn} className="btn btn-primary">Google SignIn</button>
            }
          </div>
        
      





    </div>
  );
};

export default Form;
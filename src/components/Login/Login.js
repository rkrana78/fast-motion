import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import Signin from '../Signin/Signin';
import { useHistory, useLocation } from 'react-router';




const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history =useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }

   
    
    return (
        <div>
            {
                loggedInUser.isSignedIn ? <button>Sign Out </button> :
                <button onClick={handleGoogleSignIn}>Google Sign in</button>
            }
            <Signin/>
        </div>
    );
};

export default Login;
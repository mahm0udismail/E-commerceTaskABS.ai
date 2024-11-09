import React, { useState, useEffect } from 'react';
import { auth, provider, signInWithPopup } from '../firebase/firebase'; // Firebase auth setup
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); 
      console.log('Signed in as:', user);
      navigate('/'); 
      // Storing the user object in localStorage
      localStorage.setItem('user', JSON.stringify(user)); // Store the user object

    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
        navigate('/'); 
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null); 
        console.log('User signed out');
        navigate('/'); 
        localStorage.removeItem('user'); // Remove user data from localStorage on sign-out
      })
      .catch((error) => console.error('Error during sign-out:', error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {user ? (
        <div className="text-center">
          <h2>Welcome, {user.displayName}</h2>
          <img src={user.photoURL} alt="User" className="rounded-circle" width="150" height="150" />
          <div className="mt-3">
            <button onClick={handleSignOut} className="btn btn-danger">
              Sign out
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="mb-4">Sign up with Google</h2>
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleSignIn;

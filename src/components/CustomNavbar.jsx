import React, { useState, useEffect } from 'react';
import { auth, provider, signInWithPopup } from '../firebase/firebase'; 
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); 
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log('Signed in as:', user.displayName);
      navigate('/');
      setIsSignedIn(true);
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
        setIsSignedIn(false);

      })
      .catch((error) => console.error('Error during sign-out:', error));
  };

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#basic-navbar-nav" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="basic-navbar-nav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#link">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <a href="/" class="navbar-brand text-white">
        <svg width="112" height="45" viewBox="0 0 112 45" xmlns="http://www.w3.org/2000/svg" fill="#111">
          <path d="M2.51367 34.9297C2.58398 34.6836 2.64844 34.3789 2.70703 34.0156C2.77734 33.6523 2.83594 33.2012 2.88281 32.6621C2.92969 32.123 2.96484 31.4844 2.98828 30.7461C3.01172 29.9961 3.02344 29.123 3.02344 28.127V16.6836C3.02344 15.6875 3.01172 14.8203 2.98828 14.082C2.96484 13.332 2.92969 12.6875 2.88281 12.1484C2.83594 11.5977 2.77734 11.1406 2.70703 10.7773C2.64844 10.4141 2.58398 10.1094 2.51367 9.86328V9.79297H6.73242V9.86328C6.66211 10.1094 6.5918 10.4141 6.52148 10.7773C6.46289 11.1406 6.41016 11.5977 6.36328 12.1484C6.32812 12.6875 6.29297 13.332 6.25781 14.082C6.23438 14.8203 6.22266 15.6875 6.22266 16.6836V20.6035L16.4883 12.2188C17.6367 11.2813 18.2109 10.4727 18.2109 9.79297H23.1504V9.86328C22.459 10.0273 21.7559 10.3437 21.041 10.8125C20.3379 11.2695 19.5879 11.832 18.791 12.5L9.7207 20.0938L20.6367 32.082C21.0938 32.5508 21.4805 32.9434 21.7969 33.2598C22.125 33.5645 22.4121 33.8223 22.6582 34.0332C22.9043 34.2324 23.127 34.4023 23.3262 34.543C23.5371 34.6719 23.7539 34.8008 23.9766 34.9297V35H18.8262C18.7793 34.8945 18.6973 34.7598 18.5801 34.5957C18.4746 34.4316 18.3457 34.2617 18.1934 34.0859C18.0527 33.9102 17.8945 33.7285 17.7188 33.541C17.5547 33.3535 17.3965 33.1777 17.2441 33.0137L6.22266 20.9199V28.127C6.22266 29.123 6.23438 29.9961 6.25781 30.7461C6.29297 31.4844 6.32812 32.123 6.36328 32.6621C6.41016 33.2012 6.46289 33.6523 6.52148 34.0156C6.5918 34.3789 6.66211 34.6836 6.73242 34.9297V35H2.51367V34.9297ZM45.3846 35V34.9297C45.408 34.8711 45.4256 34.7832 45.4373 34.666C45.4491 34.5488 45.4549 34.4434 45.4549 34.3496C45.4549 33.9863 45.4022 33.5879 45.2967 33.1543C45.203 32.709 45.0155 32.1582 44.7342 31.502L42.6073 26.7207C41.951 26.6973 41.078 26.6855 39.9881 26.6855C38.8983 26.6855 37.7205 26.6855 36.4549 26.6855C35.5291 26.6855 34.6327 26.6855 33.7655 26.6855C32.91 26.6855 32.1366 26.6973 31.4452 26.7207L29.4237 31.3613C29.2479 31.7949 29.0604 32.2695 28.8612 32.7852C28.662 33.3008 28.5623 33.8223 28.5623 34.3496C28.5623 34.502 28.5741 34.6309 28.5975 34.7363C28.6209 34.8301 28.6444 34.8945 28.6678 34.9297V35H25.0819V34.9297C25.2928 34.707 25.5565 34.3145 25.8729 33.752C26.1893 33.1777 26.535 32.4629 26.91 31.6074L36.9823 9.26562H38.3885L47.9334 30.7461C48.1561 31.25 48.3846 31.7422 48.619 32.2227C48.8651 32.6914 49.0936 33.1133 49.3045 33.4883C49.5155 33.8633 49.703 34.1797 49.867 34.4375C50.0311 34.6953 50.1424 34.8594 50.201 34.9297V35H45.3846ZM33.994 25.1738C34.6737 25.1738 35.3709 25.1738 36.0858 25.1738C36.8006 25.1621 37.4979 25.1562 38.1776 25.1562C38.869 25.1445 39.5311 25.1387 40.1639 25.1387C40.7967 25.127 41.3709 25.1152 41.8866 25.1035L36.9471 13.9414L32.0955 25.1738H33.994ZM54.6989 34.9297C54.7692 34.6836 54.8337 34.3789 54.8923 34.0156C54.9509 33.6523 55.0036 33.2012 55.0505 32.6621C55.0973 32.123 55.1325 31.4844 55.1559 30.7461C55.1793 29.9961 55.1911 29.123 55.1911 28.127V16.6836C55.1911 15.6875 55.1793 14.8203 55.1559 14.082C55.1325 13.332 55.0973 12.6875 55.0505 12.1484C55.0036 11.5977 54.9509 11.1406 54.8923 10.7773C54.8337 10.4141 54.7692 10.1094 54.6989 9.86328V9.79297H58.9175V9.86328C58.8472 10.1094 58.7769 10.4141 58.7066 10.7773C58.648 11.1406 58.5954 11.5977 58.5485 12.1484C58.5134 12.6875 58.4783 13.332 58.4425 14.082C58.4191 14.8203 58.4073 15.6875 58.4073 16.6836V20.6035L68.673 12.2188C69.8214 11.2813 70.3956 10.4727 70.3956 9.79297H75.3352V9.86328C74.6437 10.0273 73.9406 10.3437 73.2266 10.8125C72.5236 11.2695 71.7736 11.832 70.9766 12.5L61.9063 20.0938L72.8223 32.082C73.2794 32.5508 73.6661 32.9434 73.9824 33.2598C74.3101 33.5645 74.5971 33.8223 74.8432 34.0332C75.0892 34.2324 75.312 34.4023 75.5111 34.543C75.722 34.6719 75.9389 34.8008 76.1615 34.9297V35H70.9457C70.8987 34.8945 70.8167 34.7598 70.6995 34.5957C70.593 34.4316 70.4641 34.2617 70.3117 34.0859C70.171 33.9102 70.0128 33.7285 69.8361 33.541C69.672 33.3535 69.514 33.1777 69.3616 33.0137L58.3402 20.9199V28.127C58.3402 29.123 58.352 29.9961 58.3754 30.7461C58.4105 31.4844 58.4456 32.123 58.4808 32.6621C58.5276 33.2012 58.5803 33.6523 58.639 34.0156C58.7092 34.3789 58.7795 34.6836 58.8497 34.9297V35H54.6989V34.9297Z" fill="#111" />
        </svg>
      </a>
      
    </div>
    
  </div>
  <div class="input-group w-50">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
</div>

      {!isSignedIn ? (
        <button onClick={handleGoogleSignIn} className="btn btn-primary m-3 w-25">
          Sign in with Google
        </button>
      ) : null}

      {isSignedIn && (
        <button onClick={handleSignOut} className="btn btn-danger m-3 w-25">
          logout {user.displayName}
        </button>

      )}

</nav>


  );
};

export default CustomNavbar;

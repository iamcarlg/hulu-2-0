import React, { useEffect} from 'react';
import './';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import Nav  from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser} from './features/userSlice';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          
          // <Switch>
          //   <Route exact path = "/">
          //     <HomeScreen />

          //   </Route>
          // </Switch>,

          <Switch>
                <Route exact path="/">
                  <Redirect to="/" />
                  <ProfileScreen />
                </Route>
          </Switch>

        )}
      </Router>
    </div>
  );
}

export default App;
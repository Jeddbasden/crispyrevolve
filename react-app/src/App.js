import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import IndVideoPage from './components/IndVideoPage'
import AddVideoPage from './components/AddVideoPage';
import EditCommentPage from './components/EditCommentPage'
import EditVideoPage from './components/EditVideoPage';
import { authenticate } from './store/session';
import "./index.css";
import { getVideos } from './store/videos';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getVideos());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
      <Switch>
        {/* <Route path="/login" exact={true}>
          <LoginForm />
        </Route> */}
        {/* <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route> */}
        {/* <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute> */}
        <ProtectedRoute path="/users/:userId" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/videos/add" exact={true}>
          <AddVideoPage />
        </Route>
        <Route path="/videos/:id" exact={true}>
          <IndVideoPage />
        </Route>
        {/* <Route path="/videos/:id/edit" exact={true}>
          <EditVideoPage />
        </Route> */}
        {/* <Route path="/comments/:id/edit" exact={true}>
          <EditCommentPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

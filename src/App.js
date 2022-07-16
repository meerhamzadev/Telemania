//core modules import
import React, { useEffect, useState } from 'react'
// third party packages import
import { authApp } from './Firebase';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// search context import
import { SearchContextWrapper } from './Context/SearchContext';
// UI components import
import ActorDetails from './Component/ActorDetails/ActorDetails';
import Login from './Component/Auth-Forms/Login';
import Register from './Component/Auth-Forms/Register';
import FullPageInfo from './Component/FullPageInfo/FullPageInfo';
import WelcomPage from './Component/WelcomePage/WelcomPage';
import ParentNavWrapper from './Component/ParentNavWrapper/ParentNavWrapper';
import SearchData from './Component/SearchData/SearchData';
import MovieHome from './Component/HomePage/MovieHome';
import SeriesHome from './Component/HomePage/SeriesHome';
import RouteWrappers from './Component/ReusableWrapper/RouteWrappers';
import GoogleLoginWrapper from './Component/Auth-Forms/GoogleLoginWrapper';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      const unsubscribe = authApp.onAuthStateChanged(
        (authUser) => {
          if (authUser) {
            setUser(authUser);
          }
          else {
            setUser(null);
          }
        }
      )
      return () => {
        unsubscribe();
      }
    }, []
  )

  return (
    <BrowserRouter>
      {
        (user) ? (
          <SearchContextWrapper>
            <ParentNavWrapper>
              <>
                <Routes>
                  <Route path="/*" element={<RouteWrappers />} />
                  <Route path="movies" element={<MovieHome />} />
                  <Route path="series" element={<SeriesHome />} />
                  <Route path='detail/:id' element={<FullPageInfo />} />
                  <Route path='actor/:id' element={<ActorDetails />} />
                  <Route path='searched' element={<SearchData />} />
                </Routes>
              </>
            </ParentNavWrapper>
          </SearchContextWrapper>
        ) : (
          <Routes>
            <Route path="/" element={<WelcomPage />} />
              <Route path="signIn" element={
                <GoogleLoginWrapper
                  render={(loginWithGoogle) => (
                    <Login loginWithGoogle={loginWithGoogle} />
                  )} />
              } />
              <Route path="register" element={
                <GoogleLoginWrapper
                  render={(loginWithGoogle) => (
                    <Register loginWithGoogle={loginWithGoogle} />
                  )} />
              } />
          </Routes>
        )
      }
    </BrowserRouter >
  )
};

export default App;

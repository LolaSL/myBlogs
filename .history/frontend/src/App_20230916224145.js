
import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth.jsx';
import Blogs from './components/Blogs.jsx';
import UserBlogs from './components/UserBlog.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import AddBlog from './components/AddBlog.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store';
import HotelTips from './pages/HotelTips';
import TouristTips from './pages/TouristTips';
import Journey from './pages/Journey';
import CompliteGuide from './pages/CompliteGuide';
import BestTimeToVisit from './pages/BestTime';
import WheatherAndClimate from './pages/WeatherAndClimate';
import ReasonToVisitIsrael from './pages/ReasonToVisitIsrael';
import Airport from './pages/Airport'
import FashionStyle from './pages/FashionStyle';


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(() => {

    if (localStorage.getItem("userId"))
      dispatch(authActions.login())
  }, [dispatch])

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ?   <Route path="/auth" element={<Auth />} /> :
            <>
              <Route path="/fashion-style" element={<FashionStyle />} />
              <Route path="/airport" element={<Airport />} />
              <Route path="/reasons-to-visit-israel" element={<Rea/>} />
              <Route path="/wheather-and-climate" element={<WheatherAndClimate />} />
              <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
              <Route path="/slide" element={<CompliteGuide />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/tips" element={<TouristTips />} />
              <Route path="/hotel-tips" element={<HotelTips />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />
            </>
          }

        </Routes>
      </main>

    </React.Fragment>
  );
}

export default App;


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
import HotelTips from './pages/HotelTips.jsx';
import TouristTips from './pages/TouristTips.jsx';
import Journey from './pages/Journey.jsx';
import CompliteGuide from './pages/CompliteGuide.jsx';
import BestTimeToVisit from './pages/BestTime.jsx';
import WheatherAndClimate from './pages/WeatherAndClimate.jsx';
import ReasonToVisitIsrael from './pages/ReasonTovisitIstael.jsx';
import Airport from './pages/Airport.jsx'
import FashionStyle from './pages/FashionStyle.jsx';
import { ToastContainer } from 'react-toastify';
import HealthRecipes from './pages/HealthRecipes.jsx'



function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  useEffect(() => {

    if (localStorage.getItem("userId"))
      dispatch(authActions.login())
  }, [dispatch])
// Using the API base URL in your code
import API_BASE_URL from './config';

fetch(`${API_BASE_URL}/api/user/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'example',
    password: 'password',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/health-dinner-recipes" element={<HealthRecipes />} />
          <Route path="/fashion-style" element={<FashionStyle />} />
          <Route path="/airport" element={<Airport />} />
          <Route path="/reasons-to-visit-israel" element={<ReasonToVisitIsrael />} />
          <Route path="/wheather-and-climate" element={<WheatherAndClimate />} />
          <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
          <Route path="/slide" element={<CompliteGuide />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/tips" element={<TouristTips />} />
          <Route path="/hotel-tips" element={<HotelTips />} />
          {!isLoggedIn ? <Route path="/auth" element={<Auth />} /> :
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetails />} />
            </>
          }

        </Routes>
        <ToastContainer position="bottom-center" limit={1} autoClose={3000} />
      </main>

    </React.Fragment>
  );
}

export default App;


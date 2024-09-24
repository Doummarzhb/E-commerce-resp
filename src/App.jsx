import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../src/index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Product from './components/Products/Product';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import TrendingProduct from './components/TrendingProduct/TrendingProduct';

const BannerData = {
  title: "Special Offer",
  title2: "Summer Sale",
  title3: "Limited Time Only",
  title4: "Exclusive Deals",
  discount: "50% Off",
  description: "Get up to 50% off on select items!",
  buttonLabel: "Shop Now",
  image: "../src/assets/category/watch.png",
  bgcolor: "#f42c37",
};

const BannerData2 = {
  title: "Special Offer",
  title2: "HAPPY HOURS",
  title3: "Limited Time Only",
  title4: "Exclusive Deals",
  discount: "50% Off",
  description: "Get up to 50% off on select items!",
  buttonLabel: "Shop Now",
  image: "../src/assets/hero/headphone.png",
  bgcolor: "#2dcc6f",
};

function AppContent() {
  const location = useLocation();
  const isSignUpPage = location.pathname === '/Signup';
  const isLoginPage = location.pathname === '/login';
  const isTrendingProductPage = location.pathname === '/trending';

  
  if (isSignUpPage) {
    return <SignUp />;
  }

  if (isLoginPage) {
    return <Login />;
  }

  if (isTrendingProductPage) {
    return <TrendingProduct />;
  }
 
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <About/>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

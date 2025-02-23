import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/Signup/Signup';
import AboutPage from './Landing_page/About/AboutPage';
import ProductPage from './Landing_page/Product/ProductPage';
import PricingPage from './Landing_page/Pricing/PricingPage';
import SupportPage from './Landing_page/Support/SupportPage';

import NotFound from "./Landing_page/NotFound";
import Navbar from "./Landing_page/Navbar";
import Footer from "./Landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>

  <Navbar></Navbar>
  <Routes>
    <Route path ="/" element= {<HomePage/>}/>
    <Route path ="/signup" element= {<Signup/>}/>
    <Route path ="/about" element= {<AboutPage/>}/>
    <Route path ="/product" element= {<ProductPage/>}/>
    <Route path ="/pricing" element= {<PricingPage/>}/>
    <Route path ="/support" element= {<SupportPage/>}/>
    <Route path ="*" element= {<NotFound/>}/>
  </Routes>
  <Footer/>
  
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

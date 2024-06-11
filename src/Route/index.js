import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeContainer from "../Container/Home";
// import AboutContainer from "../Container/About";
import MoviesContainer from "../Container/Movies";
import ContactContainer from "../Container/Contact";
import SearchContainer from "../Container/Search";
import DetailsContainer from "../Container/Details";
import HeaderComponents from "../Components/Header";
import FooterComponents from "../Components/Footer";
const RouterComponents = () =>{
   return(
      <>
         <BrowserRouter>
            <HeaderComponents/>
            <Routes>
               <Route path="/" element={<HomeContainer/>}/>
               {/* <Route path="/about" element={<AboutContainer/>}/> */}
               <Route path="/movies" element={<MoviesContainer/>}/>
               <Route path="/contact" element={<ContactContainer/>}/>
               <Route path="/search" element= {<SearchContainer/>}/>
               <Route path="/details/:movieid/:mediatype" element= {<DetailsContainer/>}/>
            </Routes>
            <FooterComponents/>
         </BrowserRouter>
      </>
   )

}
export default RouterComponents;
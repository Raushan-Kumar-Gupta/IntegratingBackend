import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Show from "../components/Show";

const Routing=()=>{
    return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/show' element={<Show/>}></Route>
    </Routes>
    )
}

export default Routing
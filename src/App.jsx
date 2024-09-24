import React from "react";
import { Link } from "react-router-dom";
import Routing from "./utils/Routing";
import { useEffect } from "react";

function App(){
  return (
  <>
     <div>
      <nav className="flex justify-center gap-10">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/show'>Show</Link>
      </nav>
   </div>
   <Routing/>
  </>
  )
}
export default App;
import React, { useEffect } from "react";

const Home=()=>{
    const funeffect=useEffect(()=>{
        console.log("component created");
        return ()=>{
            console.log("componet deleted");
        }
    })
  
    return (
        <div> 
            <h1> home</h1>
        </div>
    )
}

export default Home;
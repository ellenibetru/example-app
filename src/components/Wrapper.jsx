import React from "react";
import HomePage from "./HomePage";
import EmployeePage from"./EmployeePage";
import "./stylee.css";


function Wrapper(){


    
    return(
    
        <div className="wrapper">
    
        <HomePage/>
        <EmployeePage/>
    
    </div>
    
    
    )
};
// const styleWrapper={
//     display:'flex',
//   flexDirection:'column',
 
  
//   };
export default Wrapper;

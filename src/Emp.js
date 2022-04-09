import React, {useState} from "react";
import "./App.css"
import Wrapper from './components/Wrapper';
import { EmployeeProvider } from "./EmployeeContext";
function Emp(){

return (
  <React.Fragment>
     <EmployeeProvider>
<Wrapper/>
     </EmployeeProvider>
        
        </React.Fragment>
        )}
 export default Emp;
import React, {useState,createContext} from "react";
export const EmployeeContext=createContext();
export function EmployeeProvider(props)
 { const[employee,setEmployee]=useState([
    { 
      id:1,
     img:'./pic-six.jpg',
      name:' Elleni Betru',
      position:'President and CEO',
      callOffice:'781-000-0002',
      callMobile:'703-100-0001',
      sms:'617-000-0001',
      email:'elleni@gmail.com'},
  {id:2,
     img:'./pic-onee.jpg',
    name:'Beza Solomon',
   position:'VP of Marketing',
   callOffice:'762-000-1002',
  callMobile:'202-100-1234',
  sms:'628-000-0001',
  email:'beza@gmail.com'},
{id:3,
  img:'./pic-four.jpg',
  name:'Christopher michael',
  position:'CFO',
callOffice:'731-000-0002',
callMobile:'703-111-1111',
sms:'637-000-0001',
email:'christopher@gmail.com'},
  {id:4,
     img:'./pic-seven.jpg',
  name:'sam Ben',
position:'VP of Engineering',
callOffice:'741-000-0002',
callMobile:'571-000-1000',
sms:'657-000-0001',
email:'samt@gmail.com'},
 {
   id:5,
img:'./pic-five.jpg',
   name:'Julia Cort',
 position:'QA Manager',
callOffice:'788-000-0002',
callMobile:'915-0001-1111',
sms:'616-000-0001',
email:'julia@gmail.com'},
 {
   id:6,
   img:'./pic-three.jpg',
   name:'Parker John',
   position:'QA Manager',
callOffice:'781-000-0002',
callMobile:'313-111-2321',
sms:'611-000-0001',
email:'parker@gmail.com'},



  
]) 



  const [searchedName, setName] = useState("");
  const getName = (newName) => {
    setName(newName);
  };
return(
<EmployeeContext.Provider value={{employee,getName,searchedName}}>
    {props.children}
</EmployeeContext.Provider>
)}
export default EmployeeContext
import React from "react";
import "./App.css"
import Wrapper from './components/Wrapper';
import './components/stylee.css';
function Ass1() {


   
const[employeeData,setEmployeeData]=React.useState([
    {
      // img:'./pic-one.jpg',
      name:' Elleni Betru',
      position:'President and CEO',
      callOffice:'781-000-0002',
      callMobile:'703-100-0001',
      sms:'617-000-0001',
      email:'juliecort@gmail.com'},
  {
    // img:'./pic-one.jpg',
    name:'Beza Solomon',
   position:'VP of Marketing',
   callOffice:'762-000-1002',
  callMobile:'202-100-1234',
  sms:'628-000-0001',
  email:'step@gmail.com'},
{
  // img:'./pic-one.jpg',
  name:'Christopher michael',
  position:'CFO',
callOffice:'731-000-0002',
callMobile:'703-111-1111',
sms:'637-000-0001',
email:'andria@gmail.com'},
  {
    // img:'./pic-one.jpg',
  name:'sam Ben',
position:'VP of Engineering',
callOffice:'741-000-0002',
callMobile:'571-000-1000',
sms:'657-000-0001',
email:'samt@gmail.com'},
 {
 img:'./pic 1.jpg',
   name:'Julia Cort',
 position:'QA Manager',
callOffice:'788-000-0002',
callMobile:'915-0001-1111',
sms:'616-000-0001',
email:'julia@gmail.com'},
 {
  //  img:'./pic-one.jpg',
   name:'Parker John',
   position:'QA Manager',
callOffice:'781-000-0002',
callMobile:'313-111-2321',
sms:'611-000-0001',
email:'parker@gmail.com'},

 ])}
 
  

 return (
  <div>
     
      < Wrapper employeeList={employeeData}/>
     </div>)
     export default Ass1;

import React,{useContext} from "react";
import EmployeeContext from "../EmployeeContext";
function EmployeeProfile(){

    const {employee,searchedName}=useContext(EmployeeContext);

    return(
    
       <React.Fragment>
            {employee.filter(item=> item.name===searchedName)
            .map((list)=>{
                return( 
            <div key={list.id} className="emp-container">
                <div className="emp-item">
                <div className="img-container"> 
                    <img src={list.img} alt="pic"/>
                 </div>
                <div className="name-list">
                    <p>{list.name}</p>
                    <p>{list.position}</p>
                </div>
            
                </div>
                
                        <p><span style={{fontWeight:"bold"}}>Call Office</span></p>
                        <p>{list.callOffice}</p>
                
                   
                        <p><span style={{fontWeight:"bold"}}>Mobile</span></p>
                        <p>{list.callMobile}</p>
                    
                    
                        <p><span style={{fontWeight:"bold"}}>SMS</span></p>
                        <p>{list.sms}</p>
                    

                        <p><span style={{fontWeight:"bold"}}>Email</span></p>
                        <p>{list.email}</p>
                    
                
            </div>
        )
        })}
</React.Fragment>
)
}
                    
            
export default EmployeeProfile
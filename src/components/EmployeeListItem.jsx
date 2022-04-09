
import React,{useState,useContext} from 'react'
import EmployeeContext from '../EmployeeContext';

function EmployeeListItem()
{
    const {employee,getName}=useContext(EmployeeContext);

  const [searchItem, setSearchItem]= useState("");

const handleSearch=(e)=>{
    setSearchItem(e.target.value);
}
const nameToShow=employee.filter((e)=>{
    return e.name.toUpperCase().includes(searchItem.toUpperCase())
})
  return (
      <div>
     < div className="search">
      <input type="text" placeholder="search" onChange={handleSearch}></input>
    </div>
       <div className='emp-list'>
        
            {nameToShow.map((list)=>{
                return(
                    <div key={list.id} className="emp-item" onClick={()=>getName(list.name)}>
                         <div className="img-container"> 
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="name-list">
                            <p>{list.name}</p>
                            <p>{list.position}</p>
                        </div>
                    </div>
                    
            )
            })}
        </div>
    </div>
  
  )}

export default EmployeeListItem;
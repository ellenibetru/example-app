import React from 'react'

import Header1 from './Header1'
import EmployeeListItem from './EmployeeListItem'

function Homepage(){


  return  (
   
         <div className='home-page'>
        <Header1/>
        
        <EmployeeListItem/>
        </div>
    
  )
}

export default Homepage;
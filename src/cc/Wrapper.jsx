import React from 'react'

import FriendCard from './FriendCard'
import  Title from './Title'

function Wrapper(props) {
  console.log(props)
  return (
    <div style={styleWrapper} >
        <Title/>
        
    
  
  <FriendCard friendList={props.friendsList} />
    
    
    
    </div>
    
  )
}



const styleWrapper={
  display:'flex',
flexDirection:'column',
};

  // const styleFriendCard={
  //   display:'flex',
  // flexDirection:'center'}



export default Wrapper;
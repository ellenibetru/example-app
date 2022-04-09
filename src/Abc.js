
import React, { useEffect, useState } from "react"
function Abc(){
    const [resourceType,setResourceType]=useState()
    useEffect(()=>{
      console.log('render')
    },[resourceType])
return(
    <>
    <div>
      <button onClick={()=>setResourceType('posts')}>posts</button>
      <button onClick={()=>setResourceType('users')}>users</button>
      <button onClick={()=>setResourceType('comment')}>comment</button>
    </div>
    <h1>{resourceType}</h1>
    </> 
   
)}
export default Abc;
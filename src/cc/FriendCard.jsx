import React from 'react';
import './style.css';
function FriendCard(props) {
  const [countryName,setCountryName]=useState("");
  const handleSearch=(e)=>{console.log(e)}
  setCountryName(e.target.value)}
  const countryToShow=props.countries.filter((country)=>{
    return(
    country.name.toUpperCase().indexof(countryName.toUpperCase())>-1)
  })
  console.log('country,props.countries');
  console.log('country to show',countryToShow);
  return(
  <div>
    <label>search  for a country by name</label>
  <input type="text" onChange={handleSearch}/>
  {countryToShow.length>=250 ?(<p> please enter a country to know about...<p/>)
  :countryToShow.length>=20?(<p>Too many matches,specify another filter</p>):
  countryToShow.length>=5?</p>?}
      <div style={styleItem}></div>
          {countryToShow.map(() =>{
          return(
          <React.Fragment>
            
            <div style={styleFriendCard}>
            <img style={styleImage} src={country.flag} alt="pic one"/>
          <div className="content">
          <p><span style={{fontWeight:"bold"}}>Name:</span>{country.name}</p>
        
       <p><span style={{fontWeight:'bold'}}>Occupation:</span>{country.occupation}</p>
      <p><span style={{fontWeight:'bold'}}>Location:</span>{country.capital}</p>
      </div>
        
</div>
</React.Fragment>);
          })}
          </div>
)};
          
const styleFriendCard={
  width:"200px",
  height:'300px',
  boxShadow:" 0px 2px 4px rgba (0,0,0,0.25)",
margin:"20px 40px 40px",
}
          
   
const styleImage={
    width:'200px',
    height:'200px'

};

const styleItem={
  display:'flex',
  justifyContent:'space-between'
}
}
  export default FriendCard;



import './App.css';
import { useEffect, useState } from 'react';
import LoadCountries from './Components/LoadCountries/LoadCountries';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>

    </div>
  );
}
// function LoadCountries(){
//   const [countries, setCountries]=useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=> res.json())
//     .then(data =>setCountries(data))
//   },[])
//   // console.log(countries)
//   return(
//     <div>
//       <h1>vsiting every country xx (<span>{countries.length}</span>)</h1>
//       {
//         countries.map(country=><AllCountries data={country}></AllCountries>)
//       }
//     </div>
//   )
// }
// const newStyle={
//   backgroundColor: 'aquamarine',
//   padding: '10px',
//   margin: '30px',
//   border: '5px solid black',
//   borderRadius: '20px',
// }
// function AllCountries(props){
//   console.log(props)
//   // console.log('okkk')
//   return(
//     <div className="country" style={newStyle}>
//       <h1>country Name: {props.data.name.common}</h1>
//       <h3>region: {props.data.region}</h3>
//       <img src={props.data.flags.png} alt="" />
//     </div>
//   )
// }

export default App;

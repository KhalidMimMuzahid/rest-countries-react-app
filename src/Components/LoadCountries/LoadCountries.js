import React, { useEffect, useState } from 'react';
import AllCountries from './AllCountries/AllCountries';
import "./LoadCountries.css"

const LoadCountries = () => {
    const [countries, setCountries]=useState([])
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=> res.json())
      .then(data =>setCountries(data))
    },[])
    return (
        <div>
        <h1>vsiting every country (<span>{countries.length}</span>)</h1>
            <div className='all-country'>
                {
                    countries.map(country => <AllCountries data={country} key={country.cca3}></AllCountries>)
                }
            </div>
        </div>
    );
};

export default LoadCountries;
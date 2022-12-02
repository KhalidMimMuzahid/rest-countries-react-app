import React from 'react';
import './AllCountries.css'
const AllCountries = (props) => {
    const{name, region, flags}= props.data;
    return (
        <div className='country'>
            <h1>country Name: {name.common}</h1>
            <h3>region: {region}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default AllCountries;
import React from 'react';

export default function Drop({value, handleChange}) {
    return (
        <select id='landingDropDown' value={value} onChange={handleChange}>
            <option className='option' selected hidden>Select your gym</option>
            <option className='option' value='PlanetFitness'>Planet Fitness</option>
            <option className='option' value='LifeTime'>Life Time Fitness</option>
        </select>
    )
}
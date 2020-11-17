import React from 'react';
import {gymInfo} from '../../gymInfo';

export default function LandingPage() {

    let [value, setValue] = React.useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div id='landing'>
            <div id='landingDescriptionBlock'>
                <p>Studies show that obesity has boomed in popularity in recent years and Cancel My Gym Membership is here to help you get in on this growing trend.</p>
                <p>Unfortunately, cancelling a gym membership is usually more difficult than it needs to be. Many gyms won't allow you to cancel over the phone, and if you were willing to go into a gym you wouldn't be trying to cancel.</p>
                <p>Luckily, many gyms offer other options. This website will help you find what works for you and, if possible, even send a letter or fax on your behalf.</p>
            </div>
            <select id='landingDropDown' value={value} onChange={handleChange}>
                <option className='option' selected hidden>Select your gym</option>
                <option className='option' value='PlanetFitness'>Planet Fitness</option>
                <option className='option' value='LifeTime'>Life Time Fitness</option>
            </select>
            {gymInfo[value]?.description}
            {gymInfo[value]?.buttons}
        </div>
    )
}
import React from 'react';

export default function LandingPage() {

    let [value, setValue] = React.useState('');

    let info = {
        'PlanetFitness': {
            description:
            <div id='landingGymInformation'>
                <p>Planet ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Morbi volutpat sapien sapien, vitae fermentum dolor convallis a. Aliquam commodo mauris metus, id dapibus lectus egestas sed.</p>
                <p>Donec id augue at sapien ultrices iaculis. Donec dictum ultricies dui vel sodales.</p>
                <p>Nunc euismod vestibulum augue, sed venenatis dui dignissim ut.</p>
            </div>,
            buttons: 
            <div id='buttonContainer'>
                <button className='landingButton' type='button'>Write a letter!</button>
                <button className='landingButton' type='button'>Send a fax!</button>
            </div>
        }
        ,
        'LifeTime': {
            description:
            <div id='landingGymInformation'>
                <p>LifeTime ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Morbi volutpat sapien sapien, vitae fermentum dolor convallis a. Aliquam commodo mauris metus, id dapibus lectus egestas sed.</p>
                <p>Donec id augue at sapien ultrices iaculis. Donec dictum ultricies dui vel sodales.</p>
                <p>Nunc euismod vestibulum augue, sed venenatis dui dignissim ut.</p>
            </div>,
            buttons: 
            <div id='buttonContainer'>
                <button className='landingButton' type='button'>Write a letter!</button>
                <button className='landingButton' type='button'>Send a fax!</button>
            </div>
        }
    }

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
                <option className='option' value='LifeTime'>LifeTime</option>
            </select>
            {info[value]?.description}
            {info[value]?.buttons}
        </div>
    )
}
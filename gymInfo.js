import React from 'react';

export const gymInfo = {
    'PlanetFitness': {
        description:
        <div id='landingGymInformation'>
            <p>Planet Fitness lays out their cancellation policy <a style={{color: '#f64c72', textDecoration: 'none'}} href='https://www.planetfitness.com/about-planet-fitness/customer-service'>here</a>.</p>
            <p>The FAQ states customers may cancel their memberships through a certified letter to their home club or by visiting their home club in person.</p>
        </div>,
        buttons: 
        <div id='buttonContainer'>
            <button className='landingButton' type='button'>Send a letter!</button>
        </div>
    }
    ,
    'LifeTime': {
        description:
        <div id='landingGymInformation'>
            <p>Life Time Fitness lays out their cancellation policy  <a style={{color: '#f64c72', textDecoration: 'none'}} href='https://www.lifetime.life/faq/what-is-life-times-cancellation-policy.html#:~:text=For%20your%20convenience%2C%20we%20allow,%2D877%2D583%2D6818.'>here</a>.</p>
            <p>Cancellation requires a 30-day notice and can be done either in person, by mail or over the phone at 1-877-583-6818.</p>
        </div>,
        buttons: 
        <div id='buttonContainer'>
            <button className='landingButton' type='button'>Send a letter!</button>
        </div>
    }
}
import React from 'react';
import Introduction from './Introduction.jsx';
import Drop from './Drop.jsx';
import Description from './Description.jsx'; 
import Buttons from './Buttons.jsx'; 
import {gymInfo} from '../../../assets/gymInfo';

export default function LandingPage() {

    let [value, setValue] = React.useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div id='landing'>
            <Introduction />
            <Drop value={value} handleChange={handleChange}/>
            <Description description={gymInfo[value]?.description} />
            <Buttons buttons={gymInfo[value]?.buttons}/>
        </div>
    )
}
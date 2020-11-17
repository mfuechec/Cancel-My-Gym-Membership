import React from 'react';

export default function Buttons({buttons}) {

    return (
        <div id='buttonContainer'>
            {buttons?.includes('letter') && <button className='landingButton' type='button'>Send a letter!</button>}
            {buttons?.includes('fax') && <button className='landingButton' type='button'>Send a fax!</button>}
        </div>
    )
}
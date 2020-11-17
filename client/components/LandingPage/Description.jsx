import React from 'react';

export default function Description({description}) {

    return (
        <div id='landingGymInformation'>
            {description?.map((para) => {
                return para
            })}
        </div>
    )
}
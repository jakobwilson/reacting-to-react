import React from 'react';


const Greeter = (props) => {
    return (
        <div>
            <h1 className='text-center'>{props.phrase}, {props.name}</h1>
        </div>
    );
};

export default Greeter;
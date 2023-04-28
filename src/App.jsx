import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';

const App = () => {

    const [ username, setUsername ] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    const handleToggle = () => {
        setLoaded(true);

    };

    useEffect(() => {
        setTimeout(() => {
            handleToggle()

        }, 3000);

    },[]);

   

  
    
    if (loaded === false) {
        return (
            <>
                <h1>Website loading...</h1>
            <button onClick={handleToggle}>Load</button>
            </>
        ) 
    }

    
    

    return (
        <div>
            <Greeter phrase="Hello there" name="Jakob"/>
            <Greeter phrase="Whats Up" name="Lauren"/>
            <Greeter phrase="Howdy" name="Blaknie"/>
            <input className='text-center' value={username} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as: {username}</p>
        </div>
        
    );
};

export default App;
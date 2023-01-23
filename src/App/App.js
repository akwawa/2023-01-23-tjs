import React from 'react';
import Button from './components/ui/Button/Button';

import './App.css';

function App() {
    return (
        <div className="App">
            DEMAT BREIZH
            <hr/>
            <Button text="text">cliquez<br/>ici</Button>
            <Button><img src="img/cross.svg" alt="cross"></img>Pas là !</Button>
            <Button>pourquoi pas là ?</Button>
            <Button />
        </div>
    );
}

export default App;

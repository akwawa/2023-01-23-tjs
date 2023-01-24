import React from 'react';
import Button from './components/ui/Button/Button';

import './App.css';

class App extends React.PureComponent{
    counter=0;

    render(){
        return (
            <div className="App">
                DEMAT BREIZH
                <hr />
                <Button text="text">cliquez<br />ici</Button>
                <Button><img src="img/cross.svg" alt="cross"></img>Pas là !</Button>
                <Button>pourquoi pas là ?</Button>
                <Button />
                <hr />
                <div>
                    Voici le nombre de clic : {this.counter}
                </div>
                <Button onButtonClick={
                    () => {
                        this.counter--;
                        console.log(this.counter);
                        }
                    }>Clic - 1</Button>
                <Button>Clic + 1</Button>
            </div>
        );
    }
}

// function App() {
//     let counter = 0;
//     return (
//         <div className="App">
//             DEMAT BREIZH
//             <hr />
//             <Button text="text">cliquez<br />ici</Button>
//             <Button><img src="img/cross.svg" alt="cross"></img>Pas là !</Button>
//             <Button>pourquoi pas là ?</Button>
//             <Button />
//             <hr />
//             <div>
//                 Voici le nombre de clic : {counter}
//             </div>
//             <Button onButtonClick={
//                 () => {
//                     counter--;
//                     console.log(counter);
//                     }
//                 }>Clic - 1</Button>
//             <Button>Clic + 1</Button>
//         </div>
//     );
// }

export default App;

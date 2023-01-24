import React from 'react';
import Button from './components/ui/Button/Button';

import './App.css';

class App extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            counter: 0
        };
    }

    componentDidUpdate() {
        // console.log('Après le chargement effectif de l\'état', this.state.counter);
        // console.log(arguments);
    }

    handleButtonClick() {
        this.setState((prevState) => ({
            counter: prevState.counter+1,
        }));
    }

    render() {
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
                    Voici le nombre de clic : {this.state.counter}
                </div>
                <Button onButtonClick={
                    () => {
                        // Mauvaise pratique
                        // this.state.counter--;

                        // Bonne pratique
                        this.setState(
                            { counter: this.state.counter - 1 },
                            // ()=>{console.log(this.state.counter);}
                        );
                        // this.setState(
                        //     (state) => {
                        //         return { counter: state.counter - 1 };
                        //     },
                        //     () => { console.log(this.state.counter); }
                        // );
                    }
                }>Clic - 1</Button>
                <Button onButtonClick={this.handleButtonClick}
                >Clic + 1</Button>
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

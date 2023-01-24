import React from 'react';
import Button from './components/ui/Buttonts/Button';

import './App.css';

interface IAppState {
    counter:number
    // constante
    uneValeur:"hello"|"hello2"
}

interface IAppProps {}

class App extends React.PureComponent<IAppProps, IAppState> {

    constructor(props:IAppProps) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            counter: 0,
            uneValeur: "hello2",
        };
    }

    componentDidUpdate(oldProps:IAppProps, oldState:IAppState) {
        // console.log('Après le chargement effectif de l\'état', this.state.counter);
        // console.log(arguments);
    }

    handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    render() {
        return (
            <div className="App">
                DEMAT BREIZH
                <hr />
                <h1>{process.env.REACT_APP_NOT_SECRET_CODE}</h1>
                <hr />
                <Button
                    style={{
                        backgroundColor: "tomato",
                        color: "black",
                        fontWeight: "bold"
                    }}
                >
                    cliquez<br />ici
                </Button>
                <Button><img src="img/cross.svg" alt="cross"></img>Pas là !</Button>
                <Button>pourquoi pas là ?</Button>
                <Button children="ok" />
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
                <Button
                    onButtonClick={
                        () => this.setState({ counter: 0 })
                    }

                    style={{
                        color: "black"
                    }}

                    bgColor="skyblue"
                >Clic = 0</Button>

                <Button children={"23"}></Button>
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

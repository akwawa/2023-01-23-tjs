import React from 'react';

import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Navbar from './components/ui/Navbar/Navbar';

// import MemeSvgViewer from './components/ui/SvgViewer/SvgViewer';
import MemeForm from './components/feature/MainForm/MainForm';

import { MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';

import './App.css';

interface IAppState { }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {};
    }

    componentDidUpdate(oldProps: IAppProps, oldState: IAppState) {
    }

    handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        this.setState((prevState) => ({}));
    }

    render() {
        return (
            <div className="App">
                <Header />
                <hr />
                <Navbar />
                <hr />
                <FlexLayout>
                    {/* <MemeSvgViewer /> */}
                    <MemeSVGViewer meme={DummyMeme} image={undefined} />
                    <MemeForm />
                </FlexLayout>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default App;

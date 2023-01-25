import React from 'react';

import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Navbar from './components/ui/Navbar/Navbar';

// import MemeSvgViewer from './components/ui/SvgViewer/SvgViewer';
import MemeForm from './components/feature/MainForm/MainForm';

import { MemeInterface, MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';

import './App.css';

interface IAppState { meme: MemeInterface }
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = { meme: DummyMeme };
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
                    <MemeSVGViewer meme={this.state.meme} image={undefined} />
                    <MemeForm meme={this.state.meme} onMemeValueChange={
                        (newMeme: MemeInterface) => {
                            this.setState({meme:newMeme});
                        }
                    } />
                </FlexLayout>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default App;

import React from 'react';

import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Navbar from './components/ui/Navbar/Navbar';

// import MemeSvgViewer from './components/ui/SvgViewer/SvgViewer';
import MemeForm from './components/feature/MainForm/MainForm';

import { MemeInterface, MemeSVGViewer, ImageInterface } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';

import './App.css';

interface IAppState {
    meme: MemeInterface
    images: Array<ImageInterface>
}
interface IAppProps { }

class App extends React.PureComponent<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            meme: DummyMeme,
            images: [
                { id: 0, url: "think.bmp", w: 675, h: 380, name: "Think" },
                { id: 1, url: "worthless.bmp", w: 892, h: 1000, name: "Worthless" }
            ]
        };
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
                    <MemeForm
                        meme={this.state.meme}
                        images={this.state.images}
                        onMemeValueChange={
                            (newMeme: MemeInterface) => {
                                this.setState({ meme: newMeme });
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

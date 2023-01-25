import React from 'react';

import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Navbar from './components/ui/Navbar/Navbar';

import MemeSvgViewer from './components/ui/SvgViewer/SvgViewer';
import MemeForm from './components/feature/MainForm/MainForm';

import { MemeInterface, ImageInterface } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';

import { BASE_MEME_IMG, REST_ADR } from './config/config';

import './App.css';
import { store } from './store/store';
import Button from './components/ui/Buttonts/Button';

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
            images: []
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
                    <MemeSvgViewer />
                    {/* <MemeSVGViewer
                        meme={this.state.meme}
                        image={this.state.images.find(element => element.id === this.state.meme.imageId)}
                        basePath="/img/meme/"
                    /> */}
                    <MemeForm />
                    {/* <MemeForm
                        meme={this.state.meme}
                        images={this.state.images}
                        onMemeValueChange={
                            (newMeme: MemeInterface) => {
                                this.setState({ meme: newMeme });
                            }
                        } /> */}
                </FlexLayout>
                <hr />
                <Footer />
            </div>
        );
    }
}

export default App;

import React from 'react';

import Header from './components/ui/Header/Header';
import Footer from './components/ui/Footer/Footer';

import FlexLayout from './components/layout/FlexLayout/FlexLayout';
import Navbar from './components/ui/Navbar/Navbar';

// import MemeSvgViewer from './components/ui/SvgViewer/SvgViewer';
import MemeForm from './components/feature/MainForm/MainForm';

import { MemeInterface, MemeSVGViewer, ImageInterface } from 'orsys-tjs-meme';
import { DummyMeme } from './interfaces/dummyMeme';

import { BASE_MEME_IMG, REST_ADR } from './config/config';

import './App.css';
import { store } from './store/store';

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

    componentDidMount(): void {
        // console.log(uneValeurASupprimerApres);

        // Pas bien, ne pas faire. passer par des magasins
        // fetch(`${REST_ADR}/images`)
        // .then(r=>r.json(), r=>[])
        // .then(ar=>this.setState({images:ar}))
        // ;

        // Méthode magasin -> subscribe pas bien
        // Méthode magasin -> par feature !
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
                    <MemeSVGViewer
                        meme={this.state.meme}
                        image={this.state.images.find(element => element.id === this.state.meme.imageId)}
                        basePath="/img/meme/"
                    />
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

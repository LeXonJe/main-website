import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundImage from "./components/BackgroundImage";
import Loading from "./components/Loading";

import Backend from "./classes/Backend";
import Pages from "./pages";


class App extends React.Component {

    state = {
        background: "",
        userIsLoggedIn: false
    };

    componentDidMount() {
        let app = this;
        // Load the Database for the Video-Elements
        Backend.onLoad(() => app.forceUpdate());
    }

    render() {
        if(!Backend.loaded) return <Loading />;

        return (
            <div id={"container"}>
                <Router>
                    <BackgroundImage image={this.state.background} />
                    <Header userIsLoggedIn={this.state.userIsLoggedIn} />
                    <Route render={({location}) => <Pages location={location} setBackground={this.setBackground} />} />
                    <Footer />
                </Router>
            </div>
        );
    }

    setBackground = src => this.state.background !== src && this.setState({background: src});
}

export default App;

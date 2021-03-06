import React, {Component} from 'react';
import Home from './Home';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <Home/>
                <Footer/>
            </div>
        );
    }
}

export default App;

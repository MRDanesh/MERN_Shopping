import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

class App extends React.Component{
    render() {
        return (
            <Router>
                <Header/>
                <main className='py-3'>
                    <Container>
                        <Route path = '/' component = {HomeScreen} exact  />
                        <Route path = '/product/:id' component={ProductScreen} />
                    </Container>
                </main>
                <Footer/>
            </Router>
        );
    }
}

export default App;
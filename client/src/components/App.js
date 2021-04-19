import React from 'react';
import {Container} from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

class App extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <main className='py-3'>
                    <Container>
                        <h1>
                            Welcome To Shopping Center 
                        </h1>
                    </Container>
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
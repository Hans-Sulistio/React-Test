import React from 'react';
import ReactDOM from 'react-dom';
import {Route , Link,BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './Component/about';
import { Container,Navbar,NavItem,Jumbotron } from 'react-bootstrap';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        
        <Container>
        <Navbar>
            <NavItem>
                <Link to="/" className="btn nav-item">
                    Home
                </Link>
                
            </NavItem>
            <NavItem>
                <Link to="/about" className="btn nav-item">
                    About
                </Link>
                
            </NavItem>
        </Navbar>
        <Jumbotron>
            Halo
        </Jumbotron>
        <div>
            
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
        </div>
        </Container>
        
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

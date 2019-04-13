import React, { Component } from 'react';
import { Container,Navbar,NavItem,NavLink, Nav, Jumbotron } from 'react-bootstrap';

class about extends Component{
    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container className="jumbotron-style">
                        <h1>Fluid jumbotron</h1>
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default about;
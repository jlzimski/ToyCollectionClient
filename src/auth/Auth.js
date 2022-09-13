import React from 'react';
import { Container, Row } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {
    return(
        <Container id='auth'>
            <Row>
                <Login />
            </Row>
            <br />
            <Row>
                <Signup />
            </Row>
        </Container>
    )
}

export default Auth;
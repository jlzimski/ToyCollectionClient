import React from 'react';
import { Container, Row } from 'reactstrap';

const Auth = (props) => {
    return(
        <Container className='auth-container'>
            <Row>
                Login
            </Row>
            <Row>
                Signup
            </Row>
        </Container>
    )
}

export default Auth;
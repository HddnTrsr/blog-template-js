import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/js-logo.png';
import './css/header.css';

function Header() {
  return (
    <header className= 'header-sample'>   
    <Container>
    <Row>
        <div className='col-width-logo'><Col ><img className="logo-props" src={Logo} alt="Blog-logo" width="8vh" height="10vh"/></Col></div>
        <Col><div className='text-sample'>Encyclopedia</div></Col>
    </Row>
    </Container>
    </header>
    );
}

export default Header;

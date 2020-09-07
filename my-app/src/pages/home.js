import React from "react";
import '../components/css/main.css';
import { Container, Row, Col,Card, Image } from "react-bootstrap";

function Home() {
    return(   
        <div>
            <div className = 'intro-section'>
            <h1 className='heading-main'>Hi, I am Sajal Maheshwari.</h1> 
            <p className='intro-para'>
                "Hello Reader, Welcome to my React based Blogging website.
                <br/> I am a JavaScript developer practicing in different JS frameworks - React.js, Express.js, Gatsby.js, Jest, Jasmine, and Mocha with CLI.
                <br/>Here, you can explore the different blogs related to the JS frameworks, deployment and testing of the JS websites."
            </p>
            </div>

            <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="./images/image-back.png" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="./images/image-back.png" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="./images/image-back.png" thumbnail />
                </Col>
            </Row>
            </Container>





            <Container className='layout-1-center'>
                <Row noGutters>
                    <Col>
                        <Card style={{ width: '24rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col> 
                    <Col>       
                        <Card style={{ width: '24rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title 2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
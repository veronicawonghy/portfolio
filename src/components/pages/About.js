import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap';
import myPicture from '../../assets/my_picture.jpg';

function About() {
    return (
        <>
        
        <Container className='mainContainer'>
            <Row>
                <Col xs={12} md={5}>
                    <div className='d-flex justify-content-center'>
                        <img src={myPicture} alt="My Picture" className='myPicture contentContainer' />
                    </div>
                </Col>
                <Col xs={12} md={7} className='contentContainer'>
                <div>
                    <p><h3>Hello, I am Veronica!</h3></p>
                    
                    <p>I am currently a final year student at Hong Kong University of Science and Technology, 
                    majoring in Computer Engineering and minoring in Business.</p>
                    
                    <p>I have always been interested in technology since I was a child. I believe that technology could create a great positive impact to our society. 
                    I found programming stimulating as it is always challenging and I feel satisfied whenever I complete a program. It also makes me a more logical and analytical person. :) </p>
                    
                    <p>During the course of my academic career, I also gained working experience in several industries, like Banking, Telecom, Tech start-up etc.
                    I have acquired skills in programming like Python, SQL, Javascript, C++ and Java. I also enjoy learning new technical stack.</p>

                    <p>Personally, I like to do yoga, watch Netflix and learn languages. I am learning Korean and French recently! :D</p>
                    
                    <p>Connect me via:
                        <br/>
                        LinkedIn
                        Instagram
                        Email
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About;
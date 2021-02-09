import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap';
import myPicture from '../../assets/my_picture.jpg';

function About() {
    return (
        <>
        
        <Container className='mainContainer'>
            <Row>
                <Col xs={12} md={4}><img src={myPicture} alt="My Picture" className='myPicture contentContainer' /></Col>
                <Col xs={12} md={8} className='contentContainer'>
                <div>
                    <p>Hello, I am Veronica! </p>
                    
                    <p>I am currently a final year student at Hong Kong University of Science and Technology, 
                    majoring in Computer Engineering and minoring in Business.</p>
                    
                    <p>I have always been interested in technology since I was a child. I believe that technology could create a great positive impact to our society. 
                    I found programming stimulating as it is always challenging and I feel satisfied whenever I complete a program. It also makes me a more logical and analytical person. :) </p>
                    
                    <p>During the course of my academic career, I also gained work experience in several industries, like Banking, Telecom, Tech start-up etc.
                    I have acquired skills in programming like Python, SQL, Javascript, C++ and Java. I am also happy to learn new technical stack.</p>

                    <p>Personally, I like to do yoga and learn languages. I am learning Korean and French recently! :D</p>
                    
                    <p>Connect me via:
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
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import myPicture from '../../assets/my_picture.jpg'
import Instagram from '../../assets/icons/Instagram.svg'
import LinkedIn from '../../assets/icons/Linkedin.svg'

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
                    <p><h2>Hello, I am Veronica!</h2></p>
                    
                    <p>I am currently a final year student at Hong Kong University of Science and Technology, 
                    majoring in <span style={{'font-weight':'bold'}}>Computer Engineering</span> and minoring in <span style={{'font-weight':'bold'}}>Business</span>.</p>
                    
                    <p>I have always been interested in <span style={{'font-weight':'bold'}}>technology</span> since I was a child. I believe that technology could create a great positive impact to our society. 
                    I found programming stimulating as it is always challenging and I feel satisfied whenever I complete a program. It also makes me a more logical and analytical person. :) </p>
                    
                    <p>During the course of my academic career, I also gained working experience in several industries, like Banking, Telecom, Tech start-up etc.
                    I have acquired skills in programming like <span style={{'font-weight':'bold'}}>Python, SQL, Javascript, C++ and Java</span>. I also enjoy learning new technical stack.</p>

                    <p>Personally, I like to do yoga, watch Netflix and learn languages. I am learning Korean and French recently! :D</p>
                    
                    <p><span style={{'font-weight':'bold'}}>Connect with me via:</span>
                        <br/>
                        <a href='https://www.linkedin.com/in/veronica-wong-ho-yan/' target="_blank" style={{'text-decoration': 'none', color: 'inherit'}}>
                            <div className="d-flex flex-row align-items-center" style={{'margin': '5px 5px 5px 0px'}}>
                            <img src={LinkedIn} className="social-icon" alt="LinkedIn" /> 
                            <span style={{'font-size': 15}}>Veronica Wong</span>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/veronicawonghy/' target="_blank" style={{'text-decoration': 'none', color: 'inherit'}}>
                            <div className="d-flex flex-row align-items-center" style={{'margin': '5px 5px 5px 0px'}}>
                            <img src={Instagram} className="social-icon" alt="Instagram" /> 
                            <span style={{'font-size': 15}}>Personal | @veronicawonghy</span>
                            </div>
                        </a>
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default About;
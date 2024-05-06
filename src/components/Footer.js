import { MailchimpForm } from "./MailchimpForm";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/nisarg-patel-5b377a1b6/" target="_blank"><img src={navIcon1} alt=""/></a>
                            <a href="https://github.com/nisarg7399" target="_blank"><img src={github} alt=""/></a>
                            <a href="https://www.instagram.com/_.n.i.s.a.r.g._/" target="_blank"><img src={navIcon3} alt=""/></a>
                        </div>
                        <p>© CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
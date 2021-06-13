import { InView } from 'react-intersection-observer'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { animate, openLinkNewTab } from '../utils';


function ContactSection() {

    return (
        <Container fluid id="section-contact" className="section section-contact section-dark">
            <a className="anchor" id="contact"></a>
            <div className="section-title">
                <h2 className="section-title-text">contact</h2>
            </div>
            <Row className="h-100">
            <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 contact-column">
                <h4 className="section-subtitle-text">Email</h4>
                <InView as={Button} onChange={animate('fadeIn')} threshold={0} triggerOnce={true} href="mailto:sebastien@mottet.dev" className="opacity-0" variant="link"><h3>sebastien@mottet.dev</h3></InView>
            </Col>
            <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 contact-column">
                <h4 className="section-subtitle-text">Téléphone</h4>
                <InView as='h3' onChange={animate('fadeIn')} threshold={0} triggerOnce={true} className="opacity-0">0492/60.63.18</InView>
            </Col>
            <Col className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 contact-column">
                <h4 className="section-subtitle-text">Social</h4>
                <InView as={Button} onChange={animate('fadeIn')} threshold={0} triggerOnce={true} className="opacity-0" onClick={() => {openLinkNewTab("https://www.linkedin.com/in/sebastien-mottet/")}} variant="link"><h3>LinkedIn</h3></InView>
            </Col>
            </Row>
        </Container>
    );
}

export default ContactSection;

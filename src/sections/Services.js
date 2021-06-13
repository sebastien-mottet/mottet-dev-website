import { InView } from 'react-intersection-observer'
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { animate } from '../utils';
import computerImage from '../img/computer.jpeg';


function ServicesSection() {

    return (
        <Container fluid id="section-services" className="section section-services section-light">
            <a className="anchor" id="services"></a>
            <Row className="align-items-center">
                <Col className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="section-title">
                        <h2 className="section-title-text">mes services</h2>
                    </div>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="card-service w-75">
                        <h4 className="section-subtitle-text">Développement de logiciel</h4>
                        <h5>Des solutions sur-mesure</h5>
                        <p>
                            Du simple site web à l'application web ou mobile plus poussée, je vous propose de vous accompagner tout au long de
                            votre projet informatique de la phase de conception au déploiement en passant par le développement et la maintenance.
                        </p>
                    </InView>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="card-service w-75">
                        <h4 className="section-subtitle-text">Science des données</h4>
                        <h5>Faites parler vos données</h5>
                        <h6>Vos données ont de la valeur. Etes-vous certain de bien les exploiter?</h6>
                        <p>
                            Les données sont un nouvel actif à ne pas négliger car celles-ci peuvent vous être utiles dans tous les aspects de 
                            votre business. Elles peuvent vous aider dans vos prises de décision, dans l'amélioration de vos processus ou encore 
                            dans la compréhension de vos clients. Je vous propose de vous aider à tirer au mieux parti des données que votre business génère.
                        </p>
                    </InView>
                    <InView as={Button} style={{opacity: 0}} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} variant="outline-primary" size="lg" href="mailto:sebastien@mottet.dev">Me contacter</InView>

                </Col>
                <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 image-col">
                    <InView as={Image} fluid className={"computer-picture"} onChange={animate('scaleUp')} threshold={0.5} triggerOnce={true} src={computerImage} rounded/>
                </Col>
            </Row>

        </Container>
    );
}

export default ServicesSection;

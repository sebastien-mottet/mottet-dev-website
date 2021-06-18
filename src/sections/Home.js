import { InView } from 'react-intersection-observer'
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { animate } from '../utils';
import profilePicture from '../img/profile_picture.jpg';
import smallProfilePicture from '../img/small_profile_picture.jpg';

function HomeSection() {

    return (
        <Container fluid id="section-home" className="section section-light section-home" style={{backgroundColor: 'linear-gradient(left, #00ff00 50%, #ff0000 50%) !important'}}>
            <a className="anchor" id="home"></a>
            <Row className="align-items-center home-row">
                <InView as={Col} onChange={animate('fadeIn')} threshold={0} triggerOnce={true} className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 home-col home-col-title">
                    <div className="section-title-border">
                        <h1>Sébastien Mottet,</h1>
                        <h2>Ingénieur civil en informatique</h2>
                    </div>
                    <div className="small-profile-picture-div">
                        <Image fluid className={"small-profile-picture"} src={smallProfilePicture} roundedCircle/>
                    </div>
                    <div className="w-75 mt-4 mb-4">
                        <p>
                            Passionné depuis l'enfance par l'informatique, à 11 ans déjà je créais mon premier site web dédié aux personnages
                            de la célèbre bande dessinée Astérix. Cette passion m'a ensuite guidée dans mon choix d'étude et de carrière.
                            Fort de mon diplôme et de mes années d'expérience dans le développement logiciel, je vous propose de vous accompagner 
                            tout au long de votre projet informatique de la phase de conception au déploiement en passant par le développement.
                        </p>
                    </div>
                    <div>
                        <Button variant="outline-secondary" size="lg" style={{marginRight: '15px', marginBottom: '15px'}} href="#services">Mes services</Button>
                        <Button variant="outline-primary" size="lg" style={{marginBottom: '15px'}} href="#contact">Me contacter</Button>
                    </div>
                </InView>
                <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 home-col">
                    <InView as={Image} fluid className={"profile-picture"} onChange={animate('scaleUp')} threshold={0} triggerOnce={true} src={profilePicture} rounded/>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeSection;

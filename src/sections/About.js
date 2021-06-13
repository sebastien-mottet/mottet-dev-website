import { InView } from 'react-intersection-observer'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { animate, openLinkNewTab } from '../utils';


function AboutSection() {

    return (
        <Container fluid id="section-about-me" className="section section-about-me section-dark">
            <a className="anchor" id="about-me"></a>
            <div className="section-title">
                <h2 className="section-title-text">à propos de mon parcours</h2>
            </div>
            <Row className="about-me-row">
                <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 about-me-column">
                    <h4 className="section-subtitle-text mb-4">Éducation</h4>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="about-card">
                        <h4 className="about-card-title">Master - ingénieur civil en informatique</h4>
                        <h5 className="about-card-subtitle">école polytechnique de louvain</h5>
                        <h5 className="about-card-year">Septembre 2017 - Juin 2019</h5>
                        <p className="text-muted">Master en informatique avec une spécialisation en intelligence artficielle et algorithmique. Diplômé avec grande distinction.</p>
                    </InView>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="about-card">
                        <h4 className="about-card-title">Master - Mémoire</h4>
                        <h5 className="about-card-subtitle">Ethics in Big Data: designing recommendation algorithms avoiding ’filter bubbles’</h5>
                        <h5 className="about-card-year">Septembre 2018 - Juin 2019</h5>
                        <p className="text-muted">
                            Développement d'une métrique mesurant l'effet bulle de filtre des algorithmes de recommandation et comparaison des
                            performances des algorithmes de la littérature. Mémoire en collaboration avec la RTBF qui a mis à notre disposition les 
                            données de sa plateforme de streaming AUVIO.
                        </p>
                        <Button variant="outline-secondary" style={{marginTop: '10px'}} onClick={() => {openLinkNewTab("https://drive.google.com/file/d/18QspZ11u2_MECPWRGjk2yo21dhLwYJni/view?usp=sharing")}}>En savoir plus</Button>
                    </InView>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="about-card">
                        <h4 className="about-card-title">Bachelier - ingénieur civil</h4>
                        <h5 className="about-card-subtitle">école polytechnique de louvain</h5>
                        <h5 className="about-card-year">Septembre 2014 - Juin 2017</h5>
                        <p className="text-muted">Bachelier en ingénieur civil avec spécialisation en informatique et en gestion. Diplômé avec grande distinction.</p>
                    </InView>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 about-me-column">
                    <h4 className="section-subtitle-text">Expériences</h4>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="about-card">
                        <h4 className="about-card-title">Ingénieur Logiciel chez Odoo</h4>
                        <ul>
                            <li className="about-card-section">
                                <h5 className="about-card-subtitle">Website Builder Team</h5>
                                <h5 className="about-card-year">Février 2021 - Maintenant</h5>
                                <p className="text-muted">
                                    Je travaille actuellement sur le développement du futur générateur de sites web d'Odoo. En se
                                    basant sur un bref questionnaire rempli par l'utilisateur, notre système génère automatiquement 
                                    un site web personnalisé répondant aux besoins de l'utilisateur. 
                                </p>
                            </li>
                            <li className="about-card-section">
                                <h5 className="about-card-subtitle">Artificial Intelligence Team</h5>
                                <h5 className="about-card-year">Février 2020 - Février 2021</h5>
                                <p className="text-muted">
                                    En tant que membre de cette équipe j'ai travaillé à l'amélioration notre système de traitement automatique de facture.
                                    Le système extrait automatiquement les données utiles de vos factures et les encode directement dans votre comptabilité
                                    sans nécéssité d'intervention humaine.
                                </p>
                                <Button variant="outline-secondary" style={{marginTop: '10px'}} onClick={() => {openLinkNewTab("https://www.odoo.com/fr_FR/app/invoice-automation")}}>Démonstration</Button>
                            </li>
                        </ul>
                    </InView>
                    <InView as={'div'} onChange={animate('fadeIn')} threshold={0.5} triggerOnce={true} className="about-card">
                        <h4 className="about-card-title">Ingénieur Logiciel chez ALOALTO</h4>
                        <h5 className="about-card-year">Septembre 2019 - Janvier 2020</h5>
                        <p className="text-muted">
                            J'ai participé au développement d'applications web pour Wabco et Niko. 
                            J'ai travaillé à la fois sur la partie backend et la partie frontend en utilisant des technologies
                            telles que React, Serverless et divers services d'AWS.
                        </p>
                    </InView>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;

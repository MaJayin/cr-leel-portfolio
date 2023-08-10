import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/banner-bg.png"


export const  Banner = () => {
    return(
        <section className="banner" id="home">

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Contact page</span>
                        <h1>{`Hi I'm Leel I am a dumbass `}<span className="wrap"></span></h1>
                        <p>just some random text just some random text just some random text just some random text just some random text</p>
                        <button onClick={() => { window.location.href = ('#contact')}}>
  Let's connect <ArrowRightCircle size={25}/>
</button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} />  {/*fill image */}
                    </Col>
                </Row>
            </Container>

        </section>




    )




} 
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gen-question.jpg";
import projImg2 from "../assets/img/gen-question-redone.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Project = () => {

    const projects = [
        {
          title: "Yes i quite infact do",
          description: "test",
          imgUrl: projImg1,
          
        },
        {
            title: "Yes i quite infact do",
            description: "test",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
       
      ];


    return (

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>random text  random text random text random text random text random text random text</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">
                            About tab
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">
                            FAQ'S
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">
                        Privacy Policy
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                             key={index}
                                             {...project} />
                                            
                                            
                                        )
                                    })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                             key={index}
                                             {...project} />
                                            
                                            
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        random text  random text random text random text random text random text random textrandom text  random text random text random text random text random text random textrandom text  random text random text random text random text random text random textrandom text  random text random text random text random text random text random textrandom text  random text random text random text random text random text random textrandom text  random text random text random text random text random text random text
                            </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}
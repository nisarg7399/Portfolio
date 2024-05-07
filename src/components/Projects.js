import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Canteen Automation System",
      description: "Canteen Automation System is an efficient and user-friendly project designed to streamline and automate canteen operations. It simplifies the entire process by integrating features like online ordering, digital menu management and inventory tracking",
      imgUrl: projImg1,
    },
    {
        title: "Ecommerce Website",
        description: "Explore the latest electronics at our online store, offering a curated selection of top-notch gadgets and devices. From cutting-edge smartphones to sleek laptops and immersive audio systems, we provide quality products and seamless shopping experiences for tech enthusiasts worldwide.",
        imgUrl: projImg2,
    },
    {
        title: "InsightPad",
        description:"Transforming Video Content Into Study Notes Using ChatGPT API",
        imgUrl: projImg3,
    },
  ];
  
  return (
    <section className="project" id="project">
      <Container>
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <h2>Projects</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        </div>}
        </TrackVisibility>
        <Tab.Container id="project-tabs" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pi;;s mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">Project 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Project 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Project 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="proj-imgbx">
                <img src={projects[0].imgUrl} alt={projects[0].title} />
                <div className="proj-txtx">
                  <h4>{projects[0].title}</h4>
                  <span>{projects[0].description}</span>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="proj-imgbx">
                <img src={projects[1].imgUrl} alt={projects[1].title} />
                <div className="proj-txtx">
                  <h4>{projects[1].title}</h4>
                  <span>{projects[1].description}</span>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="proj-imgbx">
                <img src={projects[2].imgUrl} alt={projects[2].title} />
                <div className="proj-txtx">
                  <h4>{projects[2].title}</h4>
                  <span>{projects[2].description}</span>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};



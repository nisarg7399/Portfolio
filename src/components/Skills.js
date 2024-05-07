import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                    As a web developer, I specialize in crafting dynamic and visually appealing web applications using HTML, CSS, and JavaScript. With expertisein frontend development using ReactJS and in backend development using PHP, I build robust and scalable solutions to meet client needs. Additionally, my proficiency in database management with MySQL ensures efficient data storage and retrieval, enhancing the performance and functionality of web applications.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>ReactJS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

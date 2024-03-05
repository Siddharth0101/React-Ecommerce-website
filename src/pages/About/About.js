import Carousel from "react-bootstrap/Carousel";
import Image2 from "../../images/Image2/pexels-linda-ellershein-3127880.jpg";
import Image3 from "../../images/Image3/pexels-ivan-bertolazzi-2681319.jpg";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <div
              style={{
                maxWidth: "570px",
                margin: "15px auto",
              }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Join Us</h3>
                    <h4>Our journey began with a simple idea</h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Why Join Us</h3>
                    <h4>
                      We're building a future where innovation and
                      sustainability are the norm
                    </h4>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

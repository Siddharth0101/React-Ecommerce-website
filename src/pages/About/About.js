import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../images/Image1/pexels-element-digital-1550337.jpg";
import Image2 from "../../images/Image2/pexels-linda-ellershein-3127880.jpg";
import Image3 from "../../images/Image3/AdobeStock_133066505_Preview.jpeg";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Container fluid style={{ width: "100%", height: "100%" }}>
        <Row style={{ width: "100%", height: "100%" }}>
          <Col xs={12} style={{ width: "100%", height: "100%" }}>
            <div
              style={{
                maxWidth: "100%",
                height: "100%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Carousel style={{ width: "100%", height: "100%" }}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image1}
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

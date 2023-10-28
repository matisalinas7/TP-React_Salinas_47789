import "./../../assets/styles/aboutUs.css";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <div className="titulo">
          <h2>About Us</h2>
          <p>
            Welcome to our company! Learn more about who we are and what we do.
          </p>
        </div>

        <div className="card-container">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="src/assets/images/aboutUs1.jpg"
              alt="boyero"
            />
            <Card.Body>
              <Card.Title>Card 1 Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="src/assets/images/aboutUs2.jpg"
              alt="cocker"
            />
            <Card.Body>
              <Card.Title>Card 2 Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="src/assets/images/aboutUs3.jpg"
              alt="golden"
            />
            <Card.Body>
              <Card.Title>Card 3 Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

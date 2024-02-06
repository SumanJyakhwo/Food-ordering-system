
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col className="text-center">
      
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold"
            >
              Bhaktapur Foods
            </a>
        </Col>

      </Row>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const FooterPage = () => {
  return (
    <footer>
      <Container  fluid className="bg-primary mt-5">
        <Row className="container-fluid bg-primary mt-5">
          <Col sm={8} className="py-3 text-white">
            Get connected with us on social networks!
          </Col>
          <Col sm={4} className="py-3 text-center">
            <Link to="/" title="Apple" >
              <i className="bi bi-apple ml-3 text-white"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-white ml-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-white ml-3"></i>
            </Link>
            |
            <Link to="/" title="Twitter">
              <i className="bi bi-twitter-x text-white ml-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-white ml-3"/>
            </Link>
            <Link to="/" title="Instagram">
              <i className="bi bi-instagram text-white ml-3"></i>
            </Link>
            <Link to="/" title="Youtube">
              <i className="bi bi-youtube text-white ml-3"></i>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark text-white">
        <Row> 
          <Col sm={3} className="py-3">
            <div className="text-white">Bhaktapur Foods</div>
            
            <div className="mt-4" >
                <p >
            Bhaktapur Food, a renowned restaurant in the heart of the city, offers an exquisite culinary experience that captures the essence of Nepalese flavors. Our diverse menu features authentic dishes prepared with locally sourced ingredients.
            </p>
            </div>
          </Col>
          <Col sm={3} className="py-3">
            <div className="text-white">Our Services</div>
       
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Breakfast
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Lunch
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Snacks
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Dinner
                </Link>
              </li>
             
            </ul>
          </Col>
          <Col sm={3} className="py-3">
            <div className="text-white">Policy</div>
    
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Return Policy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Security
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Privacy
                </Link>
              </li>
              
            </ul>
          </Col>
          <Col sm={3} className="py-3">
            <div className="text-white">Address</div>
       
            <address className="mt-4">
              <strong>Twitter, Inc.</strong>
              <br />
              1355 Market St, Suite 900
              <br />
              San Francisco, CA 94103
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>

            <div className="text-whitem mb-3">Customer Care</div>
            
            <i className="bi bi-telephone"></i> +1800 100 1000
            <br />
            <i className="bi bi-envelope"></i> info@email.com
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
};
export default FooterPage;
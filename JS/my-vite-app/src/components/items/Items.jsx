import "../items/items.css"
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


export default function Items() {
  return (
  <div className="main-container">
      <Carousel indicators = {false}
        prevIcon={<BsArrowLeft className="custom-carousel-control" />}
        nextIcon={<BsArrowRight className="custom-carousel-control" />}>
        <Carousel.Item>
          <span className="coffee">OUR SPECIAL COFFEE</span>

         <Row className="row">
            <Col>
             <Card className="custom-card" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="../src/assets/coffee.jpg" />
                <Card.Body className="card-body">
                 <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                 <Card.Text>
                  Our Coffee tastes best in the town.
                 </Card.Text>
                 <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
               </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Carousel.Item>
      {/* Add additional Carousel.Items for more slides */}
    </Carousel>


    <Carousel indicators = {false}
        prevIcon={<BsArrowLeft className="custom-carousel-control" />}
        nextIcon={<BsArrowRight className="custom-carousel-control" />}>
        <Carousel.Item>
          <span className="coffee">OUR SPECIAL COFFEE</span>

         <Row className="row1">
            <Col>
             <Card className="custom-card" style={{ width: '15rem' }}>
                <Card.Img variant="top" src="../src/assets/coffee.jpg" />
                <Card.Body className="card-body">
                <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                 <Card.Text>
                 Our Coffee tastes best in the town.
                 </Card.Text>
                 <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
               </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title className="cardTitle">Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="custom-card" style={{ width: '15rem' }}>
              <Card.Img variant="top" src="../src/assets/coffee.jpg" />
              <Card.Body>
              <Card.Title>Lungo Coffee</Card.Title>
                <Card.Text>
                Our Coffee tastes best in the town.
                </Card.Text>
                <div className="priceMain">
                 <div className="price">Rs.150</div>
                 <button className="ordernow">Order Now</button>
                 </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Carousel.Item>
      {/* Add additional Carousel.Items for more slides */}
    </Carousel>


  </div>
   
  );
}

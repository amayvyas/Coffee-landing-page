import "../items/items.css"
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import dummyData from "../../../dummydata";


export default function Items() {


  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
      const start = index * size;
      return arr.slice(start, start + size);
    });
  };

  // Chunk the dummy data array into groups of four items
  const chunkedData = chunkArray(dummyData, 4);
  return (
    
<>
<Carousel indicators={false} prevIcon={<BsArrowLeft className="custom-carousel-control" />} nextIcon={<BsArrowRight className="custom-carousel-control" />}>
        {chunkedData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <span className="coffee">OUR SPECIAL COFFEE</span>
            <Row className="row">
              {chunk.map((item, itemIndex) => (
                <Col key={itemIndex}>
                  <Card className="custom-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="../src/assets/coffee.jpg" />
                    <Card.Body className="card-body">
                      <Card.Title className="cardTitle">{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <div className="priceMain">
                        <div className="price">Rs.150</div>
                        <button className="ordernow">Order Now</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>


      <Carousel indicators={false} prevIcon={<BsArrowLeft className="custom-carousel-control" />} nextIcon={<BsArrowRight className="custom-carousel-control" />}>
        {chunkedData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <span className="coffee">OUR SPECIAL COFFEE</span>
            <Row className="row">
              {chunk.map((item, itemIndex) => (
                <Col key={itemIndex}>
                  <Card className="custom-card" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="../src/assets/coffee.jpg" />
                    <Card.Body className="card-body">
                      <Card.Title className="cardTitle">{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <div className="priceMain">
                        <div className="price">Rs.150</div>
                        <button className="ordernow">Order Now</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
</>
  
    


   
  );
}

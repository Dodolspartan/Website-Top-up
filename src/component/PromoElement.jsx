import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "../assets/img/slide-1.jpg";

function PromoElement() {
  return (
    <div className="promo-items-element">
      <div className="d-flex justify-content-between">
        <h3>Promo & News </h3>
        <p className="pt-2">
          <a href="#">Lihat Semua</a>
        </p>
      </div>
      <hr />
      <div className="card-element-news">
        <Row>
          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Cara Beli atau Isi Saldo OVO, GoPay </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "19rem" }}>
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title>Cara Beli atau Isi Saldo OVO, GoPay </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PromoElement;

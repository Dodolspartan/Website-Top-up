import {Col, Row, } from "react-bootstrap";

import mage1 from "../assets/img/Component 1.png";
import mage2 from "../assets/img/Component 2.png";
import mage3 from "../assets/img/Component 3.png";
import mage4 from "../assets/img/Component 4.png";
import mage5 from "../assets/img/Component 5.png";
import mage6 from "../assets/img/Component 6.png";


function CardPembayaran() {
  return (
    <div className='items-element-pembayaran'>
        <h3 className="text-center">Pembayaran Tersedia</h3>
        <div className="card-items-element">
            <Row className="p-5">
                <Col><img src={mage1}/></Col>
                <Col><img src={mage2}/></Col>
                <Col><img src={mage3}/></Col>
                <Col><img src={mage4}/></Col>
                <Col><img src={mage5}/></Col>
                <Col><img src={mage6}/></Col>
                <Col><img src={mage5}/></Col>
                <Col><img src={mage6}/></Col>
            </Row>
        </div>
    </div>
  )
}

export default CardPembayaran;
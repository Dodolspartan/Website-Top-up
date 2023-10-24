import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';


// Import Icons Items
import { BsHouseFill } from "react-icons/bs";
import { BsFillClipboardFill } from "react-icons/bs";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

function NavFooter() {
  return (
    <div className="navfooter w-50">
      <Navbar fixed="bottom" className="w-50 d-flex" activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/home" className="text-center">
          <div><BsHouseFill/></div>
          Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="text-center">
          <div><BsFillClipboardFill/></div>
          Riwayat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="text-center">
          <div><BsCreditCard2BackFill/></div> 
          Deposit</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="text-center">
          <div><BsPersonCircle/></div> 
          Profile</Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default NavFooter;

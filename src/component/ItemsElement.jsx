import { useState } from "react";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function ItemsElement() {
  const [key, setKey] = useState("home");
  return (
    <div className="items-element">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3">
        <Tab eventKey="TopUp Game" title="TopUp Game">
          TopUp Game
        </Tab>
        <Tab eventKey="Join Reseller" title="Join Reseller">
          Join Reseller
        </Tab>
        <Tab eventKey="Voucher Game" title="Voucher Game">
          Voucher Game
        </Tab>
        <Tab eventKey="Pulsa" title="Pulsa">
          Pulsa
        </Tab>
        <Tab eventKey="Paket Data" title="Paket Data">
          Paket Data
        </Tab>
        <Tab eventKey="Social Media" title="Social Media">
          Social Media
        </Tab>
      </Tabs>
    </div>
  );
}

export default ItemsElement;

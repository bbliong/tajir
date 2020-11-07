import React from "react";

import Button from "element/Button";
import Logo from "assets/images/Logo.svg";


export default function IconText() {
  return (
    <div className="navbar-brand">
      <Button className="brand-text-icon font-weight-bold" href="" type="link">
          <span className=""><img style={{ width: 70 }} alt="icon" src={Logo}></img></span>
      </Button>
    </div>
  );
}

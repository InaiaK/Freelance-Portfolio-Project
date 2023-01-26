import React from "react";
import "./Footer.css";
import { VscAccount } from "react-icons/vsc";

//functional component.
function Footer() {
  return (
    <div className="footer-container">
       <p>
         &copy;
        {new Date().getFullYear()} Inaia Martin| All right reserved | Privacy
      </p>
    </div>
  );
}

export default Footer;

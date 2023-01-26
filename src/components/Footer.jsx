import React from "react";
import "./Footer.css";


//functional component.
function Footer() {
  return (
    <div className="footer-container">
       <p>
         &copy;
        {new Date().getFullYear()} Inaia Martin - Software Engineer| All right reserved | Privacy
      </p>
    </div>
  );
}

export default Footer;

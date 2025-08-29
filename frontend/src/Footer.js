// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import "./App.css";

// function Footer() {
//   return (
//     <footer className="site-footer">
//       <div className="footer-links">
//         <a href="#">Help</a>
//         <a href="#">Shipping</a>
//         <a href="#">Refund</a>
//         <a href="#">FAQ</a>
//         <a href="#">Accessibility</a>
//         <a href="#">Contact Us</a>
//       </div>

//       <div className="footer-contact">
//         <p>+123 4567 890</p>
//         <p>shop@shema.com</p>
//         <p>Addis Ababa, Ethiopia</p>
//       </div>

//       <div className="footer-social">
//         <span>Stay Connected:</span>
//         <FaFacebook className="social-icon" />
//         <FaInstagram className="social-icon" />
//         <FaTwitter className="social-icon" />
//         <FaLinkedin className="social-icon" />
//       </div>

//       <div className="copyright">
//         ©2025 varshini Ltd. | Terms & Condition | Privacy Policy
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./App.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <Link to="/help">Help</Link>
        <Link to="/shipping">Shipping</Link>
        <Link to="/refund">Refund</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/accessibility">Accessibility</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="footer-contact">
        <p>+123 4567 890</p>
        <p>shop@shema.com</p>
        <p>Addis Ababa, Ethiopia</p>
      </div>

      <div className="footer-social">
        <span>Stay Connected:</span>
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaLinkedin className="social-icon" />
      </div>

      <div className="copyright">
        ©2025 varshini Ltd. | Terms & Condition | Privacy Policy
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="copyright">Copyright © 2026 Puneri Paltan</div>
      <div className="footericons">
        <div className="facebook icc">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="twitter icc">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="instagram icc">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="youtube icc">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className="footerlogo">
        <img src="../public/dl_logo.png" alt="" />
      </div>
    </>
  );
};

export default Footer
import React from "react";
import "../css/footer.css";
import { GrContact } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
//   const email = "ayushsinghsrikoti@gmail.com";

  return (
    <>
      <div className="footer-container">
        <div className="upper-f">
          <div>
            <b>
              Got Something to Discuss? <GrContact />
            </b>
          </div>
          <div>
            <i>Feel free to get in touch</i>
          </div>
        </div>
        <div className="lower-f">
          <div className="contact-icons">
            <a href="https://www.linkedin.com/in/ayush-singh-srikoti-7559a8247" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div className="contact-icons">
            <a href="https://github.com/AyushSinghSrikoti" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="contact-icons">
            <a href="mailto:ayushsinghsrikoti@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Shape1Img from "../../../public/images/v1/shape1.png";
import Star2Img from "../../../public/images/v1/star2.png";
function FooterContent() {
  return (
    <div className="aximo-default-content light position-relative">
      <h2>
        Let's build{" "}
        <span className="aximo-title-animation">
          something together
          <span className="aximo-title-icon">
            <Image src={Star2Img} alt="Star2Img" />
          </span>
        </span>
      </h2>
      <p>
        Got a project in mind? We're all ears. Drop us a line and let's figure
        out how to make it happen.
      </p>
      <div className="aximo-info-wrap">
        <div className="aximo-info">
          <ul>
            <li>Give us a call:</li>
            <li>
              <a href="tel:2263419961">226 341 99 61</a>
            </li>
          </ul>
        </div>
        <div className="aximo-info">
          <ul>
            <li>Send us an email:</li>
            <li>
              <a href="mailto:hello@ac95.ca">hello@ac95.ca</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="aximo-social-icon social-large">
        <ul>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank">
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="icon-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="aximo-hero-shape aximo-footer-shape">
        <Image src={Shape1Img} alt="Shape1Img" />
      </div>
    </div>
  );
}

export default FooterContent;

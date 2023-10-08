// import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
// import "./footer.scss"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="left col-lg-2">
            <div className="logo">
              <img src="/assets/logonew.png" alt="" />
            </div>
          </div>
          <div className="center  col-lg-2">
            <ul>
              <li>Home</li>
              <li>Astromical Event</li>
              <li>Ecological Event</li>
              <li>Chatbot</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="list col-lg-2">
            <ul>
              <li>Humans in Space</li>
              <li>The Solar System</li>
              <li>Earth</li>
              <li>Science</li>
              <li>Contact NASA</li>
            </ul>
          </div>
          <div className="dist col-lg-2">
            <ul>
              <li>Technology</li>
              <li>Multimedia</li>
              <li>Missions</li>
              <li>About NASA</li>
              <li>For Media</li>
            </ul>
          </div>
          <div className="right  col-lg-2">
            <ul>
              <li>About us</li>
              <li>Location</li>
              <li>Categories</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="icon  col-lg-2">
            <div className="cos">
              <BsLinkedin />
              <BsInstagram />
              <BsWhatsapp />
            </div>

          </div>
        </div>
       
      </div>
    </footer>
  )
}

export default Footer
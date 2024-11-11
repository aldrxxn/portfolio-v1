// import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapperNavbar">
        <div className="social">
          <a href="https://www.linkedin.com/in/andriantambunan/" target="blank">
            <img src="/LinkedIn.svg" alt="" />
          </a>
          <a href="https://github.com/aldrxxn" target="blank">
            <img src="/GitHub.svg" alt="" />
          </a>
          <a href="#">
            <img src="/X.svg" alt="" />
          </a>
          <a href="#">
            <img src="/Medium.svg" alt="" />
          </a>
        </div>
        <div className="resume">
          <a
            href="https://drive.google.com/file/d/1SAKcjaBVxZIOBQTSkbdXOXFiwatvyUO7/view?usp=sharing"
            target="blank"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

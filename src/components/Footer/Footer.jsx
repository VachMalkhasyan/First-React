import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      
        <span></span>
        <div className="footer_link_box">
          <Link to={"/basket"}></Link>
          <Link to={"/favorite"}></Link>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Shoping-card-react"
            rel="noreferrer"
          >
          </a>
        </div>
    </footer>
  );
}

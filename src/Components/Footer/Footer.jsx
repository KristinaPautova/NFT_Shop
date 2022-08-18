import React from "react";
import ins3 from "../../image/logo.png";
import svg1 from "../../image/Group27.svg";
import svg3 from "../../image/Group29.svg";
import svg4 from "../../image/Group30.svg";


import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-list">
          <div className="footer-list-item">
            <div className="footer-list-item-number">
              <div className="footer-text-nf">
                <img className="img-binance" src={ins3} alt="binance1" />
                <span className="text-nft">NFT</span>
              </div>
            </div>
            <div className="footer-list-item-number">
              <span>About Us</span>
              <a href="#">About Binance</a>
              <a href="#">Careers</a>
              <a href="#">Community</a>
              <a href="#">Binance Blog</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-list-item-number">
              <span>Products</span>
              <a href="#">Exchange</a>
              <a href="#">Binance Charity Foundations</a>
              <a href="#">Academy</a>
            </div>
            <div className="footer-list-item-number">
              <span>Service</span>
              <a href="#">Buy Cripto</a>
            </div>
            <div className="footer-list-item-number">
              <span>Support</span>
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Giv us a feedback</a>
              <a href="#">What Is NFT</a>
            </div>
            <div className="footer-list-item-number">
              <span>Community</span>
              <div className="footer-list-down-logo">
                <a href="https://www.instagram.com/">
                  <img src={svg1} alt="instagram" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src={svg4} alt="youtube" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={svg3} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-color">
            <div className="footer-list-down">
              <span>Binance © 2022</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

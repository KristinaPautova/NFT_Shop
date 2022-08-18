import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="first-tx">
        <h1>Binance NFT</h1>
        <span>Mission to lead the future of metaverse</span>
        <div className='content__top'>
        <div className="video-binance">
          <iframe
              style={{borderRadius: "30px"}}
            width="568"
            height="320"
            src="https://www.youtube.com/embed/eZGDvWyreOY"
            title="What is Binance NFT Marketplace & How to Use It | #Binance Official Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="second-tx">
          <div>
          <h5>Events</h5>
          <span>
            Exclusive premium events, from exhibitions to unique collectibles.
          </span>
          </div>
          <div>
          <h5>Marketplace</h5>
          <span>Mint, purchase and bid the world's premier NFTs.</span>
            </div>
          <div>
          <h5>Mystery Box Playground</h5>
          <span>
            A chance to win a variety of common, rare and unique NFTs.
          </span>
          </div>
          <div>
            <button className="first-butt">Full User Guidance</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

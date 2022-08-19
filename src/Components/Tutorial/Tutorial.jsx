import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
  return (
    <div className="second-content">
      <h1>Tutorial</h1>
      <div className="second-txx">
        <div className="video-tutorial">
          <iframe
            style={{ borderRadius: "15px" }}
            width="630"
            height="300"
            src="https://www.youtube.com/embed/l3xgx2Z_1Is"
            title="Binance NFT Tutorial 2022 | Binance NFT Guide"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-r">
          <h2 className="text-w">Introducing the Binance NFT Marketplace</h2>
          <span>
            The Binance NFT Marketplace is a platform for trading a variety of
            digital artworks and collectibles. Powered by Binance’s blockchain
            infrastructure and community, the Binance NFT Marketplace provides
            high liquidity for users who want to create, buy, and sell NFTs.
          </span>
        </div>
      </div>
      <h2 className="htwo">NFT Basics</h2>
      <div className="the-content">
        <img
          width={282}
          height={160}
          style={{ borderRadius: "8px" }}
          src="https://public.bnbstatic.com/image/cms/playlist202106/60831a40eea854aac37d39117ed9bd27.png"
          alt="phot1"
        />
        <span className="tx-io">
          What Are Collectibles and Non-fungible Tokens (NFTs)
        </span>
        <div className="the-cont">
          <img
            width={282}
            height={160}
            style={{ borderRadius: "8px" }}
            src="https://public.bnbstatic.com/image/cms/playlist202106/7bc1756fa9a9aba30af5c50bd620cc98.png"
            alt="phot2"
          />
          <span className="tx-i">7 Things You Should Know About NFTs</span>
        </div>
      </div>
      <div className="ul-text">
        <h2>Frequently Asked Questions</h2>
        <ul className="ui-dw">
          <li>Introducing Binance NFT Marketplace</li>
          <li>How to Get Started with Binance NFT Marketplace</li>
          <li>How to Create Your NFT on Binance NFT Marketplace</li>
          <li>How to Deposit NFT on Binance</li>
          <li>How to Find NFT Contract Address</li>
          <li>NFT Deposits - Approved Contract Addresses</li>
          <li>How to Claim The Weeknd Souvenir NFT</li>
          <li>Binance NFT Minting Rules</li>
          <li>Binance NFT Sales Settlement Postponement Policy for Standard NFT
            Collections
          </li>
          <li>How to Report Violations on Binance NFT</li>
          <li>How to Purchase NFTs Using Binance Pay on Binance NFT Marketplace
          </li>
          <li>How to Access Binance NFT Mini App on Binance App</li>
          <li>Why Do I Need to Complete Face Verification Again When Withdrawing
            NFT?
          </li>
          <li>What are the NFT Transaction Fees on Binance</li>
          <li>NFT Deposits - Approved NFT Avatar Contract Addresses</li>
          <li>Binance NFT Subscription Mechanism Winner Selection Algorithm
          </li>
          <li>What Is Binance NFT Subscription Mechanism and How to Participate
          </li>
          <li>How to Withdraw NFT from Binance</li>
        </ul>
      </div>
    </div>
  );
};

export default Tutorial;

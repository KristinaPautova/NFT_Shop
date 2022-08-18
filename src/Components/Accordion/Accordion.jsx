import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordon.css'

export default function SimpleAccordion() {
    return (
        <div>
            <h2 style={{marginLeft:"140px",marginTop:'100px'}}>FAQ</h2>
        <div className='accordion1'>
            <div className='accordion__left' >
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What is a non-fungible token (NFT)?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{color: "rgb(112, 122, 138)"}}>
                        A non-fungible token (NFT) is a cryptographic token that represents a unique asset.
                        They function as verifiable proofs of authenticity and ownership within a blockchain network.
                        NFTs are not interchangeable with each other and introduce scarcity to the digital world.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How do I buy an NFT?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{color: "rgb(112, 122, 138)"}}>
                        For NFTs with a fixed price, click the [Buy] button on the product
                        page and complete the transaction. Once the transaction is successful,
                        we will transfer the NFT to your wallet and the seller will receive the funds.
                        For NFTs on auction, click [Make an offer], place your bid price, and confirm the offer.
                        In the event of someone placing a higher bid than you, your funds will be unlocked.
                        To join the auction again, you’ll have to place a new bid.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div className='accordion__right'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is Binance NFT Marketplace?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{color: "rgb(112, 122, 138)"}}>
                            Binance NFT Marketplace brings together artists, creators, and crypto
                            enthusiasts on a single platform to create and trade top NFTs.
                            The platform features 3 product lines:
                            <ul>
                            <li>Events: Buy premium and exclusive NFTs created by global leading artists</li>
                                <li>Marketplace: Mint, purchase, and bid on NFTs from creators around the world</li>
                                <li>Mystery Box: Stand a chance to win rare NFTs in a box full of surprises</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>How do I sell an NFT?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{color: "rgb(112, 122, 138)"}}>
                            To list an NFT for sale, our team will first of all approve the content to make sure it’s
                            appropriate for listing. This process usually takes 4-8 hours. Upon successful approval,
                            your NFT will list immediately on the Marketplace as either an auction or fixed price sale,
                            according to your preference. Alternatively, you can also choose to list your NFT at a fixed
                            time (with a minimum of 12 hours after approval).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
        </div>
    );
}

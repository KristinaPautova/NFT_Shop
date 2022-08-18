import React from 'react';
import './Billboard.css'
import { Swiper, SwiperSlide } from "swiper/react";
import game1 from '../../image/game.png'
import game2 from '../../image/5c34371b3cec4c2c9c2bcfb57e47b2ee.gif';
import game3 from '../../image/5f97bb649c8d447ba4fb220ce613f2e6.jpeg';
import game5 from '../../image/0586ebc05fba44b784984a1e75352139.png';
import game6 from '../../image/fd76693e12cb4d3ba537fca37ad8d4c5.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";


const Billboard = () => {
    return (
        <div className='back'>
            <div className='home'></div>
            <div className='home__main'>
                <div className='home__main_left'>
                    <h2>Unleash your creativity</h2>
                    <div className="left__text">With Binance NFT’s beginner-friendly minting feature,
                        verified Binance users can create their own NFTs in just a
                        few clicks! Start minting your own NFTs with Binance NFT today!</div>
                    <button>What are NFT</button>
                </div>
                <div className='home__main_right'>
                    <Swiper
                        effect={"flip"}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img style={{borderRadius:"15px"}} src={game2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{borderRadius:"15px"}} src={game1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{borderRadius:"15px"}} src={game3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{borderRadius:"15px"}} src={game5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img style={{borderRadius:"15px"}} src={game6} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Billboard;
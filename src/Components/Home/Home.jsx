import React from 'react';
import './Home.css'
import Billboard from "../Billboard/Billboard";
import NftList from "../NFTList/NFTList";
import Content from "../Content/Content";
import Accordion from "../Accordion/Accordion"


const Home = () => {
    return (
<>
    <Billboard/>
    <Content/>
    <Accordion/>
</>
    );
};

export default Home;
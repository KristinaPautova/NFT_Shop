import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../src/Components/Home/Home";
import AddNFT from "./Components/AddNFT/AddNFT";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import NFTList from "./Components/NFTList/NFTList";

const MainRouts = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/addNft' element={<AddNFT/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/marketPlace' element={<NFTList/>}/>
        </Routes>
    );
};

export default MainRouts;
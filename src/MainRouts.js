import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../src/Components/Home/Home";
import AddNFT from "./Components/AddNFT/AddNFT";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import NFTList from "./Components/NFTList/NFTList";
import NftDetails from "./Components/NFTDetails/NftDetails";
import EditProduct from "./Components/EditProduct/EditProduct";
import Favorites from "./Components/Favorites/Favorites";

const MainRouts = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/addNft' element={<AddNFT/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='/marketPlace' element={<NFTList/>}/>
            <Route path='/nftDetails/:id' element={<NftDetails/>}/>
            <Route path='/edit/:id' element={<EditProduct/>}/>
        </Routes>
    );
};

export default MainRouts;
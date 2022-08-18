import React, {useContext, useEffect, useState} from 'react';
import NftCard from "../NftCard/NftCard";
import "./NFTList.css"
import {nftContext} from "../../context/NFTContextProvider";
import Filter from "../Filter/Filter";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import LiveSearch from "../LiveSearch/LiveSearch";

const NftList = () => {

    const { getProduct, productObj, pageTotalCount } = useContext(nftContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const [type, setType] = useState(searchParams.get("category") || "all");

    const [price, setPrice] = useState([0, 1000]);


    const [page, setPage] = useState(1);

    const paramsWithType = () => {
        return {
            category: type,
            q: searchParams.get("q") || '',
            price_gte: price[0],
            price_lte: price[1],
            _page: page,
            _limit: 6,
        };
    };

    const paramsNoType = () => {
        return {
            q: searchParams.get("q") || '',
            price_gte: price[0],
            price_lte: price[1],
            _page: page,
            _limit: 6,
        };
    };

    useEffect(() => {
        getProduct();
        if (searchParams.get("category")) {
            setSearchParams(paramsWithType());
        } else {
            setSearchParams(paramsNoType());
        }
    }, []);

    useEffect(() => {
        getProduct();
        if (type === "all") {
            setSearchParams(paramsNoType());
        } else {
            setSearchParams(paramsWithType());
        }
    }, [searchParams, type, price, page]);

    return (
        <div className='main_box'>
            <div className='search__box__bac'>
               <div className='search__box'>
                 <LiveSearch/>
               </div>
            </div>
            <div className="filter">
                <Filter type={type} setType={setType} price={price} setPrice={setPrice}/>
            </div>
            <div className='container'>
                {productObj.map((item) => <NftCard product={item} key={item.id}/>)}
            </div>
            <div style={{ margin: "50px auto", textAlign: "center" }}>
                <Pagination
                    count={+pageTotalCount}
                    variant="outlined"
                    shape="rounded"
                    page={+page}
                    onChange={(e, pageVal) => {
                        setPage(pageVal);
                    }}
                />
            </div>
        </div>
    );
};

export default NftList;
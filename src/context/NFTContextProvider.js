import React, {createContext, useReducer} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

const API = "http://localhost:8000/nft";

export const nftContext = createContext();


const INIT_STATE = {
    product: [],
    productDetails: null,
    pageTotalCount: 1,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case "GET_PRODUCT":
            return {...state, product: action.payload.data, pageTotalCount: Math.ceil(action.payload.headers["x-total-count"]/6)};
        case "GET_ONE_PRODUCT":
            return {...state, productDetails: action.payload};
        default:
            return state
    }
}

const NftContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const location = useLocation()

    const navigate = useNavigate();



    const addProduct = async (product) => {
        await axios.post(API, product);
    }

    const editNft = async (id, editedProduct) =>{
        await axios.patch(`${API}/${id}`, editedProduct)
    }



    const getProduct = async () => {
        const res = await axios.get(`${API}${location.search}`);
        let action = {
            type: "GET_PRODUCT",
            payload: res,
        };

        dispatch(action);
    }

    //   Хук useLocation возвращает объект location, представляющий текущий URL.
    //   Его можно рассматривать как useState, который возвращает новое местоположение
    //   при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра
    //   новой страницы для инструмента веб-аналитики.



    const getOneProduct = async (id) => {
        const {data} = await axios(`${API}/${id}`);
        dispatch({
            type: "GET_ONE_PRODUCT",
            payload: data,
        })
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`);
        getProduct();
        navigate("/marketPlace");
    };

    const editProduct = async (id, obj) => {
        console.log(obj);
        await axios.patch(`${API}/${id}`, obj);
        getProduct();
        navigate("marketPlace");
    };


    let cloud = {
        editProduct,
        deleteProduct,
        addProduct,
        getProduct,
        editNft,
        getOneProduct,
        productObj: state.product,
        productDetails: state.productDetails,
        pageTotalCount: state.pageTotalCount,
    }

    return (
        <nftContext.Provider value={cloud}>
            {children}
        </nftContext.Provider>
    );
};

export default NftContextProvider;
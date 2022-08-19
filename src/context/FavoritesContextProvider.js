import React, {createContext, useReducer} from 'react';
import {calcSumPrice, calcTotalPrice, getCountFavoritesCart} from "../helpers/cartFunctions";

export const favoritesContext = createContext()

let INIT_STATE = {
    cart: {},
    cartLength: getCountFavoritesCart(),
}

const reducer = (prevState = INIT_STATE,action) => {
    switch (action.type) {
        case "GET_FAVORITE":
            return {...prevState, cart: action.payload};
        case "CHANGE_FAVORITE_COUNT":
            return {...prevState, cartLength: action.payload};
        default:
            return prevState
    }
}

const FavoritesContextProvider = ({children}) => {


    const [state,dispatch] = useReducer(reducer, INIT_STATE)

    const addProductFavorites = (productItem) => {
        let cart = JSON.parse(localStorage.getItem("favorites"))
        if(!cart){
            cart = {
                products:[],
                totalPrice: 0,
            }
        }

        let newProduct = {
            item: productItem,
            count: 1,
            sumPrice: 0
        }

//хранятся только дубликаты
        let filterCart = cart.products.filter((elem) => {
            return  elem.item.id === productItem.id;
        })

        //Проверка на дубликаты

        if(filterCart.length > 0){
            cart.products = cart.products.filter((elem) => {
                return elem.item.id !== productItem.id
            })
        } else {
            cart.products.push(newProduct);
        }


        newProduct.sumPrice = calcSumPrice(newProduct);
        cart.totalPrice = calcTotalPrice(cart.products)

        localStorage.setItem("favorites", JSON.stringify(cart));

        dispatch({
            type: "CHANGE_FAVORITE_COUNT",
            payload: cart.products.length,
        })

    }


    const getFavorites = () => {
        let cart = JSON.parse(localStorage.getItem("favorites"));
        if(!cart){
            cart = {
                products:[],
                totalPrice: 0,
            }
        }

        dispatch({
            type: "GET_FAVORITE",
            payload: cart,
        })
    }

    const changeFavoritesCount = (id, count) => {
        let cart = JSON.parse(localStorage.getItem("favorites"))
        cart.products = cart.products.map((elem) => {
            if(elem.item.id === id){
                elem.count = count;
                elem.sumPrice = calcSumPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("favorites", JSON.stringify(cart));
        getFavorites();
    }

    const deleteCartProduct = (id) => {
        let cart = JSON.parse(localStorage.getItem("favorites"));
        cart.products = cart.products.filter((elem) => {
            return   elem.item.id !== id
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem("favorites", JSON.stringify(cart));
        dispatch({
            type:"CHANGE_FAVORITE_COUNT",
            payload: cart.products.length,
        });
        getFavorites();
    }

    // ================

    let cloud = {
        addProductFavorites,
        getFavorites,
        favorites: state.cart,
        favoritesLength: state.cartLength,
        changeFavoritesCount,
        deleteCartProduct,
    }

    return (
        <favoritesContext.Provider value={cloud}>
            {children}
        </favoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
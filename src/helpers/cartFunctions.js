export function getCountProductsCart() {
    let cart = JSON.parse(localStorage.getItem("nft"));
    return cart ? cart.products.length : 0;
}

export function getCountFavoritesCart() {
    let cart = JSON.parse(localStorage.getItem("favorites"));
    return cart ? cart.products.length : 0;
}

export function calcSumPrice(product){
    return product.count * product.item.price
}

export function calcTotalPrice(products) {
    let totalPrice = 0;
    products.forEach((item) => {
        totalPrice += item.sumPrice - 1;
    })
    return totalPrice;
}

export function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("nft"));
    if (!cart) {
        cart = {
            products: [],
            totalPrice: 0,
        };
    }
    let newCart = cart.products.filter((elem) => elem.item.id === id);
    return newCart.length > 0 ? true : false;
}

export function checkProductInFavorites(id) {
    let cart = JSON.parse(localStorage.getItem("favorites"));
    if (!cart) {
        cart = {
            products: [],
            totalPrice: 0,
        };
    }
    let newCart = cart.products.filter((elem) => elem.item.id === id);
    return newCart.length > 0 ? true : false;
}
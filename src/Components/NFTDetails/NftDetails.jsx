import React, {useContext, useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import box from '../../image/Rectangle.svg'
import Button from "@mui/material/Button";
// import price1 from '../../image/price1-max-350.svg';
// import price2 from '../../image/price1-max-350 copy.svg';
// import price3 from '../../image/Bitmap.svg'
import './NftDetails.css'
import "swiper/css";
import {nftContext} from "../../context/NFTContextProvider";
import CardMedia from "@mui/material/CardMedia";
import icon1 from "../../image/busd.svg";
import {checkProductInCart} from "../../helpers/cartFunctions";
import {cartContext} from "../../context/CartContextProvider";
import {admin, authContext} from "../../context/AuthContext";


const NftDetails = () => {
    const {getOneProduct, productDetails,deleteProduct} = useContext(nftContext);
    const { addProductCart } = useContext(cartContext);

    const {user} = useContext(authContext)

    console.log(user.email)
    let{ id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getOneProduct(id)
    },[id]);



    // function handleDiscount() {
    //
    // }

    return (
        <div>
            {productDetails ? (
                <div className='det'>
                    <div className='details'>
                        <div className='details__left'>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                src={productDetails.img}
                            />
                        </div>
                        <div className='details__right'>
                            <Link to='/marketPlace'>◀Назад</Link>
                            <h4>{productDetails.title}</h4>
                            <hr/>
                            <p>Details</p>
                            <div className='details__ul'>
                             <div className='details__info'>
                                 <p>Creator</p>
                                 <h6>{productDetails.creator}</h6>
                             </div>
                                <div className='details__info'>
                                    <p>Owner</p>
                                    <h6>{productDetails.owner}</h6>
                                </div>
                                <div className='details__info'>
                                    <p>Network</p>
                                    <h6>BSC</h6>
                                </div>
                                <div className='details__info'>
                                    <p>Royalty Fee</p>
                                    <h6>10%</h6>
                                </div>
                                <div className='details__info'>
                                    <p>Platform Fee</p>
                                    <h6>1%</h6>
                                </div>
                            </div>
                            <hr/>
                            <div className='price'>
                                <div className='price__left'>
                                    <p>Current Bid</p>
                                </div>
                                <div className='person__price_left'>
                                    <img style={{marginTop:"5px"}}  src={icon1} alt="busd"/>
                                    <div className='person__price_info_left'>
                                        <span>{productDetails.price} BUSD</span>
                                        <div>≈ $ {productDetails.price - 1} </div>
                                    </div>
                                </div>
                            </div>
                            <div className='home__main_left'>
                            <Button                 className={`btn ${
                                checkProductInCart(productDetails.id)
                                    ? "btn-danger"
                                    : "btn-yellow"
                            }`}
                                                    onClick={() => addProductCart(productDetails)} style={{ width: "100%"}} variant="contained" disableElevation>
                                Add to Cart
                            </Button>
                            </div>
                            {admin === user.email && (
                                <>
                                <hr/>
                                <div className="right_adminBtn">
                                <button
                                className="btn btn-danger"
                                onClick={() => deleteProduct(productDetails.id)}
                                >
                                Удалить
                                </button>
                                <button
                                className="btn btn-warning"
                                onClick={() => navigate(`/edit/${id}`)}
                                >
                                Редактировать
                                </button>
                                </div>
                                </>
                            )}

                        </div>

                    </div>
                </div>
            ) : <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>}

        </div>
    );
};

export default NftDetails;
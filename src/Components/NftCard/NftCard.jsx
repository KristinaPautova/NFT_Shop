import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import check from '../../image/checkMark.png'
import icon1 from '../../image/busd.svg'
import './NftCard.css'
import {cartContext} from "../../context/CartContextProvider";
import {checkProductInCart} from "../../helpers/cartFunctions";
import {Link} from "react-router-dom";


const NftCard = ({product}) => {
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { addProductCart } = useContext(cartContext);
    return (
        <div className='card'>
                      <Card key='45' sx={{ maxWidth: 300 }}>
                          <Link to='/'>
                          <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="auto"
                                    src={product.img}
                                />
                          </Link>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <div className="text__person">
                                        <div className="person__gold">
                                            <span>{product.creator}</span>
                                             <img src={check} alt="check"/>
                                        </div>
                                        <div className="bsc">BSC</div>
                                    </div>
                                    <div className="person__price">
                                        <span>Highest Bid</span>
                                        <div className='person__price_left'>
                                            <img src={icon1} alt="busd"/>
                                            <div className='person__price_down'>
                                                <span>{product.price} BUSD</span>
                                                <div>≈ $ {product.price - 1} </div>
                                            </div>

                                        </div>
                                    </div>
                                </CardContent>
                                <CardActions style={{display:"flex", justifyContent:"space-between"}} >
                                    <Button onClick={() => addProductCart(product)} size="small"
                                            color={checkProductInCart(product.id) ? "success" : "primary"}
                                    >Add to cart</Button>
                                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                                </CardActions>
                            </Card>
        </div>
    );
};

export default NftCard;
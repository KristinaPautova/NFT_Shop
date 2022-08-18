import React, {useContext, useEffect, useState} from 'react';
import {cartContext} from "../../context/CartContextProvider";
import './Cart.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import img5 from '../../image/content_giphy__2_.gif'
import  {nftContext} from "../../context/NFTContextProvider";
import {useNavigate} from "react-router-dom";
import showToast from "../../helpers/ShowToast";

const Cart = () => {

    const [mainBlock,setMainBlock] = useState(false)
    const [cardNum, setCardNum] = useState('');
    const [cvc, setCVC] = useState('');
    const [owner, setOwner] = useState('');
    let navigate = useNavigate();

    const {productObj, getProduct,editNft} = useContext(nftContext)

    const {cart, getCarts, changeProductCount, deleteCartProduct} = useContext(cartContext)

    useEffect(() =>{
        getProduct()
        // console.log(productObj)
    },[])


    // console.log(cart)
    useEffect(() => {
        getCarts()
    },[])

    function handleClick(){
        if ( !cardNum || !cvc || !owner ) {
            showToast('Заполните поля', 'error')
            return;
        }
        productObj.map((item) => {
            cart.products.map((elem) =>{
                if(elem.item.id === item.id){
                    let obj = {
                        owner
                    }
                    editNft(item.id,obj);
                    deleteCartProduct(elem.item.id)
                }

            })
        })
        setCardNum('')
        setCVC('');
        setOwner('')
        showToast('Товар приобретен', 'success');
            setMainBlock(false)
            navigate('/')

    }


    return (




        <div className="cart">
            {cart.products ? (
                <div className="container">
            <table>
            <thead>
            <tr>
                <th>NFT</th>
                <th>Название</th>
                <th>Владелец</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма продукта</th>
            </tr>
            </thead>
            <tbody className="task-list">
            {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                    <td>
                        <img width={40} src={elem.item.img} alt={elem.item.title}/>
                    </td>
                    <td>{elem.item.title}</td>
                    <td>{elem.item.creator}</td>
                    <td>{elem.item.price}BUSD</td>
                    <td>
                        <input min = {1} type="number" value={elem.count} onChange={(e) =>
                            changeProductCount(elem.item.id, e.target.value )}/>
                    </td>
                    <td>{elem.sumPrice}BUSD</td>
                    <td>
                        <button onClick={() => deleteCartProduct(elem.item.id)}>Удалить</button>
                    </td>
                </tr>
            ))}
             </tbody>
            </table>
            <h4>Общая сумма: {cart.totalPrice}BUSD</h4>
            <button className='table__button' onClick={()=> setMainBlock(true)}>Оформить заказ</button>
                </div>
                ): <h2>...Loading</h2> }

            {mainBlock && (
                <div className="main-modal">
                    <div className="inner-modal">
                        <div className="close">
                            <Button onClick={() => setMainBlock(false)} variant="contained" className="btn-closer">X</Button>
                        </div>
                        <div className='cl-input'>
                            <img width={300}  src={img5} alt="cart"/>
                        <TextField sx={{ width: 300 }}
                                   id="outlined-basic" label="Owner" variant="outlined"
                                   value={owner}
                                   onChange={(e) => setOwner(e.target.value)}
                        />
                        <TextField sx={{ width: 300 }}
                                   type="number"
                                   id="outlined-basic" label="Card number" variant="outlined"
                                   value={cardNum}
                                   onChange={(e) => setCardNum(e.target.value)}
                        />
                        <TextField sx={{ width: 300 }}
                                   type='number'
                                   id="outlined-basic" label="CVC" variant="outlined"
                                   value={cvc}
                                   onChange={(e) => setCVC(e.target.value)}
                        />
                        <Button onClick={handleClick} variant="contained" disableElevation>
                            Add NFT
                        </Button>
                        </div>
                    </div>
                </div>
            )
            }

        </div>
    );
};

export default Cart;
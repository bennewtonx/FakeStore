import React, { useContext } from 'react';
import Product_Detail from '../../components/ProductDetails/Product_Detail';
import { CartContext } from '../../contexts/CartContext';
import './Cart.css';
import CartItem from './../../components/CartItem/CartItem';

function Cart({}) {
    const { cart } = useContext(CartContext);

    return (
        <div className='cart-container'>
            <div className='cart-box'>
            <div className='cart-titles'>
                <div className='cart-item'>
                    <p style={{marginRight: 150}}>Item</p>
                </div>
                <div className='cart-info'>
                    <p style={{marginLeft: 180}}>Price</p>
                    <p style={{marginLeft: 30}}>Quantity</p>
                    <p style={{marginLeft: 20}}>Remove</p>
                </div>
                </div>
                <div className='cart-item-container'>
                {cart.length > 0 ? (
                    cart.map(item => <CartItem key={item.id} product={item} />)
                ) : (
                    <p>No favorites selected yet</p>
                )}
            </div>
        </div>
        </div>
    );
}

export default Cart;

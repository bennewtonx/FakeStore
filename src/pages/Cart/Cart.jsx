import React, { useContext } from 'react';
import Product_Detail from '../../components/ProductDetails/Product_Detail';
import { CartContext } from '../../contexts/CartContext';
import './Cart.css';
import CartItem from './../../components/CartItem/CartItem';
import Modal from 'react-modal';

function Cart({}) {
    const {cart} = useContext(CartContext);

    //add up all money in cart
    const getTotal = () =>{
        let total = 0;
        for (let i = 0; i < cart.length; i++){
          total += cart[i].price;
        }
        return total;
       }

       Modal.setAppElement(document.getElementById('root'));
       const [isOpen, setIsOpen] = React.useState(false)

       const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '20%',
          bottom: '1%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          
        },
        overlay:{
          backgroundColor: "rgba(1,0,0,0.5)"
      
        }
      };

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
                    <p>Your cart is empty</p>
                )}
            </div>
            <div className='cart-total'>
            <h2>Total: £{getTotal()}</h2>
            <button onClick={()=>setIsOpen(true)}>Checkout</button>

            <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <div className='modal-container'>
        <div className='modal-order-confirmation'>
        <h2>Your order was successful!</h2>
        </div>
        <div className='modal-text'>
        <h2>Check your email for the order confirmation. Thank you 
            for shopping with Fake Store!</h2>
        </div>
        <button className='modal-close-btn' onClick={()=>setIsOpen(false)}>Close</button>
        </div>
      </Modal>

            </div>
        </div>
        </div>
    );
}

export default Cart;

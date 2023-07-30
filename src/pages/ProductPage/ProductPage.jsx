import React, { useEffect, useState, useContext } from 'react';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';

function ProductPage() {
  const { cart, addCart, removeCart } = useContext(CartContext);

  const [isCart, setIsCart] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState({}); // Changed initial state to an empty object

  useEffect(() => {
    // Call API to get data
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [productId]); // Include productId as a dependency

  useEffect(() => {
    setIsCart(cart?.find(item => item.id === product.id));
  }, [cart, product]);

  // This useEffect will only run when isCart changes
  useEffect(() => {
    console.log(isCart);
  }, [isCart]);

  return (
    <div className='product-page-container'>
      <div className='specific-product-container'>
        {product.image && <img src={product.image} alt={product.title} />} {/* Added conditional rendering */}
        <div className='product-text-container'>
          {product.title && <h2 style={{ marginBottom: '31px' }}>{product.title}</h2>} {/* Added conditional rendering */}
          {product.price && <h2 style={{ marginBottom: '24px' }}>£{product.price}</h2>} {/* Added conditional rendering */}
          <h3 style={{ marginBottom: '9px' }}>Description</h3>
          {product.description && <p style={{ marginBottom: '24px' }}>{product.description}</p>} {/* Added conditional rendering */}
          {isCart ? (
            <button onClick={() => removeCart(product)}>Remove from cart</button>
          ) : (
            <button onClick={() => addCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

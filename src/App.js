import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import './App.css';
import { commerce } from './lib/commerce';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async(productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setCart(item.cart);
  }

  useEffect(() => {      
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar itemCount={cart.total_items}/>
      <Products products={products} onAddToCart={handleAddToCart}/>
    </div>
  );
}

export default App
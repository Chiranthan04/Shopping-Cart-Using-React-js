import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';


function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'LOREM Watch Black',
      category: 'Watches',
    
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1600',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://images.unsplash.com/photo-1623998022290-a74f8cc36563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhciUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Apple Hearphone',
      category: 'Hearphone',
      seller: 'Apple',
      price: 4000
    },
    {
      url: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'White Drone',
      category: 'Drone',
      seller: 'GTEE Ltd',
      price: 20000
    },
    {
      url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Graphic Card GTX 1080ti',
      category: 'Graphic Card',
      seller: 'Gflix Ltd',
      price: 4500
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> : 
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data.js';
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id 
        ?
          {
            ...item,
            quantity: +quantity
          } 
          : item
      
    ))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    // console.log("what", item)
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className='App'>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books}/>} />
        {/* what is books={books} for? and keep in mind it imports books from data.js */}
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;

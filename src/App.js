import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx';
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

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books}/>} />
        {/* what is books={books} for? and keep in mind it imports books from data.js */}
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        {/* <BookInfo books={books} addToCart={addToCart} cart={cart} /> */}
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />

        
        {/* Add Cart ROUTe */}
        
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

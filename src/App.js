import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data.js';
import BookInfo from './pages/BookInfo.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books}/>} />
        {/* what is books={books} for? and keep in mind it imports books from data.js */}
        <Route path="/books/:id" element={<BookInfo books={books} />} />
        {/* <BookInfo books={books} addToCart={addToCart} cart={cart} /> */}
        <Route path="/cart" element={<BookInfo books={books} />} />

        
        {/* Add Cart ROUTe */}
        
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

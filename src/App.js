import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/books/:id" element={} /> */}
        {/* <BookInfo books={books} addToCart={addToCart} cart={cart} /> */}
        
        
        {/* Add Cart ROUTe */}
        
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

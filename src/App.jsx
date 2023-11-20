import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import ProductItem from './pages/ProductItem';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<ProductItem/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

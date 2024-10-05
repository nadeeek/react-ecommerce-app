import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/login';
import Register from './pages/Register';
import Product from './pages/product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

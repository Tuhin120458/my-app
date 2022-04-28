
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';
import UploadProduct from './components/UploadProduct/UploadProduct';
import OrderList from './components/OrderList/OrderList';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="uploadPd" element={<UploadProduct />} />
        <Route path="orderList" element={<OrderList />} />
        <Route path="login" element={<Login />} />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

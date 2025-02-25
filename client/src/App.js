import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';

function App() {
  return (
    <div className="App">
      <div className='d-flex row w-100'>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/homescreen" exact element={<HomeScreen />} />
            <Route path="/cart" exact element={<CartScreen />} />
            <Route path="/Login" element={<LoginScreen />} />
            <Route path="/Signup" element={<SignupScreen />} />
            <Route path="/orders" element={<OrderScreen />} />
            <Route path="/admin/*" element={<AdminScreen />} />

          </Routes>

        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;

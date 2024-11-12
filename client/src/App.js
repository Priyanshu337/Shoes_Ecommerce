import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignupScreen from './screens/SignupScreen/SignupScreen';

function App() {
  return (
    <div className="App">
      <div className='d-flex row w-100'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/homeScreen" exact element={<HomeScreen />} />
            <Route path="/cart" exact element={<CartScreen />} />
            <Route path="/Login" exact element={<LoginScreen />} />
            <Route path="/Signup" exact element={<SignupScreen />} />

          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;

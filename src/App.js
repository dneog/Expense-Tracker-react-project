import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import Profile from './profile/Profile'
import ForgotPassword from './ForgotPassword';

function App() {
  
  
  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<Auth />} />
     <Route path='/home' element={<Home />} />
     <Route path='/home/:id' element={<Home />} />
     <Route path='/profile' element={<Profile />} />
     <Route path='/password' element={<ForgotPassword />} />
     </Routes>
    </div>
  );
}

export default App;

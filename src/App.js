import './App.css';
import Header from './commponents/Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './commponents/Pages/Home/Home';
import Events from './commponents/Pages/Events/Events';
import Blog from './commponents/Pages/Blog/Blog';
import Donation from './commponents/Pages/Donation/Donation';
import Admin from './commponents/Pages/Admin/Admin';
import Login from './commponents/Pages/Login/Login';
import SignUp from './commponents/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// import './App.scss'
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Knowhow from './components/pages/Knowhow';
import Knowhowdetail from './components/pages/Knowhowdetail';
import Userpage from './components/pages/Userpage';
import Questions from './components/pages/Questions';
import Productdetail from './components/pages/Productdetail';
import Footer from './components/Footer';


function App() {
  return (
    <>
    {/* <Topheader /> */}
   <BrowserRouter>
    <Header />
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="knowhow" element={<Knowhow/>} />
     <Route path="knowhow/:id" element={<Knowhowdetail />} />
     {/* <Route path="user/:id" element={<Userpage />} /> */}
     {/* <Route path="product/:id" element={<Productdetail />} /> */}
     <Route path="questions" element={<Questions />} />
   </Routes>
   <Footer />
   </BrowserRouter>

    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Knowhow from './components/pages/Knowhow';
import Knowhowdetail from './components/pages/Knowhowdetail';

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
   </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;

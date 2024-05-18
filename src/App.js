import React from "react";
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Invest from "./Components/Invest";
import Stories from "./Components/Stories";
import Faq from "./Components/Faq";
import Resources from "./Components/Resources";
import Nomatch from "./Components/Nomatch";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Updatedetails from "./Components/Updatedetails";
import { useSelector } from "react-redux";
// import Forgotpassword from "./Components/Forgotpassword";
import Resetpassword from "./Components/Resetpassword";
import Adminpage from "./Components/Adminpage";
import Checkout from "./Components/Checkout";

function App() {
  const isNavNeeded = useSelector((state) => state.navbar.isNavNeeded)
  return (
    <div className="App">
      {isNavNeeded===true ? <Nav /> : ""}
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/invest' element={<Invest />}></Route>
        <Route path='/stories' element={<Stories />}></Route>
        <Route path='/faqs' element={<Faq />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/updatedetails' element={<Updatedetails />}></Route>
        <Route path='/resetpassword' element={<Resetpassword />}></Route>
        <Route path='/adminpage' element={<Adminpage />}></Route>
        <Route path='/checkoutpage' element={<Checkout />}></Route>
        <Route path='*' element={<Nomatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;

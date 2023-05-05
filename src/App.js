import React from "react";
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Home from "./pages/Home"
import Visualisation from "./pages/visualisation"
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
 return(  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vis" element={<Visualisation/>}/>
        </Routes>
      </BrowserRouter>
 )
 
}

export default App;


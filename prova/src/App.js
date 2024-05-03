import React from 'react'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Footer from './Footer';
import QuemSomos from './QuemSomos';
import Home from './home';
import Contato from './Contato';
import Navbar from './Navbar';

 
function App(){

  return ( 
 <div className="App"> 
 
 <Home />
 <Footer />
</div>
 )
 
 } 
export default App;

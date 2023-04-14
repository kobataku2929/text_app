
import './App.css';
import AddPost from './compo/AddPost';
import Header from './compo/Header';
import Home from './compo/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
   
     <Header/>
     <Routes>
     
     <Route path='/' element={<Home/>}/>
      <Route path='/AddPost' element={<AddPost/>}/> 
      
     
     </Routes> 
      </div>
    </Router>
  );
}

export default App;
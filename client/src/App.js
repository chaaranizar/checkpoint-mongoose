import React  from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Users from './Pages/Users';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/users' element = {<Users/>} />
      <Route path='/add' element = {<Add/>} />
      <Route path='/edit/:_id' element = {<Edit/>} />
      <Route path='/*' element = {<Error/>} />
    </Routes>
     <Footer/>
    </div>
  );
}

export default App;

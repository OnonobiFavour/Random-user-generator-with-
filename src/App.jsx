import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import User from './User';
import Error from './Error';


const App = () => {

 

  return (
    <Router>
      <Routes>

      <Route exact path='/' 
      element={
        <>
        <Nav />
        <Home />
        </>
      }>

      </Route>
      <Route exact path='/user' 
      element={
        <>
        <Nav />
      < User />
        </>
      }>
      </Route>
      <Route exact path='*' element={<Error />}></Route>
      

      </Routes>
    </Router>
  )
}

export default App
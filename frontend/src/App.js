import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Tasks from './components/Tasks';
import Manage from './components/Manage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter><Navigation /><Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/tasks' element={<Tasks />} />
      <Route exact path='/manage' element={<Manage />} />
    </Routes></BrowserRouter>
  );
}

export default App;

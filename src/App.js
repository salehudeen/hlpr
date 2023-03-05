import React from 'react'
import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom';

// components 
import Cards from './components/cards';
import SignUp from './components/signup';
import Login from './components/login';
import Dash from './components/dash';
import Forgotpass from './components/forgotpass';
import CardDetails from './components/cardDetails';
import UserSettings from './components/UserSettings';
import Loader from './components/loader';
import Posts from './components/posts';
import History from './components/history';

function App() {
  return (
      <div>
          <Routes>
              <Route path="/Cards" element={<Cards />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Login />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/forgotpass" element={<Forgotpass />} />
              <Route path="/carddetails" element={<CardDetails />} />
              <Route path="/settings" element={<UserSettings />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/history" element={<History />} />
          </Routes>
      </div>
  )
}

export default App;

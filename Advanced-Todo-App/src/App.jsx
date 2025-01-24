import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/tasks" element={<PrivateRoute component={TaskManager} />} />
</Routes>

    </Router>
  );
}

export default App;
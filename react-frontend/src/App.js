import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddUpdateEmployeeComponent from './components/AddUpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">

          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddUpdateEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddUpdateEmployeeComponent />} />
          </Routes>

        </div>
        <FooterComponent />
      </Router>
    </div >
  );
}

export default App;
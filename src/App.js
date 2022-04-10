import React   from 'react';
import './App.css';
// import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Department from './components/Department';
import {STAFFS, DEPARTMENTS} from './shared/staffs';
import Staff from './components/Staff';
import Staf from './components/Staf';
import Salary from './components/Salary';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <BrowserRouter>
    <div className='menu-bar'>
      <nav>
        <Link to='staffList'><i className="fa-solid fa-users menu-icon"></i>Nhân viên</Link>
        <Link to='department'><i className="fa-solid fa-address-card menu-icon"></i>Phòng ban</Link>
        <Link to='salary'><i className="fa-solid fa-sack-dollar menu-icon"></i>Lương</Link>
      </nav>
    </div>
      <Routes>
        <Route path="/" element={<Staff staff={STAFFS} />} />
        <Route exact path="/staffList" element={<Staff staff={STAFFS} />} />
        <Route exact path='/staff/:staffId' element={<Staf staff={STAFFS} />} />
        <Route exact path='/department' element={<Department department={DEPARTMENTS} />} />
        <Route exact path='/salary' element={<Salary salary={STAFFS} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    );
  }

export default App;

import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";

function AddStaff({id, addNewStaff}) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [doB, setDoB] = useState('');
  const [salaryScale, setSalaryScale] = useState('');
  const [startDate, setStartDate] = useState('');
  const [annualLeave, setAnnualLeave] = useState('');
  const [overTime, setOverTime] = useState('');
  const [department, setDepartment] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newStaff = {
    id: id,
    name: name,
    doB: doB,
    salaryScale: salaryScale,
    startDate: startDate,
    department: department,
    annualLeave: annualLeave,
    overTime: overTime,
    salary: '',
    image: '/assets/images/alberto.png'
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('staffNew', JSON.stringify(newStaff));
  //   console.log(JSON.parse(localStorage.getItem('staffNew')))
  //   let newData = JSON.parse(localStorage.getItem('staffNew'));
  //   // localStorage.getItem('staffNew', JSON.parse(newStaff));
  //   if(localStorage.getItem("staffNew") === null){
  //     setNewStaf(staff => [...staff, newData])
  //   } else {
  //     console.log('has data')
  //   }
  // }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new staff
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addNewStaff}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Họ và tên"
                autoFocus
                value={name}
                onChange={e => {setName(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ngày sinh</Form.Label>
              <Form.Control 
                type="date" 
                rows={3} 
                value={doB}
                onChange={e => {setDoB(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ngày vào công ty</Form.Label>
              <Form.Control 
                type="date" 
                rows={3}
                value={startDate}
                onChange={e => {setStartDate(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phòng ban</Form.Label>
              <Form.Select aria-label="Default select example" value={department}  onChange={e => {setDepartment(e.target.value)}} >
                <option>Open this select menu</option>
                <option value="DEPARTMENTS[0]">Sale</option>
                <option value="DEPARTMENTS[1]">HR</option>
                <option value="DEPARTMENTS[2]">Marketing</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Hệ số lương</Form.Label>
              <Form.Control 
                type="text" 
                rows={3}
                value={salaryScale}
                onChange={e => {setSalaryScale(e.target.value)}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Số ngày nghỉ còn lại</Form.Label>
              <Form.Control 
                type="text" 
                rows={3}
                value={annualLeave}
                onChange={e => {setAnnualLeave(e.target.value)}} 
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Số ngày đã làm thêm</Form.Label>
              <Form.Control 
                type="text"
                rows={3}
                value={overTime}
                onChange={e => {setOverTime(e.target.value)}} 
               />
            </Form.Group>
            
          <Button variant="primary" type='submit' onClick={handleClose}>
          Thêm
        </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStaff;
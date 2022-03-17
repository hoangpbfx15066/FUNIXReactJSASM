import React, {useState} from 'react';
import './App.css';
import { STAFFS } from './shared/staffs';
import dateFormat from "dateformat";
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [info, setInfo] = useState(null);
  const [col, setCol] = useState('col-6');
  const information = (info) => {
    if(info != null) {
      return(
        <div key={info.id} className='col-6 fullInfo'>
        <div>Họ và tên: {info.name}</div>
        <div>Ngày sinh: {dateFormat(info.doB, "dd/mm/yyyy")}</div>
        <div>Ngày vào công ty: {dateFormat(info.startDate, "dd/mm/yyyy")}</div>
        <div>Phòng ban: {info.department.name}</div>
        <div>Số ngày nghỉ còn lại: {info.annualLeave}</div>
        <div>Số ngày đã làm thêm: {info.overTime}</div>
        
    </div>
      );
    }else {
      return;
    }
  }
  return (
    <>
      <Container fluid>
      <div className='title'>Ứng dụng quản lý nhân sự v1.0</div>
      <Row>
      {STAFFS.map((item)=> {
        return(
                  <Col className={col}>
                  <div key={item.id} ></div>
                    <div className='name' onClick={() => setInfo(item)}>{item.name}</div>
                    </Col>
                  ) 
                } 
                )}
              </Row>
              <button className='changeCol' onClick={()=> {setCol('col-12')}}>1 Col</button>
              <button className='changeCol' onClick={()=> {setCol('col-6')}}>2 Col</button>
              <button className='changeCol' onClick={()=> {setCol('col-3')}}>4 Col</button>
              <button className='changeCol' onClick={()=> {setCol('col-2')}}>6 Col</button>
              <div className='info'>Bấm vào tên nhân viên để xem thông tin chi tiết</div>
              <div>{information(info)}</div>
      </Container>
    </>
    );
  }

export default App;

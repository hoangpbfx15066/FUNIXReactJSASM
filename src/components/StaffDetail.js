import React from 'react';
import { Outlet } from "react-router-dom";
import { List } from "reactstrap";
import dateFormat from "dateformat";


function StaffDetail({ staff}) {
  console.log(staff[0].image);
    return (
      <div className="container-fuild">
      <div className='row g-0'>
      <div className='col-12 col-md-3 col-xl-4'>
        <img className='staff-img' src={staff[0].image} alt={staff[0].image}/>
      </div>
      <div className='col-12 col-md-9 col-xl-8 staff-detail' style={{'padding' : '20px'}}>
        <List type="unstyled" style={{ textAlign: "left" }} >
          <li style={{'fontSize': '16px', 'fontWeight': '600'}}>Họ và tên: {staff[0].name}</li>
          <li>Ngày sinh: {dateFormat(staff[0].doB, "dd/mm/yyyy")}</li>
          <li>Ngày vào công ty: {dateFormat(staff[0].startDate, "dd/mm/yyyy")}</li>
          <li>Phòng ban: {staff[0].department.name}</li>
          <li>Số ngày nghỉ còn lại: {staff[0].annualLeave}</li>
          <li>Số ngày đã làm thêm: {staff[0].overTime}</li>
        </List>
      </div>
      </div>
      <Outlet/>
      </div>
    );
  }
  
  export default StaffDetail;
import React from 'react';
import { Outlet, useParams } from "react-router-dom";
import {  List } from "reactstrap";
import StaffDetail from './StaffDetail';
import RenderBreadcrumb from './RenderBreadcrumb';


function Staf({staff}) {
    const { staffId } = useParams();
      const staffDetail = staff.filter(sta => sta.id === +staffId);
  return (
    <>
      <div className="container-fuild">
        <div className="row g-0">
          <div className="col-12 col-md-6 col-xl-4">
            <RenderBreadcrumb staff={staffDetail} />
          </div>
        </div>
        <List type="unstyled" style={{ textAlign: "left" }}>
            <StaffDetail staff={staffDetail} />
        </List>
      <Outlet/>
      </div>
      <Outlet/>
    </>
  )
}

export default Staf
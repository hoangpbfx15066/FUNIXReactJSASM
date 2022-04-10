import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";


function Staff({ staff }) {
  const staffRender = staff.map((sta) => {
    return (
      <div key={sta.id} className="col-6 col-md-4 col-xl-2" style={{"padding":"10px"}}>
      <Card className="staff-img">
        <Link to={`/staff/${sta.id}`}>
          <CardImg src={sta.image} alt={sta.name} />
        </Link>
        <CardBody>
          <CardTitle>{sta.name}</CardTitle>
        </CardBody>
      </Card>
      </div>
    );
  });
  return (
    <>
      <div className="container-fuild">
        <div className="row g-0">
          <div style={{'font-size':"20px", 'font-weight': '600', 'padding-bottom': '20px'}}>Nhân Viên</div>
          <hr/>
          {staffRender}
        </div>
      <Outlet/>
      </div>
    </>
  );
}

export default Staff;
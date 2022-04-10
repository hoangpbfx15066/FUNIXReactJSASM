import React from 'react';
import { CardText, Card, CardBody, CardTitle } from "reactstrap";
import { Outlet } from 'react-router-dom';

const Department = ({department}) => {
  console.log(department); 
  const departmentRender = department.map((item) => {
    console.log(item)
    return (
        <div key={item.id} className="col-12 col-md-6 col-xl-4" style={{"padding":"10px"}}>
          <Card className="staff-img">
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>Số lượng nhân viên: {item.numberOfStaff}</CardText>
              </CardBody>
            </Card>
        </div>
    );
  });

    return (
      <>
      <div className='container-fuild'>
        <div className="row g-0">
          {departmentRender}
        </div>
      </div>
      <Outlet/>
      </>
    );
  }

export default Department;
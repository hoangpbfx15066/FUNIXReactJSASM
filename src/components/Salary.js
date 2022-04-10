import React, {useState} from 'react';
import { CardText, Card, CardBody, CardTitle, Button } from "reactstrap";
import { Outlet } from 'react-router-dom';
import RenderBreadcrumb from './RenderBreadcrumb';

const Salary = ({salary}) => {
   
  const [staffList, setStaffList] = useState(salary);
  console.log(staffList);
  function salaryCalc(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return (salaryScale * basicSalary + overTime * overTimeSalary).toFixed(0);
  }
  
  const sortSalary = (sorttype) => {
    let sortedStaffList = [...staffList];
    let salaryA = 0;
    let salaryB = 0;

    if (sorttype === "inc") {
      sortedStaffList.sort(function (a, b) {
        salaryA = salaryCalc(a.salaryScale, a.overTime);
        salaryB = salaryCalc(b.salaryScale, b.overTime);
        return salaryA - salaryB;
      });
    }

    if (sorttype === "dec") {
      sortedStaffList.sort(function (a, b) {
        salaryA = salaryCalc(a.salaryScale, a.overTime);
        salaryB = salaryCalc(b.salaryScale, b.overTime);
        return salaryB - salaryA;
      });
    }

    setStaffList(sortedStaffList);
  }
  
  
  const salaryRender = staffList.map((item) => {
    return (
      <div key={item.id} className="col-12 col-md-6 col-xl-4" style={{"padding":"10px"}}>
      <Card className="staff-img">
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>Mã nhân viên: {item.id}</CardText>
          <CardText>Hệ số lương: {item.salaryScale}</CardText>
          <CardText>Số giờ làm thêm: {item.overTime}</CardText>
          <CardText>Lương: {salaryCalc(item.salaryScale, item.overTime)}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  });

    return (
      <>
      <div className='container-fuild'>
      
      <div id="sort" className="row">
        <div className="col-12">
          <h5>Sắp xếp theo</h5>
        </div>
        <div className="col-12">
          <Button onClick={() => sortSalary("inc")}>
            <i className="fa fa-sort-amount-asc" aria-hidden="true"></i> Lương thấp
          </Button>

          <Button onClick={() => sortSalary("dec")}>
            <i className="fa fa-sort-amount-desc" aria-hidden="true"></i> Lương cao
          </Button>
        </div>
      </div>
        <div className="row g-0">
            <div className="col-12">
            <RenderBreadcrumb staff='Bảng Lương' />
            </div>
        </div>
        <div className="row g-0">
          {salaryRender}
        </div>
      </div>
      <Outlet/>
      </>
    );
  }

export default Salary;
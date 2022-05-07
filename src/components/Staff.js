import React, {useState, useRef} from 'react';
import { Link, Outlet } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import AddStaff from './AddStaff';

function Staff({ staff }) {
  const [staffList, setStaffList] = useState(staff);
 
  const AddNewStaff = (e) => {
    console.log('here')
  }
  const Search =() => {
      const searchValue = useRef('');
      const handleSubmit = (e) => {
          e.preventDefault();
          let inputValue = searchValue.current.value.toUpperCase();
          let arrTemp = [];
             if (inputValue !== '') {
              arrTemp = staff.filter(el => el.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1);
              setStaffList(arrTemp)
            } else {
              setStaffList(arrTemp);
            }
      };
      
      return (
      <form onSubmit={handleSubmit}>
          <label>
          Search:
          <input type="text" ref={searchValue} />
          </label>
          <input type="submit" value="Seach" />
      </form>
      );
    }
  const staffRender = staffList.map((sta) => {
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
          <div style={{'fontSize':"20px", 'fontWeight': '600', 'paddingBottom': '20px'}}>Nhân Viên</div>
          <div><Search /><AddStaff id={staff.length} addNewStaff={AddNewStaff}/></div>
          <hr/>
          {staffRender}
        </div>
      <Outlet/>
      </div>
    </>
  );
}

export default Staff;
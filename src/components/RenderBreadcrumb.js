import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem} from "reactstrap";

const RenderBreadcrumb = ({ staff }) => {
    return (
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem>
          <Link to="/staffList">Nhân Viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>{typeof staff === 'object' ? staff[0].name : 'Bảng Lương' }</BreadcrumbItem>
      </Breadcrumb>
    );
  };

  export default RenderBreadcrumb;
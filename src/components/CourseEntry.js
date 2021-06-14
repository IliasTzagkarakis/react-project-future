import React from "react";
import { Row, Col, Button } from "reactstrap";
import CourseEdit from "./CourseEdit"




const CourseEntry = ({course, isEditing,
  id,
  title,
  imagePath,
  price,
  open,
  duration,
  dates,
  description,
  handleEdit,
  handleDelete
}) => {
 
  const { start_date, end_date } = dates;
  const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");
  const bgImageStyle = {
    height: "250px",
    background: `url(${imagePath}) no-repeat top left`,
    backgroundSize: "100% 100%",
  };
// const history = useHistory
//   const handleDelete=() => {
//     fetch('/courses/' + id,{
// method:'DELETE'
//     }).then(() => {
// history.push('/')
//     } )
//   }

   return (isEditing?
    <> 
      <Row>
        <Col xs={12}>
          <h1>
            {title} <small>({id})</small>
          </h1>
          <div style={bgImageStyle}></div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={6}>
          <h4>Price: {price.normal} €</h4>
          <h4>Bookable: {open ? "✔" : "✖"}</h4>
        </Col>
        <Col xs={6}>
          <h4 className="text-right">Duration: {duration}</h4>
          <h4 className="text-right">
            Dates: {startDateFormatted} - {endDateFormatted}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div
            className="lead m-top"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="clearfix">
            <Button  color="primary" size="large" onClick={handleEdit}>
              Edit
            </Button>
            &nbsp;
            <Button color="danger" size="large" onClick={handleDelete}>
              Delete
            </Button>
            &nbsp;
          </div>
        </Col>
      </Row>
    </>: 
    <> 
      < CourseEdit courseEdit={course} />
    </>

    
    
  );
}

export default CourseEntry;

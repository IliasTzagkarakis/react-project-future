import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "reactstrap";

const CoursesTable = ({courses }) => {
  
  // const { start_date, end_date } = dates;
  // const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
  // const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");
  return (
    <Card className="m-top">
      <CardHeader>Last 5 courses</CardHeader>
      <CardBody className="no-padding">
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Bookable</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(({ id, title, open, price, dates }) => (
              <tr>
                <td>&#8505; {title}</td>
                <td>{open ? "✓" : "X"}</td>
                <td>{price.normal} €</td>
                <td>
                {dates.start_date} - {dates.end_date}
                </td>
                <td>
                  <Button tag={Link} to={`/courses/${id}`} color="info">
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <CardFooter className="clearfix">
          <Button
            tag={Link}
            to="/courses"
            color="primary"
            className="float-right"
          >
            View All
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
            
};

export default CoursesTable;

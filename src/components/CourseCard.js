import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardHeader, Button } from "reactstrap";

const CourseCard = ({ id, title, imagePath, price, open, duration, dates }) => {
  const { start_date, end_date } = dates;
  const startDateFormatted = new Date(start_date).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(end_date).toLocaleDateString("el-gr");

  return (
    <Card className="course-card">
      <CardHeader>
        <h4>{title}</h4>
      </CardHeader>
      <Link to={`/courses/${id}`}>
        <CardImg
          top
          height="300px"
          src={imagePath}
          alt={`${title} course image`}
        />
      </Link>
      <CardBody>
        <div>
          <p>
            Price: <strong>{price.normal}€</strong> | Bookable:{" "}
            <strong>{open ? "✔" : "✖"}</strong>
          </p>
          <p>
            Duration: <strong>{duration}</strong>
          </p>
          <p>
            Dates:{" "}
            <strong>
              {startDateFormatted} - {endDateFormatted}
            </strong>
          </p>
          <Button
            tag={Link}
            to={`/courses/${id}`}
            color="primary"
            className="float-right"
          >
            View
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CourseCard;

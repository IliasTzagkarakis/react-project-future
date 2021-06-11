import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Loader from "../components/Loader";
import CourseCard from "../components/CourseCard";
import { fetchCourses } from "../api";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetshData = async () => {
      const courses = await fetchCourses();

      setCourses(courses);
    };

    fetshData();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <Row>
        {courses.length ? (
          courses.map((course) => (
            <Col key={course.id} xs={12} sm={6} md={4}>
              <CourseCard {...course} />
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
    </>
  );
};

export default Courses;

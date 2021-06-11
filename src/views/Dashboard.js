import React, { useState, useEffect } from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import CoursesTable from "../components/CoursesTable";
import StatEntry from "../components/StatEntry";
import Loader from "../components/Loader";
import { fetchStats, fetchCourses } from "../api";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetshData = async () => {
      const [responseStats, responseCourses] = await Promise.all([
        fetchStats(),
        fetchCourses(),
      ]);

      setStats(responseStats);
      setCourses(responseCourses);
    };

    fetshData();
  }, []);

  return (
    <>
      <Row>
        <Col xs={12} id="jumbotron-container">
          <Jumbotron>
            <h1>Welcome to Code.Hub Dashboard!</h1>
            <p className="lead">Manage everything and have fun!</p>
          </Jumbotron>
        </Col>
      </Row>

      <Row id="stats-container">
        {stats.length ? (
          stats.map(({ id, title, amount }) => (
            <Col key={id} xs={12} sm={6} md={3}>
              <StatEntry title={title} amount={amount} />
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <Loader />
          </Col>
        )}
      </Row>

      <Row>
        <Col xs={12}>
          {courses.length ? <CoursesTable courses={courses} /> : <Loader />}
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

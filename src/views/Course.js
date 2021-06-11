import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, Switch, Link, Route } from "react-router-dom";
import CourseEntry from "../components/CourseEntry";
import { fetchCourse, deleteCourse, updateCourse } from "../api";
import Loader from "../components/Loader";
import AddCourse from "./AddCourse";
// import CourseEdit from './courseEdit';


const Course = () => {

  const match = useRouteMatch();
  const [course, setCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(true); //++++++++++++++++++

  useEffect(() => {
    const fetshCourse = async () => {
      const course = await fetchCourse(match.params.id);

      setCourse(course);
    };

    fetshCourse();
  }, [match.params.id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsEditing(isEditing=>!isEditing); //+++++++++++++++++++++++++++
    await updateCourse(course);
  };


  const history = useHistory();
  const handleDelete = async (e) => {

    await deleteCourse(course.id);
    history.push('/');

  }



  return (
    <>
      {course ? (
        <CourseEntry
          isEditing = {isEditing} //++++++++++++
          {...course}
          course={course} //+++++++++++++
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Course;

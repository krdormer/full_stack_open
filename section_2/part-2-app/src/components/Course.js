import React from "react";

const Course = ({ courses }) => {
  const getTotals = (course) => {
    return course.parts.reduce((acc, part) => {
      return acc + part.exercises;
    }, 0)
  }

  return (
    <div>
      {courses.map((course) => (
        <>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <b>{`total of ${getTotals(course)} exercises`}</b>
        </>
      ))}
    </div>
  );
}

export default Course;


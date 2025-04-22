// components/CourseRanking.jsx
import React from "react";
import CourseCard from "./CourseCard";

const CourseRanking = ({ courses }) => {
  const topCourses = courses.slice(0, 3); // Get the top 3 courses

  const medalColors = ["gold", "silver", "bronze"];

  return (
    <div className="grid grid-cols-1 gap-4">
      {topCourses.map((course, index) => (
        <CourseCard
          key={index}
          name={course.name}
          mentor={course.mentor}
          medalColor={medalColors[index]}
        />
      ))}
    </div>
  );
};

export default CourseRanking;

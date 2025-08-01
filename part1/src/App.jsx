const Header = ({ course }) => {
  console.log("Header toimii");
  return <div>{course.name}</div>;
};

const Content = ({ course }) => {
  return (
    <p>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />
    </p>
  );
};

const Part = ({ part, exercise }) => {
  console.log("Part toimii");
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Total = ({ course }) => {
  console.log("Total toimii");
  return (
    <p>
      Number of exercises{" "}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;

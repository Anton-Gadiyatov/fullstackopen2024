const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }) => {
        return <Part title={name} exercisesCount={exercises} key={name} />;
      })}
    </div>
  );
};

const Part = ({ title, exercisesCount }) => {
  return (
    <p>
      {title} {exercisesCount}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, next) => {
    return (acc += next.exercises);
  }, 0);

  return <p>Number of exercises {total}</p>;
};

export const App = () => {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

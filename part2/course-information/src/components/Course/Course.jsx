export const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => {
        return <Part title={name} exercisesCount={exercises} key={id} />;
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

  return <b>Total of {total} exercises</b>;
};

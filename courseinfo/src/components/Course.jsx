const Course = ({ course }) => {
    const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map((part, i) => (
      <Part key={i} part={part} />
    ))}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (<p>Number of exercises {total}</p>)
}
    return(
        <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
        </>
    )
}

export default Course;
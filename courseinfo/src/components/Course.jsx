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

// const Total = (props) => <p>Number of exercises {props.total}</p>

    return(
        <>
        <Header course={course.name} />
      <Content parts={course.parts} />
      {/* <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      /> */}
        </>
    )
}

export default Course;
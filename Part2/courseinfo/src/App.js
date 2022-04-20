

const Header = ({name}) => (<h1>{name}</h1>)

const Part = ({name, exercises}) => (<p>{name} - {exercises}</p>)

const Content = ({parts}) => (
      <>
        {parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
      </>
      ) 


const Total = ({parts}) => {
  let numOfExc = 0
  parts.forEach(element => {
    numOfExc += element.exercises
  });
  // console.log(numOfExc)
  return(
    <b>Total {numOfExc} of exercises </b>
    )
  }

const Course = ({course}) => (
    <>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
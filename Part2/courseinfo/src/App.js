

const Header = ({name}) => (<h1>{name}</h1>)

const Part = ({name, exercises}) => (<p>{name} - {exercises}</p>)

const Content = ({parts}) => (
      <>
        {parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
      </>
      ) 

const Total = ({parts}) => {
  const sumOfExc = { 
        name: 'Total of exercises',
        exercises: 0
      }
      
  const {exercises} = parts.reduce((s, p) => {
            sumOfExc.exercises = s.exercises + p.exercises
            return sumOfExc
          })
          
  return(
    <b>Total {exercises} of exercises </b>
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
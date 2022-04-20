

const Header = ({name}) => (<h1>{name}</h1>)

const Part = ({name, exercises}) => (<p>{name} - {exercises}</p>)

const Content = ({parts}) => (
      <>
        {parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}
      </>
      ) 

const Total = ({parts}) => {
  const {exercises} = parts.reduce((s, p) => {
            p.exercises = s.exercises + p.exercises
            return p
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
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  //{parts.map(part => (<Part key={part.id} name={part.name} exercises={part.exercises} />))}

  return (
    <>
      {course.map (course => (<Course key={course.id} course={course} /> ))}  
    </>
  )
}

export default App
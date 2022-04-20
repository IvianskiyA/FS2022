
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


  export default Course
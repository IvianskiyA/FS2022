
const Header = (course) => {
  return (
  <h1>{course.name}</h1>
)
}

const Part = (props) => {
return (
  <p>{props.part} - {props.excercises}</p>
)
}

const Content = (props) => {
return (
  <>
    <Part part={props.part1.name} excercises={props.part1.excercises} />
    <Part part={props.part2.name} excercises={props.part2.excercises} />
    <Part part={props.part3.name} excercises={props.part3.excercises} />
  </>
)

}

const Total = (props) => {
return(
  <p>Number of exercises {props.numOfExcecises}</p>
  )

}

const App = () => {
const course = 'Half Stack application development'
const part1 = {
  name : 'Fundamentals of React',
  excercises : 10
}
const part2 = {
  name : 'Using props to pass data',
  excercises : 7
}
const part3 = {
  name : 'State of a component',
  excercises : 14
}
return (
  <>
    <Header name = {course} />
    <Content part1 = {part1}  part2 = {part2}  part3 = {part3} />
    <Total numOfExcecises = {part1.excercises + part2.excercises + part3.excercises} />
  </>
)
}

export default App
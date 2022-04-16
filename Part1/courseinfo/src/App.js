
const Header = (p) => {
  // console.log(p)
  return (
    <h1>{p.name}</h1>
)
}

const Part = (props) => {
return (
  <p>{props.part} - {props.excercises}</p>
)
}

const Content = (p) => {
let parts = p.parts
return (
  <>
    <Part part={parts[0].name} excercises={parts[0].excercises} />
    <Part part={parts[1].name} excercises={parts[1].excercises} />
    <Part part={parts[2].name} excercises={parts[2].excercises} />
  </>
)

}

const Total = (p) => {
let numOfExc = 0
p.parts.forEach(element => {
  numOfExc = numOfExc + element.excercises
});
// console.log(numOfExc)
return(
  <p>Number of exercises {numOfExc}</p>
  )

}

const App = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
  {
    name : 'Fundamentals of React',
    excercises : 10
  },
  {
    name : 'Using props to pass data',
    excercises : 7
  },
  {
    name : 'State of a component',
    excercises : 14
  }
]
}
return (
  <>
    <Header name = {course.name} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
  </>
)
}

export default App
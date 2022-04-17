import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState(Array(anecdotes.length).fill(0)) // Array(anecdotes.length).fill(0)

  const nextAnec = () => {
    const nextindex = getRandomInt(anecdotes.length)    
    return nextindex
  }

  const addVote = (index) => {
    const copyvote = [...points]
    copyvote[index] += 1
    setPoint(copyvote)    
  }

  const maxVote = () => {
    console.log(points)
    const maxNum = Math.max(...points)
    return ({index: points.indexOf(maxNum), vote: maxNum})
  }

  const MaxVotedAnec = () => {
    const {index, vote} = maxVote()
    if (vote > 0) 
      return (
        <>
          <h2>Anecdote with most votes</h2>
          <p>{anecdotes[index]}</p>
          <p>has {vote} votes</p>
        </>
      )
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => addVote(selected)} text="vote" />
      <Button handleClick={() => setSelected(nextAnec())} text="next anecdote" />
      <Button handleClick={() => setPoint(Array(anecdotes.length).fill(0))} text="reset" />
      <MaxVotedAnec />      
    </div>
  )
}

export default App
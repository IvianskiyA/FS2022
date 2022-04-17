import { useState } from 'react'

const Statistics = (props) => {
  const {good, neutral, bad} = props
  if ((good + neutral + bad) > 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>good - {good} </p>
        <p>neutral - {neutral} </p>
        <p>bad - {bad} </p>
        <p>all - {good + neutral + bad} </p> 
        <p>avarage- {(good * 1 + bad * -1) / (good + neutral + bad) } </p>
        <p>positive - {good / (good + neutral + bad) * 100}%</p>
      </>
    )
    }
  else {
    return (
      <>
        <h2>statistics</h2>
        <p>good - {good} </p>
        <p>neutral - {neutral} </p>
        <p>bad - {bad} </p>
      </>
    )
  }
  
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App

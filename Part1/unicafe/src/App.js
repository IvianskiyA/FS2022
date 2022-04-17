import { useState } from 'react'

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

  const DisplayNaN = ({prefix, expression, suffix}) => {
    if (expression !== expression) {
      return <p>{prefix} - </p>
    }
    else {return <p>{prefix} - {expression}{suffix} </p>}

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <p>good - {good} </p>
      <p>neutral - {neutral} </p>
      <p>bad - {bad} </p>
      <DisplayNaN prefix = 'all' expression = {good + neutral + bad} />
      <DisplayNaN prefix = 'avarage' expression={(good * 1 + bad * -1) / (good + neutral + bad) } />
      <DisplayNaN prefix = 'positive' expression={good / (good + neutral + bad) * 100} suffix = '%' />
    </div>
  )
}

export default App

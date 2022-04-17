import { useState } from 'react'

  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
    )
  }

  const Statistics = (props) => {
    const {good, neutral, bad} = props
    const stats =  [
      {text: 'good', value: good},
      {text: 'neutral', value: neutral},
      {text: 'bad', value: bad},
      {text: 'all', value: good + neutral + bad},
      {text: 'avarage', value: (good * 1 + bad * -1) / (good + neutral + bad)},
      {text: 'positive', value: good / (good + neutral + bad) * 100 + '%'}
    ] 
    // console.log(stats)
    if ((good + neutral + bad) > 0) {
      const tableStat = stats.map((element, index) => 
            <StatisticLine key={index} text={element.text} value={element.value} />            
          )
          console.log(tableStat)
      return (
        <>
          <h2>statistics</h2>
          <table>
            <tbody>
              {tableStat}
            </tbody>
          </table>
        </>
      )      
      }  
    else {
      return (
        <>
          <h2>statistics</h2>
          <p>No feedback given</p>
        </>
      )
    }    
    }

  const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

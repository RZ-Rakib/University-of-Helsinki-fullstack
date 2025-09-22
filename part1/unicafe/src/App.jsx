import { useState } from "react"

const Heading = ({text}) => (<div><h1>{text}</h1></div>)


const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

const StatisticLine = ({text, value}) =>{
  return (
    <tr>
      <td scope="row"> {text} </td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {

  return (
    <div>
      <Heading text='statistics' />

      {
      all === 0 ? (

          <div>No feedback given</div>
        ) : (
          <div>
            <table>
              <tbody>
              <StatisticLine text='good' value={good} />
              <StatisticLine text='neutral' value={neutral} />
              <StatisticLine text='bad' value={bad} />
              <StatisticLine text='all' value={all} />
              <StatisticLine text='average' value={average.toFixed(1)} />
              <StatisticLine text='positive' value={`${positive.toFixed(1)} %`} />
              </tbody>

            </table>
            
          </div>
        )
      }
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good / all) * 100  : 0 

  const handleGood = () => setGood(g => g + 1)
  
  const handleNeutral = () => setNeutral(n => n + 1)

  const handleBad = () => setBad(b => b + 1)

  return(
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App


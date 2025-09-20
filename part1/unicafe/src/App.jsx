import { useState } from "react"

const Heading = ({text}) => {

  return (
    <div>
    <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGood = () => {
    console.log('good before value', good)
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good after value', updatedGood)
  }

  const handleNeutral = () => {
    console.log('neutral before value', neutral)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral after value', updatedNeutral)
  }

    const handleBad = () => {
      console.log('bad before value', bad)
      const updatedBad = bad + 1
      setBad(updatedBad)
      console.log('bad after value', updatedBad)
    }

  return(
    <div>
      <Heading text='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Heading text='statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App
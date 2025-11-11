import { useState } from 'react'
const Button = ({ vote, anecdotes, text1, text2 }) => {
  return (
    <div>
      <button onClick={vote}>{text1}</button>
      <button onClick={anecdotes}>{text2}</button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  console.log(votes)

  const maxVotes = Math.max(...votes)
  console.log('max votes', maxVotes)
  const maxIndex = votes.indexOf(maxVotes)
  console.log('Index of max vote', maxIndex)

  const handleSelected = () => {
    const length = Math.floor(Math.random() * anecdotes.length)
    console.log(length)
    setSelected(length)
  }
  const handleVote = () => {
    const currentVote = (currentVote) => {
      const copyVotes = [...currentVote]
      copyVotes[selected] += 1
      return copyVotes
    }
    setVote(currentVote)


  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button vote={handleVote} text1={'vote'} anecdotes={handleSelected} text2={'next anecdote'} />
      <h1>Anecdote with most vote</h1>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {maxVotes} votes</div>
    </div>
  )
}

export default App
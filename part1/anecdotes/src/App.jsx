import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [totalVotes, setTotalVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVotes = (anecdoteNum) => {
    const newVotes = [...totalVotes]
    newVotes[anecdoteNum] += 1
    setTotalVotes(newVotes)
    console.log(totalVotes)
    console.log(totalVotes.indexOf(Math.max(...totalVotes)))
  }

  const handleRandom = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    console.log("randomAnecdote", randomAnecdote)
    setSelected(randomAnecdote)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {totalVotes[selected]} votes</p>
      <button onClick={() => handleVotes(selected)}>Vote</button>
      <button onClick={() => handleRandom()}>Random Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[totalVotes.indexOf(Math.max(...totalVotes))]}</p>
      <p>Has {Math.max(...totalVotes)} votes</p>
    </div>
  )
}

export default App
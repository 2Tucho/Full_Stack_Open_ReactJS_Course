import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const moreGood = {
    ...feedback,
    good: feedback.good + 1
    }
    setFeedback(moreGood)
 
    const totalVotes = moreGood.good + feedback.neutral + feedback.bad
    setTotal(totalVotes)

    const averageVotes = (moreGood.good - feedback.bad) / totalVotes
    setAverage(averageVotes)

    const positiveVotes = moreGood.good / totalVotes
    setPositive(positiveVotes)
  }

  const handleNeutral = () => {
    const moreNeutral = {
    ...feedback,
    neutral: feedback.neutral + 1
    }
    setFeedback(moreNeutral)

    const totalVotes = feedback.good + moreNeutral.neutral + feedback.bad
    setTotal(totalVotes)

    const averageVotes = (feedback.good - feedback.bad) / totalVotes
    setAverage(averageVotes)

    const positiveVotes = feedback.good / totalVotes
    setPositive(positiveVotes)
  }

  const handleBad = () => {
    const moreBad = {
    ...feedback,
    bad: feedback.bad + 1
    }
    setFeedback(moreBad)

    const totalVotes = feedback.good + feedback.neutral + moreBad.bad
    setTotal(totalVotes)

    const averageVotes = (feedback.good - moreBad.bad) / totalVotes
    setAverage(averageVotes)

    const positiveVotes = feedback.good / totalVotes
    setPositive(positiveVotes)
  }

  return (
    <div>
      <h2>Give me feedback!</h2>
      <div>
        <button onClick={() => handleGood()}>Good</button>
        <button onClick={() => handleNeutral()}>Neutral</button>
        <button onClick={() => handleBad()}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>All: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>
      </div>
    </div>
  )
}

export default App
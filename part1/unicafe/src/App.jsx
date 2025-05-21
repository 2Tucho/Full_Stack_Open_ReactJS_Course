import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGood = () => {
    const moreGood = {
    ...feedback,
    good: feedback.good + 1
    }
    setFeedback(moreGood)
  }

  const handleNeutral = () => {
    const moreNeutral = {
    ...feedback,
    neutral: feedback.neutral + 1
    }
    setFeedback(moreNeutral)
  }

  const handleBad = () => {
    const moreBad = {
    ...feedback,
    bad: feedback.bad + 1
    }
    setFeedback(moreBad)
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
      </div>
    </div>
  )
}

export default App
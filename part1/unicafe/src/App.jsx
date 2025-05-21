import { useState } from 'react'

const Button = ({ handleGood, handleNeutral, handleBad }) => {

  return (
    <div>
      <button onClick={() => handleGood()}>Good</button>
      <button onClick={() => handleNeutral()}>Neutral</button>
      <button onClick={() => handleBad()}>Bad</button>
    </div>
  )
}

// const Statistics = ({ good, neutral, bad, total, average, positive }) => {
//   if (total > 0) {
//     return (<>

//       <div>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>All: {total}</p>
//         <p>Average: {average}</p>
//         <p>Positive: {positive}</p>
//       </div>
//     </>)
//   } else return <p>No feedback given</p>
// }

const StatisticsLine = ({ value, text }) => {
  return <p>{text}: {value}</p>
}

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
      <Button handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <h2>Statistics</h2>
      {total > 0 ? <div>
        <StatisticsLine value={feedback.good} text={"Good"} />
        <StatisticsLine value={feedback.neutral} text={"Neutral"} />
        <StatisticsLine value={feedback.bad} text={"Bad"} />
        <StatisticsLine value={total} text={"Total"} />
        <StatisticsLine value={average} text={"Average"} />
        <StatisticsLine value={positive} text={"Positive"} />
      </div> : <p>No feedback given</p>}
    </div>
  )
}

export default App
const Total = ({ parts }) => {
    const totalExercises = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)

    return <p><strong>Total of {totalExercises} exercises</strong></p>
}

export default Total
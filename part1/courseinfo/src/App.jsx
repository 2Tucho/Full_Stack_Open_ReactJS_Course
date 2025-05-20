const Header = (props) => {
  //Nombre del curso
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  //Partes y su número de ejercicios
  return <div>
    <Part part={props.part1.name} exercises={props.part1.exercises} />
    <Part part={props.part2.name} exercises={props.part2.exercises} />
    <Part part={props.part3.name} exercises={props.part3.exercises} />
  </div>
}

const Total = (props) => {
  //Número total de jercicios
  return <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
}

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
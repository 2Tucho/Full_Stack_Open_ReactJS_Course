// const Header = (props) => {
//   //Nombre del curso
//   return <h1>{props.course}</h1>
// }

// const Part = (props) => {
//   console.log(props.part.name)
//   return <p>{props.part.name} {props.part.exercises}</p>
// }

// const Content = (props) => {
//   //Partes y su número de ejercicios
//   return <div>
//     <Part part={props.parts[0]} />
//     <Part part={props.parts[1]} />
//     <Part part={props.parts[2]} />
//   </div>
// }

// const Total = (props) => {
//   //Número total de jercicios
//   return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
// }

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      {parts.map((elem, index) => <p key={`parts${index}`}>{parts[index].name} {parts[index].exercises}</p>)}
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
      {/* <Total parts={parts} /> */}
    </div>
  )
}

export default App
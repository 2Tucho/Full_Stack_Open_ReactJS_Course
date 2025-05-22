import Header from "./Header/Header";
import Content from "./Content/Content";

//const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({ course }) => {

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      {/* <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      /> */}
    </div>
  )
}

export default Course
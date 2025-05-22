import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const Course = ({ course }) => {
    let totalExercises = 0
    for(let i = 0; i < course.parts.length; i++) {
        totalExercises += course.parts[i].exercises
    }

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={totalExercises} />
        </div>
    )
}

export default Course
import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const Course = ({ course }) => {

    // for(let i = 0; i < course.parts.length; i++) {
    //     totalExercises += course.parts[i].exercises
    // }

    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course
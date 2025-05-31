import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const Course = ({ courses }) => {
 
    return <>
        {courses.map(elem => {
            return <div key={elem.id}>
                <Header name={elem.name} />
                <Content parts={elem.parts} />
                <Total parts={elem.parts} />
            </div>
        })}
    </>
    
}

export default Course
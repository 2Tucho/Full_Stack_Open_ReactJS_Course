import Part from "./Part/Part";

const Content = ({ parts }) => {
  console.log("parts", parts)
  return <>
    {parts.map(elem => {
      console.log("elem.id", elem.id)
      return <div key={elem.id}>
        <Part part={elem} />
      </div>
    })}
  </>
}

export default Content
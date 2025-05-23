import Part from "./Part/Part";

const Content = ({ parts }) => {
  return <>
    {parts.map(elem => {
      return <div key={elem.id}>
        <Part part={elem} />
      </div>
    })}
  </>
}

export default Content
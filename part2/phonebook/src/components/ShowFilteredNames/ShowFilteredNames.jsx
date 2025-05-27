const ShowFilteredNames = ({ filter, persons }) => {
    return <div>
        {filter === "" ? persons.map(elem =>
        <p key={elem.name}>{elem.name} {elem.number}</p>
      ) :
        filter.map(elem =>
        <p key={elem.name}>{elem.name} {elem.number}</p>
      )}
    </div>
}

export default ShowFilteredNames
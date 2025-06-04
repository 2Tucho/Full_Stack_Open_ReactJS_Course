const ShowFilteredNames = ({ filter, persons, deletePerson }) => {
  const listToShow = filter.length === 0 ? persons : filter

  return (
    <>
      {listToShow.map(elem => (
        <div key={elem.id}>
          <p>{elem.name} {elem.number}</p>
          <button onClick={() => deletePerson(elem.id, elem.name)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default ShowFilteredNames
const ShowFilteredNames = ({ filter, persons, deletePerson }) => {
  return <>
    {filter.length === 0 ? persons.map(elem => 
      <div key={elem.id}>
        <p>{elem.name} {elem.number}</p>
        <button onClick={() => deletePerson(elem.id)}>Delete</button>
      </div>
    ) :
      filter.map(elem =>
        <div key={elem.id}>
          <p>{elem.name} {elem.number}</p>
          <button onClick={() => deletePerson(elem.id, elem.name)}>Delete</button>
        </div>
      )}
  </>

}

export default ShowFilteredNames
const FilterPersons = ({ filterNames }) => {
    return <div>
        Filter shown with: <input  onChange={filterNames}/> 
      </div>
}

export default FilterPersons
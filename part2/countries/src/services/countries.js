import axios from "axios"
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

// const deletePerson = (id, newObject) => {
//     const request = axios.delete(`${baseUrl}/${id}`, newObject)
//     return request.then(response => response.data)
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { getAll }
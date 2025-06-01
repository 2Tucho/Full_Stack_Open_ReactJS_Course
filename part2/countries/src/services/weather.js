import axios from "axios"

const getCapitalWeather = (capital) => {
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

export default { getCapitalWeather }
import axios from 'axios'
const baseUrl = 'http://localhost:3002/api'

const login = async (credentials) => {
    const response = await axios.post(baseUrl + "/login", credentials)
    return response.data
}
const logout = async () => {
    await axios.post(baseUrl + "/logout", {})
}

export default { login, logout }

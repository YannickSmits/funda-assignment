import axios from 'axios'

class Request {
  get = async (id) => {
    try {
      const response = await axios.get('http://localhost:3001', { params: { id } })
      return response.data
    } catch (error) {
      console.log(error)
    }
    return false
  }
}

export default new Request()

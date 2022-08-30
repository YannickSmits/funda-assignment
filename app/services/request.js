import axios from 'axios'

class Request {
  apiURL = 'http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/'
  get = async (id) => {
    try {
      // const response = await axios.get('http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/cf6ffb70-86de-4077-bd5e-6d7d257eb0ce')
      const response = await axios.get('http://localhost:3001', { params: { id } })
      console.log(response.data.URL)
      return response.data
    } catch (error) {
      console.log(error)
    }
    return false
  }
}

export default new Request()

const opencage = require('opencage-api-client')

class Geocoder {
  get = async (address) => {
    console.log(address)
    try {
      // const response = await axios.get('http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/cf6ffb70-86de-4077-bd5e-6d7d257eb0ce')
      const response = await opencage
        .geocode({
          q: address,
          key: '90472fe8f1354b85b9ee5b759e3be4e5'
        })
      const location = response.results[0].geometry
      return location
    } catch (error) {
      console.log(error)
    }
    return false
  }
}

export default new Geocoder()

import opencage from 'opencage-api-client'

class Geocoder {
  get = async (address) => {
    try {
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

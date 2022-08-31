const express = require('express')
const cors = require('cors')
const axios = require('axios')

async function createAPI() {
  const app = express()
  app.use(cors())
  app.get('/', async (req, res) => {
    const results = await getDataFromAPI(req.query.id)
    res.send(results)
  })
  app.listen(3001, () => {
    console.log('Api running on Port 3001')
  })
}

async function getDataFromAPI(id) {
  try {
    const response = await axios.get(`http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
  return false
}

createAPI();

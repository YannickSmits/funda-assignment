import request from '../services/request'
import geocoder from '../services/geocoder'

export const state = () => ({
  houseDetails: {},
  houseLocation: {}
})

export const mutations = {
  updateHouseDetails (state, event) {
    state.houseDetails = event
  },
  updateHouseLocation (state, event) {
    state.houseLocation = event
  }
}

export const actions = {
  async fetchHouseDetails ({ commit }, value) {
    const response = await request.get(value)
    commit('updateHouseDetails', response)
  },
  async fetchHouseLocation ({ commit }, value) {
    const address = `${value.Adres}, ${value.Plaats}`
    const location = await geocoder.get(address)
    commit('updateHouseLocation', location)
  }
}

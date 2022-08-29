// http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/cf6ffb70-86de-4077-bd5e-6d7d257eb0ce/
import request from '../services/request'

export const state = () => ({
  houseDetails: {}
})

export const mutations = {
  updateHouseDetails (state, event) {
    state.houseDetails = event
  }
}

export const actions = {
  async fetchHouseDetails ({ commit }, value) {
    console.log(value)
    const response = await request.get(value)
    commit('updateHouseDetails', response)
  }
}

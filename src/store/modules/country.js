const state = {
  countries: [
    { id: 1, name: 'Argentina' },
    { id: 2, name: 'Brasil' },
    { id: 3, name: 'Colombia' }
  ],
}

const mutations = {
  deleteCountry(state, idCountry) {
    state.countries = state.countries.filter((country) => country.id !== idCountry)
  },
  addCountry(state, country) {
    state.countries.push(country)
  },
  updateCountry(state, country) {
    const countryIndex = state.countries.findIndex((temp) => temp.id === country.id)
    state.countries[countryIndex] = country
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
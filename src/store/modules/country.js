const state = {
  countries: [
    { id: 1, name: 'Argentina' },
    { id: 2, name: 'Brasil' },
    { id: 3, name: 'Colombia' }
  ],
}

const mutations = {
  addCountry(state, country) {
    let lastItem = state.countries[state.countries.length-1]
    let idLastItem;
    if(typeof(lastItem)=='undefined'){
      idLastItem = 0
    }else{
      idLastItem = lastItem.id
    }
    country.id=idLastItem + 1
    state.countries.push(country)
  },
  deleteCountry(state, idCountry) {
    state.countries = state.countries.filter((country) => country.id !== idCountry)
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
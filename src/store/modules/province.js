const state = {
  provinces: [
    {id:1, name:'Santa Fe, Argentina'},
    {id:2, name:'Santiago, Chile'},
    {id:3, name:'Bogota, Colombia'}
  ]
}

const mutations = {
  addProvince(state, province){
    state.provinces.push(province)
  },
  deleteProvince(state, idProvince){
    state.provinces = state.provinces.filter((province)=>province.id !== idProvince)
  },
  editProvince(state, province){
    const provinceIndex = state.provinces.findIndex((item)=>item.id == province.id)
    provinces[provinceIndex] = province
  }
}

export default {
  namespaced: true,
  state,
  mutations,
}
const state = {
  provinces: [
    { id: 1, name: 'Santa Fe', idCountry:1},
    { id: 2, name: 'Teresina', idCountry:2 },
    { id: 3, name: 'Cali', idCountry:3 }
  ]
}

const mutations = {
  addProvince(state, province){
    let lastItem = state.provinces[state.provinces.length-1]
    let idLastItem;
    if(typeof(lastItem)=='undefined'){
      idLastItem = 0
    }else{
      idLastItem = lastItem.id
    }
    province.id=idLastItem + 1
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

const getters = {
  getProvinceById: (state) => (provinceId) =>{
    const province = state.provinces.find(province => province.id === provinceId)
    return province
  }
} 

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
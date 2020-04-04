// import * as types from './mutation-types'
// import state from './state'

const mutations = {
    // [types.SET_PRODUCT_LIST] (list) {
    //     state.productList = list
    // }
    setProductList(state,list){
        state.productList = list
    },
    setAddressList(state,list){
        state.addressList = list
    },
    addAddressList(state,address){
        state.addressList.push(address)
    }
}


export default mutations

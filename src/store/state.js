const state = {
    productList: [],
    addressList:[],
    fetchAddress:false, //如果曾經加載地址，不再加載false为未加载，true为已加载
    addressSubmit: false, //修改其值用于触发提交address form
    addressSuccess: false,
    productTotal: 0,
    productCategoryId: '',
    cartItems:[],
    isLogin:false
}

export default state

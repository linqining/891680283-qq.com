import requests from "./index";

const userRegister=(params,callback)=>{
    requests.post('/sm/register',params,callback)
}
const userLogin=(params,callback)=>{
    requests.post('/sm/login',params,callback)
}

const catList = (level,value,callback)=>{
    let url;
    if(level===0){
        url= '/sm/category/first'
        requests.get(url,{},callback)
    }else if(level===1){
        url = '/sm/category/findChild'
        requests.get(url,{parentId: value},callback)
    }
}

const fetchProductList = (params,callback)=>{
    requests.post('/sm/product/list',params,callback)
}

const fetchHotSell = (callback)=>{
    requests.get('/sm/product/hot',{},callback)
}

const getProductDetail = (productid,callback)=>{
    requests.get('/sm/product/detail',{productId: productid},callback)
}

const commentList = (params,callback)=>{
    requests.get('/sm/product/comment',params,callback)
}

const addressList=(params,callback)=>{
    requests.get('/sm/address/list',params,callback)
}
const provinceList=(callback)=>{
    requests.get('/sm/province/all',{},callback)
}
const cityList=(provinceId,callback)=>{
    requests.get('/sm/province/getCityByProvinceId/'+provinceId,{},callback)
}
const areaList=(cityId,callback)=>{
    requests.get('/sm/province/getAreaByCityId/'+cityId,{},callback)
}
const createAddress = (params,callback)=>{
    requests.post('/sm/address/add',params,callback)
}
const userInfo = (callback)=>{
    requests.get('/sm/user/userInfo',{},callback)
}
const userEdit = (params,callback)=>{
    requests.post('/sm/user/edit',params,callback)
}

const changePassword = (params,callback)=>{
    requests.post('/sm/changePassword',params,callback)
}
export {userRegister,userLogin,catList,fetchProductList,
    getProductDetail,commentList,addressList,provinceList,
    cityList,areaList, createAddress,fetchHotSell,userEdit,userInfo,changePassword}

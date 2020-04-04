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

const getProductDetail = (productid,callback)=>{
    requests.get('/sm/product/detail',{productId: productid},callback)
}

const commentList = (params,callback)=>{
    requests.get('/sm/product/comment',params,callback)
}
export {userRegister,userLogin,catList,fetchProductList,getProductDetail,commentList}

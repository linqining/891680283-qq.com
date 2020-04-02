import requests from "./index";

console.log(requests);

// function userRegister(params){
//     return requests.post('/sm/register',params,()=>{})
// }
const userRegister=(params,callback)=>{
    requests.post('/sm/register',params,callback)
}

export {userRegister}

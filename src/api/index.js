import axios from 'axios'
import { Message } from 'element-ui';
let http = axios.create({
    baseURL: 'http://47.107.62.230:9081',
    timeout: 5000,
    // withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // },
    // transformRequest: [function (data) {
    //     let newData = '';
    //     for (let k in data) {
    //         if (data.hasOwnProperty(k) === true) {
    //             newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
    //         }
    //     }
    //     return newData;
    // }]
});

// 错误处理函数
const err = (error) => {
    // console.log(error)
    // if (error.response) {
    //     // const data = error.response.data
    //     // const token = Vue.ls.get(ACCESS_TOKEN)
    //     if (error.response.status === 403) {
    //         // Notify({ type: 'danger', message: data.message||data.msg });
    //     }
    //     if (error.response.status === 401) {
    //         // Notify({ type: 'danger', message: '你没有权限。' });
    //         // if (token) {
    //         //   store.dispatch('Logout').then(() => {
    //         //     setTimeout(() => {
    //         //       window.location.reload()
    //         //     }, 1500)
    //         //   })
    //         // }
    //     }
    // }
    return Promise.reject(error)
}


// request interceptor(请求拦截器)
http.interceptors.request.use(config => {
//   const token = Vue.ls.get(ACCESS_TOKEN)
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
}, err)

// response interceptor（接收拦截器）
http.interceptors.response.use((response) => {
    const res = response.data
    if (res.errcode !== '000000') {
        Message.error(res.errmsg)
        // return Promise.reject('error')
    } else {
        return res
    }
}, err)



function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        response(res);
    }).catch(function (err) {
        response(err);
    })
}






export default {
    get: function (url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}

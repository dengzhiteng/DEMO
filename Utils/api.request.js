import axios from 'axios'
import config from '@/config'
import { getToken, setToken } from '@/libs/util'

const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

const instance = axios.create({
	baseURL,
	withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(config => {
	config.headers['token'] = getToken();

	return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(res => {
	//console.log(res);
	//token 过期
	if(res.data.ecode=='101009803' || res.data.ecode=="10002"){
		setToken('');
		window.location.hash = '#/login'
	}

    return res;
}, error => {
	if (error.response) {

      //console.log(error.response.data);
      //console.log(error.response.status);
      //console.log(error.response.headers);

    } else if (error.request) {
      //console.log(error.request);
    } else {
      //console.log('Error', error.message);
    }

    //console.log(error.config);

    return Promise.reject(error);
});

export default instance

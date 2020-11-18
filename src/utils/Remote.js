import Taro from '@tarojs/taro';
import { HTTP_STATUS } from './HttpStatus';
import Config from '../../config/config';

class Remote {
    static METHOD = {
        GET: 'GET',
        POST: 'POST',
    };

    constructor() {
        Taro.addInterceptor(this.interceptor);
        this.request = Taro.request;
    }

    // 拦截器
    interceptor = function (chain) {
        const requestParams = chain.requestParams;
        const { method, data, url } = requestParams;

        console.log(`http ${method || 'GET'} --> ${url} data: `, data);
        // 发送请求之前处理

        return chain.proceed(requestParams)
            .then(res => {
            console.log(`http <-- ${url} result:`, res);
            switch(res.statusCode) {
                // TODO: 根据状态码进行拦截处理
                case HTTP_STATUS.SUCCESS:
                    break;
                default:
                    break;
            }
        })
    }

    /**
     * 获取当前所处环境。
     * 通过配置node环境变量来获取
     * 暂定
     * 开发环境： development
     * 线上环境： production
     * @return string
     */
    getEnv = () => {
        return process.env.NODE_ENV || 'production';
    };

     /**
     *  依照环境生成域名
     *  @return string
     */
    genDomainForEnv = (type) => {
        const env = this.getEnv();
        const typeJson = {
            default: `${Config[env].apiUrl}${Config[env].apiUrlFilter}`,
            auth: `${Config[env].authUrl}${Config[env].authUrlFilter}`,
            qiniu: `${Config[env].qiniuUrl}`,
            im: `${Config[env].imUrl}`,
            invoice: `${Config[env].targetInvoiceUrl}`,
        };
        return typeJson[type];
    };

    http = async ({ method, url, data, header = {} }) => {
        const options = {
            method,
            url,
            data,
            header,
        }

        // 获取token加入请求头
        const sessionToken = Taro.getStorageSync('sessionToken');
        if (sessionToken) {
            console.log('sessionToken', sessionToken, options);
            options.header.sessionToken = sessionToken;
        }

        try {
            const res = await this.request(options);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    get = async (url, data, urlType) => {
        const options = {
            data,
            url: `${this.genDomainForEnv(urlType || 'default')}${url}`,
            method: Remote.METHOD.GET,
        } 
        const res = await this.http(options)
        return res
    }

    post = async (url, data, urlType) => {
        const options = {
            data,
            url: `${this.genDomainForEnv(urlType || 'default')}${url}`,
            method: Remote.METHOD.POST,
        }
        const res = await this.http(options);
        return res
    }
}

const remote = new Remote();

export default {
    get: remote.get,
    post: remote.post,
}

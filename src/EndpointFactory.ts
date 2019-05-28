import {
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import { EndpointClass, UriFunction, EndpointsOptions, UriParamsInterface, AnyJson } from './types';



export default function EndpointFactory(axiosInstance: AxiosInstance) {
  return class ApiClient<UriParams extends any = {}> implements EndpointClass<UriParams>{
    
    uri: string;
    uriFunction: UriFunction<UriParams>;
    endpointOptions: AxiosRequestConfig;

    constructor(endpoint: string | UriFunction<UriParams>, endpointOptions: AxiosRequestConfig = {}) {
      if (typeof endpoint === 'string') {
        this.uri = endpoint;
      } else {
        this.uriFunction = endpoint;
      }
      this.endpointOptions = endpointOptions;
    }
    get = (options: EndpointsOptions<UriParams> = {}) => {
      const { uriParams, ...endpointOptions } = options;
      return axiosInstance({
        url: this.uri || this.uriFunction(uriParams),
        responseType: 'json',
        ...this.endpointOptions,
        ...endpointOptions,
      });
    };
    post = (payload: AnyJson = {}, options: EndpointsOptions<UriParams> = {}) => {
      const { params = {}, uriParams, ...endpointOptions } = options;
      return axiosInstance({
        method: 'post',
        url: this.uri || this.uriFunction(uriParams),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    put = (payload: AnyJson = {}, options: EndpointsOptions<UriParams> = {}) => {
      const { params = {}, uriParams, ...endpointOptions } = options;
      return axiosInstance({
        method: 'put',
        url: this.uri || this.uriFunction(uriParams),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    patch = (payload: AnyJson = {}, options: EndpointsOptions<UriParams> = {}) => {
      const { params = {}, uriParams, ...endpointOptions } = options;
      return axiosInstance({
        method: 'patch',
        url: this.uri || this.uriFunction(uriParams),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    delete = (options: EndpointsOptions<UriParams> = {}) => {
      const { params = {}, uriParams, ...endpointOptions } = options;
      return axiosInstance({
        method: 'delete',
        url: this.uri || this.uriFunction(uriParams),
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
  };
}

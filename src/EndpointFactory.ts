import {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosPromise,
} from 'axios';
import { EndpointClass, UriFunction, EndpointsOptions } from './types';

const EndpointFactory = (axiosInstance: AxiosInstance): typeof EndpointClass => class ApiClient<UriParams> extends EndpointClass<UriParams>{
    
  public uri: string;
  public uriFunction: UriFunction<UriParams>;
  public endpointOptions: AxiosRequestConfig;

  public get = <ResponseTypeAxios = any>(options: EndpointsOptions<UriParams> = {}): AxiosPromise<ResponseTypeAxios> => {
    const { uriParams, ...endpointOptions } = options;
    return axiosInstance({
      url: this.uri || this.uriFunction(uriParams),
      responseType: 'json',
      ...this.endpointOptions,
      ...endpointOptions,
    });
  };
  public post = <ResponseTypeAxios = any>(payload: any = {}, options: EndpointsOptions<UriParams> = {}): AxiosPromise<ResponseTypeAxios> => {
    const { uriParams, ...endpointOptions } = options;
    return axiosInstance({
      method: 'post',
      url: this.uri || this.uriFunction(uriParams),
      data: payload,
      responseType: 'json',
      ...endpointOptions,
    });
  };
  public put = <ResponseTypeAxios = any>(payload: any = {}, options: EndpointsOptions<UriParams> = {}): AxiosPromise<ResponseTypeAxios> => {
    const {  uriParams, ...endpointOptions } = options;
    return axiosInstance({
      method: 'put',
      url: this.uri || this.uriFunction(uriParams),
      data: payload,
      responseType: 'json',
      ...endpointOptions,
    });
  };
  public patch = <ResponseTypeAxios = any>(payload: any = {}, options: EndpointsOptions<UriParams> = {}): AxiosPromise<ResponseTypeAxios> => {
    const { uriParams, ...endpointOptions } = options;
    return axiosInstance({
      method: 'patch',
      url: this.uri || this.uriFunction(uriParams),
      data: payload,
      responseType: 'json',
      ...endpointOptions,
    });
  };
  public delete = <ResponseTypeAxios = any>(options: EndpointsOptions<UriParams> = {}): AxiosPromise<ResponseTypeAxios> => {
    const { uriParams, ...endpointOptions } = options;
    return axiosInstance({
      method: 'delete',
      url: this.uri || this.uriFunction(uriParams),
      responseType: 'json',
      ...endpointOptions,
    });
  };
};


export default EndpointFactory;
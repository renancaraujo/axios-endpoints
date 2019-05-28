import { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import { UriFunction, EndpointsOptions, AnyJson } from './types';
declare const EndpointFactory: (axiosInstance: AxiosInstance) => {
    new <UriParams = any>(endpoint: string | UriFunction<UriParams>, endpointOptions?: AxiosRequestConfig): {
        uri: string;
        uriFunction: UriFunction<UriParams>;
        endpointOptions: AxiosRequestConfig;
        get: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
        post: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
        put: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
        patch: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
        delete: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    };
};
export default EndpointFactory;

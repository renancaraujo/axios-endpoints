import { AxiosRequestConfig, AxiosPromise } from 'axios';
export declare type UriFunction<UriParams> = (uriParams: UriParams) => string;
export interface UriParamsWrapper<UriParams> {
    uriParams?: UriParams;
}
export interface EndpointsOptions<UriParams> extends AxiosRequestConfig, UriParamsWrapper<UriParams> {
}
export declare class EndpointClass<UriParams = any> {
    uri: string;
    uriFunction: UriFunction<UriParams>;
    endpointOptions: AxiosRequestConfig;
    constructor(endpoint: string | UriFunction<UriParams>, endpointOptions?: AxiosRequestConfig);
    get: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    post: <ResponseTypeAxios = any>(payload?: any, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    put: <ResponseTypeAxios = any>(payload?: any, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    patch: <ResponseTypeAxios = any>(payload?: any, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    delete: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
}

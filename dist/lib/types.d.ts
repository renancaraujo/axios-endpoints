import { AxiosRequestConfig, AxiosPromise } from 'axios';
export declare type UriFunction<UriParams> = (uriParams: UriParams) => string;
export declare type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
export interface JsonMap {
    [key: string]: AnyJson;
}
export interface JsonArray extends Array<AnyJson> {
}
export interface UriParamsInterface {
    [key: string]: AnyJson;
}
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
    post: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    put: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    patch: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
    delete: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
}

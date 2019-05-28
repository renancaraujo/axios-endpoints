import { AxiosRequestConfig } from 'axios';
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
export interface EndpointClass<UriParams = any> {
    uri: string;
    uriFunction: UriFunction<UriParams>;
    endpointOptions: AxiosRequestConfig;
}

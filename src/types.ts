import {
    AxiosRequestConfig,
    AxiosInstance,
  } from 'axios';
  
export type UriFunction<UriParams> = (uriParams: UriParams) => string;

export type AnyJson =  boolean | number | string | null | IJsonArray | IJsonMap;
export interface IJsonMap {  [key: string]: AnyJson; }
export interface IJsonArray extends Array<AnyJson> {}

export interface UriParamsInterface{
  [key: string]: AnyJson;
}
export interface UriParamsWrapper<UriParams> {
  uriParams?: UriParams;
}

export interface EndpointsOptions<UriParams> extends AxiosRequestConfig, UriParamsWrapper<UriParams> {}


export interface EndpointClass<UriParams> {
  uri: string;
  uriFunction: UriFunction<UriParams>;
  endpointOptions: AxiosRequestConfig;
}
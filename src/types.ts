import {
  AxiosRequestConfig,
  AxiosPromise,
} from 'axios';
  
export type UriFunction<UriParams> = (uriParams: UriParams) => string;

export type AnyJson =  boolean | number | string | null | JsonArray | JsonMap;
export interface JsonMap {  [key: string]: AnyJson }
export interface JsonArray extends Array<AnyJson> {}

export interface UriParamsInterface{
  [key: string]: AnyJson;
}
export interface UriParamsWrapper<UriParams>     {
  uriParams?: UriParams;
}

export interface EndpointsOptions<UriParams> extends AxiosRequestConfig, UriParamsWrapper<UriParams> {}


export class EndpointClass<UriParams = any> {
  public uri: string;
  public uriFunction: UriFunction<UriParams>;
  public endpointOptions: AxiosRequestConfig;

  public constructor(endpoint: string | UriFunction<UriParams>, endpointOptions: AxiosRequestConfig = {}) {
    if (typeof endpoint === 'string') {
      this.uri = endpoint;
    } else {
      this.uriFunction = endpoint;
    }
    this.endpointOptions = endpointOptions;
  }

  public get: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
  public post: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
  public put: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
  public patch: <ResponseTypeAxios = any>(payload?: AnyJson, options?: EndpointsOptions<UriParams>) => AxiosPromise<ResponseTypeAxios>;
  public delete: <ResponseTypeAxios = any>(options?: EndpointsOptions<UriParams>) =>  AxiosPromise<ResponseTypeAxios>;
  
}
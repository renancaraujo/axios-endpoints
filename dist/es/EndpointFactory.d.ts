import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { UriFunction, EndpointsOptions, AnyJson } from './types';
export default function EndpointFactory(axiosInstance: AxiosInstance): {
    new <UriParams extends any = {}>(endpoint: string | UriFunction<UriParams>, endpointOptions?: AxiosRequestConfig): {
        uri: string;
        uriFunction: UriFunction<UriParams>;
        endpointOptions: AxiosRequestConfig;
        get: (options?: EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        post: (payload?: AnyJson, options?: EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        put: (payload?: AnyJson, options?: EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        patch: (payload?: AnyJson, options?: EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        delete: (options?: EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
    };
};

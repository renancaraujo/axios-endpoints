import EndpointFactory from './EndpointFactory';
export declare const Endpoint: {
    new <UriParams extends any = {}>(endpoint: string | import("./types").UriFunction<UriParams>, endpointOptions?: import("axios").AxiosRequestConfig): {
        uri: string;
        uriFunction: import("./types").UriFunction<UriParams>;
        endpointOptions: import("axios").AxiosRequestConfig;
        get: (options?: import("./types").EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        post: (payload?: import("./types").AnyJson, options?: import("./types").EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        put: (payload?: import("./types").AnyJson, options?: import("./types").EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        patch: (payload?: import("./types").AnyJson, options?: import("./types").EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
        delete: (options?: import("./types").EndpointsOptions<UriParams>) => import("axios").AxiosPromise<any>;
    };
};
export default EndpointFactory;

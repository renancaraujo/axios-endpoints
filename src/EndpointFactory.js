export default function EndpointFactory(axiosInstance) {
  return class ApiClient {
    constructor(endpoint, endpointOptions) {
      if (typeof endpoint === 'string') {
        this.uri = endpoint;
      } else {
        this.uriFunction = endpoint;
      }
      this.endpointOptions = endpointOptions;
    }
    get = (options = {}) => {
      const { params = {}, uriParams = {}, ...endpointOptions } = options;
      return axiosInstance({
        url: this.uri || this.uriFunction({ ...uriParams }),
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    post = (payload = {}, options = {}) => {
      const { params = {}, uriParams = {}, ...endpointOptions } = options;
      return axiosInstance({
        method: 'post',
        url: this.uri || this.uriFunction({ ...uriParams }),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    put = (payload = {}, options = {}) => {
      const { params = {}, uriParams = {}, ...endpointOptions } = options;
      return axiosInstance({
        method: 'put',
        url: this.uri || this.uriFunction({ ...uriParams }),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    patch = (payload = {}, options = {}) => {
      const { params = {}, uriParams = {}, ...endpointOptions } = options;
      return axiosInstance({
        method: 'patch',
        url: this.uri || this.uriFunction({ ...uriParams }),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
    delete = (options = {}) => {
      const { params = {}, uriParams = {}, ...endpointOptions } = options;
      return axiosInstance({
        method: 'delete',
        url: this.uri || this.uriFunction({ ...uriParams }),
        params,
        responseType: 'json',
        ...endpointOptions,
      });
    };
  };
}

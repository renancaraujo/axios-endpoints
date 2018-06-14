import axios from 'axios';

function EndpointFactory(axiosInstance) {
  return class ApiClient {
    constructor(endpoint, endpointOtions) {
      if (typeof endpoint === 'string') {
        this.uri = endpoint;
      } else {
        this.uriFunction = endpoint;
      }
      this.endpointOtions = endpointOtions;
    }
    get(options = {}) {
      const { params = {}, uriParams = {}, ...endpointOtions } = options;
      return axiosInstance({
        url: this.uri || this.uriFunction({ ...uriParams }),
        params,
        responseType: 'json',
        ...endpointOtions,
      });
    }
    post(payload = {}, options = {}) {
      const { params = {}, uriParams = {}, ...endpointOtions } = options;
      return axiosInstance({
        method: 'post',
        url: this.uri || this.uriFunction({ ...uriParams }),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOtions,
      });
    }
    put(payload = {}, options = {}) {
      const { params = {}, uriParams = {}, ...endpointOtions } = options;
      return axiosInstance({
        method: 'put',
        url: this.uri || this.uriFunction({ ...uriParams }),
        data: payload,
        params,
        responseType: 'json',
        ...endpointOtions,
      });
    }
    delete(options = {}) {
      const { params = {}, uriParams = {}, ...endpointOtions } = options;
      return axiosInstance({
        method: 'delete',
        url: this.uri || this.uriFunction({ ...uriParams }),
        params,
        responseType: 'json',
        ...endpointOtions,
      });
    }
  };
}

const Endpoint = EndpointFactory(axios);

export default EndpointFactory;
export { Endpoint };

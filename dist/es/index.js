import axios from 'axios';

function EndpointFactory(axiosInstance) {
  var _temp;

  return _temp = function ApiClient(endpoint, _endpointOptions) {
    var _this = this;

    babelHelpers.classCallCheck(this, ApiClient);
    babelHelpers.defineProperty(this, "get", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$params = options.params,
          params = _options$params === void 0 ? {} : _options$params,
          _options$uriParams = options.uriParams,
          uriParams = _options$uriParams === void 0 ? {} : _options$uriParams,
          endpointOptions = babelHelpers.objectWithoutProperties(options, ["params", "uriParams"]);
      return axiosInstance(babelHelpers.objectSpread({
        url: _this.uri || _this.uriFunction(babelHelpers.objectSpread({}, uriParams)),
        params: params,
        responseType: 'json'
      }, endpointOptions));
    });
    babelHelpers.defineProperty(this, "post", function () {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$params2 = options.params,
          params = _options$params2 === void 0 ? {} : _options$params2,
          _options$uriParams2 = options.uriParams,
          uriParams = _options$uriParams2 === void 0 ? {} : _options$uriParams2,
          endpointOptions = babelHelpers.objectWithoutProperties(options, ["params", "uriParams"]);
      return axiosInstance(babelHelpers.objectSpread({
        method: 'post',
        url: _this.uri || _this.uriFunction(babelHelpers.objectSpread({}, uriParams)),
        data: payload,
        params: params,
        responseType: 'json'
      }, endpointOptions));
    });
    babelHelpers.defineProperty(this, "put", function () {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$params3 = options.params,
          params = _options$params3 === void 0 ? {} : _options$params3,
          _options$uriParams3 = options.uriParams,
          uriParams = _options$uriParams3 === void 0 ? {} : _options$uriParams3,
          endpointOptions = babelHelpers.objectWithoutProperties(options, ["params", "uriParams"]);
      return axiosInstance(babelHelpers.objectSpread({
        method: 'put',
        url: _this.uri || _this.uriFunction(babelHelpers.objectSpread({}, uriParams)),
        data: payload,
        params: params,
        responseType: 'json'
      }, endpointOptions));
    });
    babelHelpers.defineProperty(this, "patch", function () {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$params4 = options.params,
          params = _options$params4 === void 0 ? {} : _options$params4,
          _options$uriParams4 = options.uriParams,
          uriParams = _options$uriParams4 === void 0 ? {} : _options$uriParams4,
          endpointOptions = babelHelpers.objectWithoutProperties(options, ["params", "uriParams"]);
      return axiosInstance(babelHelpers.objectSpread({
        method: 'patch',
        url: _this.uri || _this.uriFunction(babelHelpers.objectSpread({}, uriParams)),
        data: payload,
        params: params,
        responseType: 'json'
      }, endpointOptions));
    });
    babelHelpers.defineProperty(this, "delete", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$params5 = options.params,
          params = _options$params5 === void 0 ? {} : _options$params5,
          _options$uriParams5 = options.uriParams,
          uriParams = _options$uriParams5 === void 0 ? {} : _options$uriParams5,
          endpointOptions = babelHelpers.objectWithoutProperties(options, ["params", "uriParams"]);
      return axiosInstance(babelHelpers.objectSpread({
        method: 'delete',
        url: _this.uri || _this.uriFunction(babelHelpers.objectSpread({}, uriParams)),
        params: params,
        responseType: 'json'
      }, endpointOptions));
    });

    if (typeof endpoint === 'string') {
      this.uri = endpoint;
    } else {
      this.uriFunction = endpoint;
    }

    this.endpointOptions = _endpointOptions;
  }, _temp;
}

var Endpoint = EndpointFactory(axios);

export default EndpointFactory;
export { Endpoint };

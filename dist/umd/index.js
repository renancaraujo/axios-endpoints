(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (factory((global.axiosEndpoints = {}),global.axios));
}(this, (function (exports,axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function EndpointFactory(axiosInstance) {
    return function ApiClient(endpoint, _endpointOptions) {
      var _this = this;

      _classCallCheck(this, ApiClient);

      _defineProperty(this, "get", function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _options$params = options.params,
            params = _options$params === void 0 ? {} : _options$params,
            _options$uriParams = options.uriParams,
            uriParams = _options$uriParams === void 0 ? {} : _options$uriParams,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          params: params,
          responseType: 'json'
        }, endpointOptions));
      });

      _defineProperty(this, "post", function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$params2 = options.params,
            params = _options$params2 === void 0 ? {} : _options$params2,
            _options$uriParams2 = options.uriParams,
            uriParams = _options$uriParams2 === void 0 ? {} : _options$uriParams2,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          method: 'post',
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          data: payload,
          params: params,
          responseType: 'json'
        }, endpointOptions));
      });

      _defineProperty(this, "put", function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$params3 = options.params,
            params = _options$params3 === void 0 ? {} : _options$params3,
            _options$uriParams3 = options.uriParams,
            uriParams = _options$uriParams3 === void 0 ? {} : _options$uriParams3,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          method: 'put',
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          data: payload,
          params: params,
          responseType: 'json'
        }, endpointOptions));
      });

      _defineProperty(this, "patch", function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$params4 = options.params,
            params = _options$params4 === void 0 ? {} : _options$params4,
            _options$uriParams4 = options.uriParams,
            uriParams = _options$uriParams4 === void 0 ? {} : _options$uriParams4,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          method: 'patch',
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          data: payload,
          params: params,
          responseType: 'json'
        }, endpointOptions));
      });

      _defineProperty(this, "delete", function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _options$params5 = options.params,
            params = _options$params5 === void 0 ? {} : _options$params5,
            _options$uriParams5 = options.uriParams,
            uriParams = _options$uriParams5 === void 0 ? {} : _options$uriParams5,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          method: 'delete',
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          params: params,
          responseType: 'json'
        }, endpointOptions));
      });

      _defineProperty(this, "patch", function () {
        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$params6 = options.params,
            params = _options$params6 === void 0 ? {} : _options$params6,
            _options$uriParams6 = options.uriParams,
            uriParams = _options$uriParams6 === void 0 ? {} : _options$uriParams6,
            endpointOptions = _objectWithoutProperties(options, ["params", "uriParams"]);

        return axiosInstance(_objectSpread({
          method: 'put',
          url: _this.uri || _this.uriFunction(_objectSpread({}, uriParams)),
          data: payload,
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
    };
  }

  var Endpoint = EndpointFactory(axios);

  exports.Endpoint = Endpoint;
  exports.default = EndpointFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

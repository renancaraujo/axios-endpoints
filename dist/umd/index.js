(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (factory((global.axiosEndpoints = {}),global.axios));
}(this, (function (exports,axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  function EndpointFactory(axiosInstance) {
    return function () {
      function ApiClient(endpoint, endpointOptions) {
        classCallCheck(this, ApiClient);

        if (typeof endpoint === 'string') {
          this.uri = endpoint;
        } else {
          this.uriFunction = endpoint;
        }
        this.endpointOptions = endpointOptions;
      }

      createClass(ApiClient, [{
        key: 'get',
        value: function get$$1() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$params = options.params,
              params = _options$params === undefined ? {} : _options$params,
              _options$uriParams = options.uriParams,
              uriParams = _options$uriParams === undefined ? {} : _options$uriParams,
              endpointOptions = objectWithoutProperties(options, ['params', 'uriParams']);

          return axiosInstance(_extends({
            url: this.uri || this.uriFunction(_extends({}, uriParams)),
            params: params,
            responseType: 'json'
          }, endpointOptions));
        }
      }, {
        key: 'post',
        value: function post() {
          var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _options$params2 = options.params,
              params = _options$params2 === undefined ? {} : _options$params2,
              _options$uriParams2 = options.uriParams,
              uriParams = _options$uriParams2 === undefined ? {} : _options$uriParams2,
              endpointOptions = objectWithoutProperties(options, ['params', 'uriParams']);

          return axiosInstance(_extends({
            method: 'post',
            url: this.uri || this.uriFunction(_extends({}, uriParams)),
            data: payload,
            params: params,
            responseType: 'json'
          }, endpointOptions));
        }
      }, {
        key: 'put',
        value: function put() {
          var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _options$params3 = options.params,
              params = _options$params3 === undefined ? {} : _options$params3,
              _options$uriParams3 = options.uriParams,
              uriParams = _options$uriParams3 === undefined ? {} : _options$uriParams3,
              endpointOptions = objectWithoutProperties(options, ['params', 'uriParams']);

          return axiosInstance(_extends({
            method: 'put',
            url: this.uri || this.uriFunction(_extends({}, uriParams)),
            data: payload,
            params: params,
            responseType: 'json'
          }, endpointOptions));
        }
      }, {
        key: 'delete',
        value: function _delete() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _options$params4 = options.params,
              params = _options$params4 === undefined ? {} : _options$params4,
              _options$uriParams4 = options.uriParams,
              uriParams = _options$uriParams4 === undefined ? {} : _options$uriParams4,
              endpointOptions = objectWithoutProperties(options, ['params', 'uriParams']);

          return axiosInstance(_extends({
            method: 'delete',
            url: this.uri || this.uriFunction(_extends({}, uriParams)),
            params: params,
            responseType: 'json'
          }, endpointOptions));
        }
      }]);
      return ApiClient;
    }();
  }

  var Endpoint = EndpointFactory(axios);

  exports.Endpoint = Endpoint;
  exports.default = EndpointFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

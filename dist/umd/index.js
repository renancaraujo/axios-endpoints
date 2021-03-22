(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
  typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.axiosEndpoints = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  var EndpointClass = /** @class */ (function () {
      function EndpointClass(endpoint, endpointOptions) {
          if (endpointOptions === void 0) { endpointOptions = {}; }
          if (typeof endpoint === 'string') {
              this.uri = endpoint;
          }
          else {
              this.uriFunction = endpoint;
          }
          this.endpointOptions = endpointOptions;
      }
      return EndpointClass;
  }());

  var EndpointFactory = function (axiosInstance) { return /** @class */ (function (_super) {
      __extends(ApiClient, _super);
      function ApiClient() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.get = function (options) {
              if (options === void 0) { options = {}; }
              var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
              return axiosInstance(__assign(__assign({ url: _this.uri || _this.uriFunction(uriParams), responseType: 'json' }, _this.endpointOptions), endpointOptions));
          };
          _this.post = function (payload, options) {
              if (payload === void 0) { payload = {}; }
              if (options === void 0) { options = {}; }
              var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
              return axiosInstance(__assign({ method: 'post', url: _this.uri || _this.uriFunction(uriParams), data: payload, responseType: 'json' }, endpointOptions));
          };
          _this.put = function (payload, options) {
              if (payload === void 0) { payload = {}; }
              if (options === void 0) { options = {}; }
              var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
              return axiosInstance(__assign({ method: 'put', url: _this.uri || _this.uriFunction(uriParams), data: payload, responseType: 'json' }, endpointOptions));
          };
          _this.patch = function (payload, options) {
              if (payload === void 0) { payload = {}; }
              if (options === void 0) { options = {}; }
              var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
              return axiosInstance(__assign({ method: 'patch', url: _this.uri || _this.uriFunction(uriParams), data: payload, responseType: 'json' }, endpointOptions));
          };
          _this.delete = function (options) {
              if (options === void 0) { options = {}; }
              var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
              return axiosInstance(__assign({ method: 'delete', url: _this.uri || _this.uriFunction(uriParams), responseType: 'json' }, endpointOptions));
          };
          return _this;
      }
      return ApiClient;
  }(EndpointClass)); };

  var Endpoint = EndpointFactory(axios__default['default']);

  exports.Endpoint = Endpoint;
  exports.default = EndpointFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

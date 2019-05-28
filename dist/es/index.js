import axios from 'axios';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var EndpointFactory = function (axiosInstance) {
    return /** @class */ (function () {
        function ApiClient(endpoint, endpointOptions) {
            var _this = this;
            if (endpointOptions === void 0) { endpointOptions = {}; }
            this.get = function (options) {
                if (options === void 0) { options = {}; }
                var uriParams = options.uriParams, endpointOptions = __rest(options, ["uriParams"]);
                return axiosInstance(__assign({ url: _this.uri || _this.uriFunction(uriParams), responseType: 'json' }, _this.endpointOptions, endpointOptions));
            };
            this.post = function (payload, options) {
                if (payload === void 0) { payload = {}; }
                if (options === void 0) { options = {}; }
                var _a = options.params, params = _a === void 0 ? {} : _a, uriParams = options.uriParams, endpointOptions = __rest(options, ["params", "uriParams"]);
                return axiosInstance(__assign({ method: 'post', url: _this.uri || _this.uriFunction(uriParams), data: payload, params: params, responseType: 'json' }, endpointOptions));
            };
            this.put = function (payload, options) {
                if (payload === void 0) { payload = {}; }
                if (options === void 0) { options = {}; }
                var _a = options.params, params = _a === void 0 ? {} : _a, uriParams = options.uriParams, endpointOptions = __rest(options, ["params", "uriParams"]);
                return axiosInstance(__assign({ method: 'put', url: _this.uri || _this.uriFunction(uriParams), data: payload, params: params, responseType: 'json' }, endpointOptions));
            };
            this.patch = function (payload, options) {
                if (payload === void 0) { payload = {}; }
                if (options === void 0) { options = {}; }
                var _a = options.params, params = _a === void 0 ? {} : _a, uriParams = options.uriParams, endpointOptions = __rest(options, ["params", "uriParams"]);
                return axiosInstance(__assign({ method: 'patch', url: _this.uri || _this.uriFunction(uriParams), data: payload, params: params, responseType: 'json' }, endpointOptions));
            };
            this.delete = function (options) {
                if (options === void 0) { options = {}; }
                var _a = options.params, params = _a === void 0 ? {} : _a, uriParams = options.uriParams, endpointOptions = __rest(options, ["params", "uriParams"]);
                return axiosInstance(__assign({ method: 'delete', url: _this.uri || _this.uriFunction(uriParams), params: params, responseType: 'json' }, endpointOptions));
            };
            if (typeof endpoint === 'string') {
                this.uri = endpoint;
            }
            else {
                this.uriFunction = endpoint;
            }
            this.endpointOptions = endpointOptions;
        }
        return ApiClient;
    }());
};

var Endpoint = EndpointFactory(axios);

export default EndpointFactory;
export { Endpoint };

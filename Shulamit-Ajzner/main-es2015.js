(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div style=\"overflow-x:auto;\">\n    <table>\n      <tr>\n        <th *ngFor=\"let favorite of arrOfFavorites\">\n          <div class=\"block\"> {{favorite.nameOfCity}}\n            <br>{{favorite.currentTemp + '&deg;C'}}\n            <br>\n            <br>{{favorite.iconPhrase}}\n          </div>\n        </th>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"input-group mb-3\">\n    <mat-form-field>\n      <input type=\"text\" matInput [(ngModel)]=\"cityName\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFunc()\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"search()\">search</button>\n    </div>\n  </div>\n  <h1>{{arrOfDayAndTemp[0].cityName}}</h1>\n  <h2>The current weather is: {{currentTemp}} </h2>\n  <div style=\"overflow-x:auto;\">\n    <table>\n      <tr>\n        <th *ngFor=\"let dayandtemp of arrOfDayAndTemp\">\n          <div class=\"block\"> {{dayandtemp.day}}\n            <br>{{dayandtemp.temp + '&deg;C'}}\n            <br>\n            <br>{{dayandtemp.iconPhrase}}\n          </div>\n        </th>\n      </tr>\n    </table>\n  </div>\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"addToFavorites(cityName)\">\n      {{ favoriteExists === true ? 'remove from favorites' : 'add to favorties' }}</button>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Bootstrap Example</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n</head>\n<body>\n\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li  routerLinkActive=\"active\"><a routerLink=\"\">Home</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/favorites\">favorites</a></li>\n    </ul>\n  </div>\n</nav>\n\n\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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
    }
    return __assign.apply(this, arguments);
}

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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/favorites.service */ "./src/app/services/favorites.service.ts");



let AppComponent = class AppComponent {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
        this.title = 'Shulamit-Ajzner';
        this.favoritesService.initBooleanOfFavoriteExists();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");














// import {MatAutocomplete} from '@angular/material';
const appRoutes = [
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
    },
    {
        path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"]
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        ],
        providers: [_services_weather_service__WEBPACK_IMPORTED_MODULE_9__["WeatherService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block {\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 150px;\r\n  padding: 5px;\r\n  border: 1px solid #3a5dff;\r\n  background-color: #85d6ff;\r\n  border-collapse: separate;\r\n  border-spacing: 15px;\r\n  margin: 5px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2E1ZGZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NWQ2ZmY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICBib3JkZXItc3BhY2luZzogMTVweDtcclxuICBtYXJnaW46IDVweDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");



let FavoritesComponent = class FavoritesComponent {
    constructor(favoritesService) {
        this.favoritesService = favoritesService;
        this.arrOfFavorites = [];
    }
    ngOnInit() {
        this.arrOfFavorites = this.favoritesService.getFavorites();
        console.log('the arrrrr is = ' + this.arrOfFavorites);
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/components/favorites/favorites.component.css")).default]
    })
], FavoritesComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block {\r\n  display: inline-block;\r\n  width: 100px;\r\n  height: 150px;\r\n  padding: 5px;\r\n  border: 1px solid #3a5dff;\r\n  background-color: #85d6ff;\r\n  border-collapse: separate;\r\n  border-spacing: 15px;\r\n  margin: 5px;\r\n\r\n}\r\n\r\nth {\r\n  /*float: left;*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYTVkZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZDZmZjtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG5cclxufVxyXG5cclxudGgge1xyXG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auto_complete_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auto-complete.service */ "./src/app/services/auto-complete.service.ts");






let MainComponent = class MainComponent {
    constructor(weatherService, favoritesService, autoCompleteService) {
        this.weatherService = weatherService;
        this.favoritesService = favoritesService;
        this.autoCompleteService = autoCompleteService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cityName = sessionStorage.getItem('cityName');
            if (this.cityName === null) {
                this.cityName = 'tel aviv';
            }
            sessionStorage.setItem('cityName', this.cityName);
            // this.filteredOptions = this.myControl.valueChanges
            //   .pipe(
            //     map(value => this._filter(value))
            //   );
            // localStorage.clear();
            this.favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
            // const IDcity = await this.weatherService.getCityApiKey(this.cityName);
            // this.currentTemp = await this.weatherService.getCurrentTemp(328328);
            // this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(IDcity, this.cityName);
            this.arrOfDayAndTemp = yield this.weatherService.getFiveDaysForecast(328328, this.cityName);
        });
    }
    _filter(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.options = yield this.autoCompleteService.getAutoCompletedDaysOptions(value);
        });
    }
    search() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            sessionStorage.setItem('cityName', this.cityName);
            // const IDcity = await this.weatherService.getCityApiKey(this.cityName);
            // if (IDcity === null) {
            //   alert('oops! no such city. try again:)');
            //   return;
            // }
            // this.arrOfDayAndTemp = await this.weatherService.getFiveDaysForecast(IDcity, this.cityName);
            this.currentTemp = yield this.weatherService.getCurrentTemp(328328);
            this.arrOfDayAndTemp = yield this.weatherService.getFiveDaysForecast(328328, this.cityName);
        });
    }
    addToFavorites(cityName) {
        const favoriteExists = this.favoritesService.getBooleanOfFavoriteExists();
        if (favoriteExists === true) {
            this.favoritesService.removeFromFavorites(cityName);
        }
        else {
            const LocationToSet = {
                ID: this.rand(),
                nameOfCity: cityName,
                currentTemp: this.arrOfDayAndTemp[0].temp,
                iconPhrase: this.arrOfDayAndTemp[0].iconPhrase
            };
            this.favoritesService.addToFavorites(LocationToSet);
        }
        this.favoriteExists = !this.favoriteExists;
    }
    rand() {
        return Math.random().toString(36).substr(2); // remove `0.`
    }
    displayFunc(subject) {
        return subject ? subject : undefined;
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
    { type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"] },
    { type: _services_auto_complete_service__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/services/auto-complete.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auto-complete.service.ts ***!
  \***************************************************/
/*! exports provided: AutoCompleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteService", function() { return AutoCompleteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AutoCompleteService = class AutoCompleteService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'G25DGfAiQWANcDJXD8b8LhpqsksMFVXG';
        this.autoCompleteUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.apiKey +
            '&q=';
    }
    getAutoCompletedDaysOptions(letters) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // if (letters === null) {
            //   const obj: any = await this.http.get(this.autoCompleteUrl + letters + '&language=en-us').toPromise();
            //   const arrOfAutoCompletedCities = [];
            //   for (let i = 0; i < Object.keys(obj).length; i++) {
            //     arrOfAutoCompletedCities.push(obj[i].LocalizedName);
            //   }
            //   return arrOfAutoCompletedCities;
            // }
        });
    }
};
AutoCompleteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AutoCompleteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AutoCompleteService);



/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritesService = class FavoritesService {
    constructor() {
        this.arrOfFavorites = [];
        this.favoriteExists = false;
    }
    addToFavorites(Location) {
        let arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (!arrOfFavorites) {
            arrOfFavorites = this.arrOfFavorites;
        }
        arrOfFavorites.push(Location);
        localStorage.setItem('favorites', JSON.stringify(arrOfFavorites));
        this.updateBooleanOfFavoriteExists();
    }
    removeFromFavorites(cityName) {
        const arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
        const filteredArray = arrOfFavorites.filter(item => !(item.nameOfCity === cityName));
        // filteredArray.pop(Location);
        localStorage.setItem('favorites', JSON.stringify(filteredArray));
        this.updateBooleanOfFavoriteExists();
    }
    getFavorites() {
        const arrOfFavorites = JSON.parse(localStorage.getItem('favorites'));
        return arrOfFavorites;
    }
    initBooleanOfFavoriteExists() {
        localStorage.setItem('favoriteExists', JSON.stringify(this.favoriteExists));
    }
    updateBooleanOfFavoriteExists() {
        this.favoriteExists = !this.favoriteExists;
        localStorage.setItem('favoriteExists', JSON.stringify(this.favoriteExists));
    }
    getBooleanOfFavoriteExists() {
        return JSON.parse(localStorage.getItem('favoriteExists'));
    }
};
FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavoritesService);



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'G25DGfAiQWANcDJXD8b8LhpqsksMFVXG';
        this.fiveDayForcastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
        this.citySearchUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
        this.currentTempUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    getCityApiKey(cityName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const res = yield this.http.get(this.citySearchUrl +
                this.apiKey +
                '&q=' +
                cityName +
                '&language=en-us&details=false').toPromise();
            if (!res[0]) {
                return null;
            }
            console.log(res[0].Key);
            return res[0].Key;
        });
    }
    getCurrentTemp(IDcity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const currentTemp = await this.http.get(this.currentTempUrl +
            //   IDcity +
            //   '?apikey=' +
            //   this.apiKey +
            //   '&language=en-us&details=false').toPromise();
            // return currentTemp[0].WeatherText;
        });
    }
    getFiveDaysForecast(IDcity, cityName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const obj: any = await this.http.get(this.fiveDayForcastUrl + IDcity +
            //   '?apikey=' + this.apiKey + '&language=en-us&details=false&metric=false').toPromise();
            // console.log(obj.DailyForecasts[0].Date);
            const obj = {
                Headline: {
                    EffectiveDate: '2019-10-03T20:00:00+01:00',
                    EffectiveEpochDate: 1570129200,
                    Severity: 1,
                    Text: 'Tropical Rainstorm Lorenzo will affect the area Thursday evening',
                    Category: 'tropical',
                    EndDate: '2019-10-04T02:00:00+01:00',
                    EndEpochDate: 1570150800,
                    MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/extended-weather-forecast/328328?lang=en-us',
                    Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us'
                },
                DailyForecasts: [
                    {
                        Date: '2019-10-03T07:00:00+01:00',
                        EpochDate: 1570082400,
                        Temperature: {
                            Minimum: {
                                Value: 52,
                                Unit: 'F',
                                UnitType: 18
                            },
                            Maximum: {
                                Value: 57,
                                Unit: 'F',
                                UnitType: 18
                            }
                        },
                        Day: {
                            Icon: 3,
                            IconPhrase: 'Partly sunny',
                            HasPrecipitation: false
                        },
                        Night: {
                            Icon: 12,
                            IconPhrase: 'Showers',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Sources: [
                            'AccuWeather'
                        ],
                        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us',
                        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us'
                    },
                    {
                        Date: '2019-10-04T07:00:00+01:00',
                        EpochDate: 1570168800,
                        Temperature: {
                            Minimum: {
                                Value: 50,
                                Unit: 'F',
                                UnitType: 18
                            },
                            Maximum: {
                                Value: 59,
                                Unit: 'F',
                                UnitType: 18
                            }
                        },
                        Day: {
                            Icon: 18,
                            IconPhrase: 'Rain',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Night: {
                            Icon: 12,
                            IconPhrase: 'Showers',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Sources: [
                            'AccuWeather'
                        ],
                        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us',
                        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&lang=en-us'
                    },
                    {
                        Date: '2019-10-05T07:00:00+01:00',
                        EpochDate: 1570255200,
                        Temperature: {
                            Minimum: {
                                Value: 52,
                                Unit: 'F',
                                UnitType: 18
                            },
                            Maximum: {
                                Value: 60,
                                Unit: 'F',
                                UnitType: 18
                            }
                        },
                        Day: {
                            Icon: 6,
                            IconPhrase: 'Mostly cloudy',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Night: {
                            Icon: 40,
                            IconPhrase: 'Mostly cloudy w/ showers',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Sources: [
                            'AccuWeather'
                        ],
                        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us',
                        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&lang=en-us'
                    },
                    {
                        Date: '2019-10-06T07:00:00+01:00',
                        EpochDate: 1570341600,
                        Temperature: {
                            Minimum: {
                                Value: 49,
                                Unit: 'F',
                                UnitType: 18
                            },
                            Maximum: {
                                Value: 58,
                                Unit: 'F',
                                UnitType: 18
                            }
                        },
                        Day: {
                            Icon: 18,
                            IconPhrase: 'Rain',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Night: {
                            Icon: 36,
                            IconPhrase: 'Intermittent clouds',
                            HasPrecipitation: false
                        },
                        Sources: [
                            'AccuWeather'
                        ],
                        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us',
                        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&lang=en-us'
                    },
                    {
                        Date: '2019-10-07T07:00:00+01:00',
                        EpochDate: 1570428000,
                        Temperature: {
                            Minimum: {
                                Value: 55,
                                Unit: 'F',
                                UnitType: 18
                            },
                            Maximum: {
                                Value: 59,
                                Unit: 'F',
                                UnitType: 18
                            }
                        },
                        Day: {
                            Icon: 4,
                            IconPhrase: 'Intermittent clouds',
                            HasPrecipitation: false
                        },
                        Night: {
                            Icon: 18,
                            IconPhrase: 'Rain',
                            HasPrecipitation: true,
                            PrecipitationType: 'Rain',
                            PrecipitationIntensity: 'Light'
                        },
                        Sources: [
                            'AccuWeather'
                        ],
                        MobileLink: 'http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us',
                        Link: 'http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&lang=en-us'
                    }
                ]
            };
            console.log('hi1');
            // const arrOfDates = [];
            const arrOfDayAndTemp = [];
            for (const DailyForecast of obj.DailyForecasts) {
                // arrOfDates.push(DailyForecast.Date);
                const arrOfOneDate = DailyForecast.Date.slice(0, 10).split('-');
                const day = new Date(+arrOfOneDate[0], +arrOfOneDate[1] - 1, +arrOfOneDate[2]).getDay();
                const listOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                // const averageOfTemp = (DailyForecast.Temperature.Minimum.Value + DailyForecast.Temperature.Maximum.Value) / 2;
                const celci = (DailyForecast.Temperature.Maximum.Value - 32) * (5 / 9);
                arrOfDayAndTemp.push({ day: listOfDays[day], temp: Math.round(celci), iconPhrase: DailyForecast.Day.IconPhrase, cityName });
            }
            console.log(arrOfDayAndTemp);
            return arrOfDayAndTemp;
        });
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Programming\Webstorm\Shulamit-Ajzner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
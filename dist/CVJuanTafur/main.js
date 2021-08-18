(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juan Tafur\Documents\Juan tafur\githubJuanTafur\Curiculum Vitae\Curriculum-FrontEnd-Angular-\src\main.ts */"zUnb");


/***/ }),

/***/ "6Z70":
/*!****************************************************!*\
  !*** ./src/app/module/principal-routing.module.ts ***!
  \****************************************************/
/*! exports provided: PrincipalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalRoutingModule", function() { return PrincipalRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal/principal.component */ "aOi+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_1__["PrincipalComponent"]
    }
];
class PrincipalRoutingModule {
}
PrincipalRoutingModule.ɵfac = function PrincipalRoutingModule_Factory(t) { return new (t || PrincipalRoutingModule)(); };
PrincipalRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PrincipalRoutingModule });
PrincipalRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrincipalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "OOyK":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "containerHeader"], ["src", "./assets/microsoft.png", "alt", "Microsoft", "title", "Microsoft"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Juan Guillermo Tafur Ramirez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".containerHeader[_ngcontent-%COMP%] {\n  background-color: #4e7cdf;\n  color: white;\n  padding-top: 1rem;\n  line-height: 5rem;\n  padding-left: 37rem;\n  position: relative;\n  height: 100%;\n}\n\n.containerHeader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lckhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2RmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM3cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXJIZWFkZXIgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "Q3Tb":
/*!********************************************!*\
  !*** ./src/app/module/principal.module.ts ***!
  \********************************************/
/*! exports provided: PrincipalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalModule", function() { return PrincipalModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal-routing.module */ "6Z70");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./principal/principal.component */ "aOi+");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PrincipalModule {
}
PrincipalModule.ɵfac = function PrincipalModule_Factory(t) { return new (t || PrincipalModule)(); };
PrincipalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PrincipalModule });
PrincipalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrincipalRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PrincipalModule, { declarations: [_principal_principal_component__WEBPACK_IMPORTED_MODULE_2__["PrincipalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _principal_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrincipalRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'CVJuanTafur';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".containerContent[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.containerContent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFNQTtFQUNJLGdCQUFBO0FBSEoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lckNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIC8vIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIC8vIGdyaWQtY29sdW1uLWVuZDogLTE7XG4gICAgLy8gZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgLy8gZ3JpZC1yb3ctZW5kOiAyO1xufVxuXG4uY29udGFpbmVyQ29udGVudCBwe1xuICAgIGZvbnQtc2l6ZTogMzByZW07XG59Il19 */"] });


/***/ }),

/***/ "W8qK":
/*!**************************************************************!*\
  !*** ./src/app/core/components/content/content.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 146, vars: 0, consts: [[1, "containerContent"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Electronic Technologist with knowledge of design, development on Java, JavaScript, HTML, CSS, and Database Github. Deploying software containing logical and mathematical solutions to technological problems, web applications, testing, documentation and regular upgrades to ensure web security and system usability. planning and implementing all Maintenance, Repairs, installs and configure printers on network. Writing browser compliant Javascript , Establishing the core purpose of the website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Excellent service customer experience with several years, the capability to communicate, teamwork, work under pressure and practical work behavior. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Microsoft Feb 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Software Development Fundamentals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aula Matriz Feb 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "L\u00F3gica y Programaci\u00F3n Php-Mysql\u2013 Java SE 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Developing Applications for the Java EE 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "University Central Dec 2017 postpone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Electronic Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "InterAmericans Languages Real Word Jun 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "English B2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Corporation University Minuto de Dios Jan 2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Electronic technologist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "JUAN BOSCO OBRERO 2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Technician maintenance hardware and software.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "JUAN BOSCO OBRERO 2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Technician fundamental electronic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "JUAN BOSCO OBRERO 2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Technician system and computer maintenance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "JUAN BOSCO OBRERO 2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Technician system administration wireless. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "JUAN BOSCO OBRERO 2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Technician industrial maintenance electronic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Tecnofactory (Aug 2021 - Currently) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " FrontEnd and BackEnd development of web content in HTML, CSS and JavaScript using Angular, development of the DataBase in SqlServe and PostgreSQL in diverse projects, development of the API deployed in JAVA, Golang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Impuls@ LTDA (May 2020 - Apr 2021) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " FrontEnd and BackEnd development of web content in HTML, CSS and JavaScript using Angular, development of the DataBase in MySql and PostgreSQL of products and services of the client and registered users, development of the API deployed in JAVA, content update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Papeles Nacionales (Sep 2020 - Dec 2020) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Installation of Supplies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Organizaciones de Eventos Musicales (feb 2020 - Mar 2020) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sopport Java applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Maintain platform Java internal work with system administrator to implement Query, DB Sql Server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Scala Ascensores (Sep 2018- Oct 2019) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Preventive and corrective technician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Equipment maintenance; preventive and corrective to hydraulic and traction elevator, dumbwaiters, wheelchair lifts, platforms, repair, troubleshooting, reading of plans electronic, control panel, must be able to work safely at height, adjustment mechanism and setting of parameters wiring and connections.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Thomas Greg & Sons (Apr 2018\u2013 Jul 2018) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Help Desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Support technical in the process presidential election 2018 to nation wide adjustment device hardware and software ensure technical issues are resolved, experience using help desk software and remote support tools work under pressure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Responsible for effectively planning and implementing all Maintenance\t, Repairs, installs and configure printers on network and upkeep activities for the entire Printing Press department equipment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Quimitronica LTDA(Apr 2014 \u2013Jun 2017) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Service Engineer II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Maintenance preventive and corrective laboratory equipment metrological assurance, operational qualifications on temperature, pressure, color, spectrometric ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Schindler Andino (Aug 2010 \u2013 Janu 2014) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "preventive and corrective technician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Equipment maintenance; preventive and corrective for hydraulic and traction elevator, dumbwaiters, wheelchair lifts Electronic elevators, platforms, repair, troubleshooting, lecture of plans electronic, control panel, must be able to work safely at height, adjustment mechanism and setting of parameters wiring and connections. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".containerContent[_ngcontent-%COMP%] {\n  padding-left: 4rem;\n}\n\n.containerContent[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #232335;\n  margin: 2rem 1rem 0 0;\n  font: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJDb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG59XG5cbi5jb250YWluZXJDb250ZW50IGFydGljbGUgaDIge1xuICAgIGNvbG9yOiAjMjMyMzM1O1xuICAgIG1hcmdpbjogMnJlbSAxcmVtIDAgMDtcbiAgICBmb250OiBib2xkO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _module_principal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/principal.module */ "Q3Tb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _module_principal_module__WEBPACK_IMPORTED_MODULE_4__["PrincipalModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        _module_principal_module__WEBPACK_IMPORTED_MODULE_4__["PrincipalModule"]] }); })();


/***/ }),

/***/ "aOi+":
/*!*********************************************************!*\
  !*** ./src/app/module/principal/principal.component.ts ***!
  \*********************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/header/header.component */ "OOyK");
/* harmony import */ var _core_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/aside/aside.component */ "t5/U");
/* harmony import */ var _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/content/content.component */ "W8qK");




class PrincipalComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) { return new (t || PrincipalComponent)(); };
PrincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrincipalComponent, selectors: [["app-principal"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "containerHeader"], [1, "containerAside"], [1, "containerContent"], [1, "footer"]], template: function PrincipalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _core_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_2__["AsideComponent"], _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "OOyK");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aside/aside.component */ "t5/U");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content/content.component */ "W8qK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_3__["AsideComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_3__["AsideComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ }),

/***/ "t5/U":
/*!**********************************************************!*\
  !*** ./src/app/core/components/aside/aside.component.ts ***!
  \**********************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AsideComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 108, vars: 0, consts: [[1, "containerAside"], ["src", "./assets/fotoL.jpg", "alt", "Juan Tafur", "title", "Juan Tafur"], [1, "skills"], [1, "bar"], [1, "teamwork"], [1, "Creativity"], [1, "Innovation"], [1, "Communication"], [1, "Presetation"], [1, "Motivation"], [1, "VsC"], [1, "Github"], [1, "Netbeans"], [1, "Eclipse"], [1, "container2"], [1, "HTML5"], [1, "circular-progress"], [1, "CSS3"], [1, "JavaScript"], [1, "Java"], [1, "Php"], [1, "Sql"], [1, "Scrum"], [1, "ResponsiveWebDesign"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name: Juan Guillermo Tafur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cellphone: 3158191204 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " mail: juantafur.25@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " www.linkedin.com/in/juantafur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " https://github.com/jugutafur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Profession: Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Electronic technologist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " teamwork ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Creativity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Innovation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Communication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Presetation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Motivation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Visual Studio Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Netbeans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Spanish: Native");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " English: B2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".containerAside[_ngcontent-%COMP%] {\n  background-color: #232335;\n  padding: 1rem 0;\n  color: white;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.containerAside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  margin: 2rem auto;\n  width: 100%;\n  box-shadow: 0 0 10px #b2b2cf;\n}\n\n.containerAside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border: 1px solid #727292;\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.container2[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  max-height: 42rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  grid-area: \"HTML5          CSS3\" \"JavaScript     Java\" \"Php            Sql\" \"Scrum          ResponsiveWebDesign\";\n}\n\n.container2[_ngcontent-%COMP%]   .HTML5[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n.container2[_ngcontent-%COMP%]   .CSS3[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n}\n\n.container2[_ngcontent-%COMP%]   .JavaScript[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.container2[_ngcontent-%COMP%]   .Java[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n\n.container2[_ngcontent-%COMP%]   .Php[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.container2[_ngcontent-%COMP%]   .Sql[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.container2[_ngcontent-%COMP%]   .Scrum[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  grid-row-start: 4;\n  grid-row-end: 5;\n}\n\n.container2[_ngcontent-%COMP%]   .ResponsiveWebDesign[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 4;\n  grid-row-end: 5;\n}\n\n.bar[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  background: #232335;\n  display: block;\n  height: 1rem;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 0 10px #b2b2cf;\n}\n\n.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 2rem;\n  float: left;\n  background: white;\n}\n\n.teamwork[_ngcontent-%COMP%] {\n  width: 92%;\n  animation: teamwork 2s;\n}\n\n.Creativity[_ngcontent-%COMP%] {\n  width: 90%;\n  animation: Creativity 2s;\n}\n\n.Innovation[_ngcontent-%COMP%] {\n  width: 80%;\n  animation: Innovation 2s;\n}\n\n.Communication[_ngcontent-%COMP%] {\n  width: 90%;\n  animation: Communication 2s;\n}\n\n.Presetation[_ngcontent-%COMP%] {\n  width: 85%;\n  animation: Presetation 2s;\n}\n\n.Motivation[_ngcontent-%COMP%] {\n  width: 98%;\n  animation: Motivation 2s;\n}\n\n@keyframes teamwork {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 92%;\n  }\n}\n\n@keyframes Creativity {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 90%;\n  }\n}\n\n@keyframes Innovation {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 80%;\n  }\n}\n\n@keyframes Communication {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 90%;\n  }\n}\n\n@keyframes Presetation {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 85%;\n  }\n}\n\n@keyframes Motivation {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 98%;\n  }\n}\n\n.VsC[_ngcontent-%COMP%] {\n  width: 80%;\n  animation: VsC 2s;\n}\n\n.Github[_ngcontent-%COMP%] {\n  width: 80%;\n  animation: Github 2s;\n}\n\n.Netbeans[_ngcontent-%COMP%] {\n  width: 70%;\n  animation: Netbeans 2s;\n}\n\n.Eclipse[_ngcontent-%COMP%] {\n  width: 75%;\n  animation: Eclipse 2s;\n}\n\n@keyframes VsC {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 80%;\n  }\n}\n\n@keyframes Github {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 80%;\n  }\n}\n\n@keyframes Netbeans {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 70%;\n  }\n}\n\n@keyframes Eclipse {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 75%;\n  }\n}\n\n.circular-progress[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  position: relative;\n}\n\n.circular-progress[_ngcontent-%COMP%], .circular-progress[_ngcontent-%COMP%]:before, .circular-progress[_ngcontent-%COMP%]:after {\n  width: 9rem;\n  height: 9rem;\n  border-radius: 50%;\n}\n\n.circular-progress[_ngcontent-%COMP%]:before, .circular-progress[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  text-align: center;\n}\n\n.circular-progress[_ngcontent-%COMP%]:before {\n  padding: 0.5rem;\n  box-sizing: border-box;\n  font-size: 1rem;\n  line-height: 7rem;\n  text-transform: uppercase;\n}\n\n.circular-progress[_ngcontent-%COMP%]:after {\n  line-height: 10rem;\n}\n\n.HTML5[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(162deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.HTML5[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .HTML5[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.HTML5[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"HTML5\";\n  background: #232335 content-box;\n  transform: rotate(-162deg);\n}\n\n.HTML5[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"90%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-162deg);\n}\n\n.CSS3[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(153deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.CSS3[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .CSS3[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.CSS3[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"CSS3\";\n  background: #232335 content-box;\n  transform: rotate(-153deg);\n}\n\n.CSS3[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"85%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-153deg);\n}\n\n.JavaScript[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(140.4deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.JavaScript[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .JavaScript[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.JavaScript[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"JavaScript\";\n  background: #232335 content-box;\n  transform: rotate(-140.4deg);\n}\n\n.JavaScript[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"78%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-140.4deg);\n}\n\n.Java[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(126deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.Java[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .Java[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.Java[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"Java\";\n  background: #232335 content-box;\n  transform: rotate(-126deg);\n}\n\n.Java[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"70%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-126deg);\n}\n\n.Php[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(108deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.Php[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .Php[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.Php[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"Php\";\n  background: #232335 content-box;\n  transform: rotate(-108deg);\n}\n\n.Php[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"60%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-108deg);\n}\n\n.Sql[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(144deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.Sql[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .Sql[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.Sql[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"Sql\";\n  background: #232335 content-box;\n  transform: rotate(-144deg);\n}\n\n.Sql[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"80%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-144deg);\n}\n\n.Scrum[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(154.8deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.Scrum[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .Scrum[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.Scrum[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"Scrum\";\n  background: #232335 content-box;\n  transform: rotate(-154.8deg);\n}\n\n.Scrum[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"86%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-154.8deg);\n}\n\n.ResponsiveWebDesign[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  background: linear-gradient(0deg, white 50%, rgba(255, 255, 255, 0.2) 50%);\n}\n\n.ResponsiveWebDesign[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before, .ResponsiveWebDesign[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  color: white;\n}\n\n.ResponsiveWebDesign[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:before {\n  content: \"Responsive\";\n  background: #232335 content-box;\n  transform: rotate(-135deg);\n}\n\n.ResponsiveWebDesign[_ngcontent-%COMP%]   .circular-progress[_ngcontent-%COMP%]:after {\n  content: \"75%\";\n  background: linear-gradient(transparent 50%, #232335 50%);\n  transform: scale(1.1) rotate(-135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdIQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQWNFO0VBQ0UsVUFaUztFQWFULHNCQUFBO0FBWEo7O0FBY0U7RUFDRSxVQWhCVztFQWlCWCx3QkFBQTtBQVhKOztBQWNFO0VBQ0UsVUFwQlc7RUFxQlgsd0JBQUE7QUFYSjs7QUFjRTtFQUNFLFVBeEJjO0VBeUJkLDJCQUFBO0FBWEo7O0FBY0U7RUFDRSxVQTVCWTtFQTZCWix5QkFBQTtBQVhKOztBQWNFO0VBQ0UsVUFoQ1c7RUFpQ1gsd0JBQUE7QUFYSjs7QUFjRTtFQUNFO0lBQ0UsU0FBQTtFQVhKO0VBYUU7SUFDRSxVQTlDTztFQW1DWDtBQUNGOztBQWFFO0VBQ0U7SUFDRSxTQUFBO0VBWEo7RUFhRTtJQUNFLFVBckRTO0VBMENiO0FBQ0Y7O0FBYUU7RUFDRTtJQUNFLFNBQUE7RUFYSjtFQWFFO0lBQ0UsVUE1RFM7RUFpRGI7QUFDRjs7QUFhRTtFQUNFO0lBQ0UsU0FBQTtFQVhKO0VBYUU7SUFDRSxVQW5FWTtFQXdEaEI7QUFDRjs7QUFhRTtFQUNFO0lBQ0UsU0FBQTtFQVhKO0VBYUU7SUFDRSxVQTFFVTtFQStEZDtBQUNGOztBQWFFO0VBQ0U7SUFDRSxTQUFBO0VBWEo7RUFhRTtJQUNFLFVBakZTO0VBc0ViO0FBQ0Y7O0FBYUU7RUFDRSxVQXBGSTtFQXFGSixpQkFBQTtBQVhKOztBQWNBO0VBQ0ksVUF4Rk87RUF5RlAsb0JBQUE7QUFYSjs7QUFjQTtFQUNJLFVBNUZTO0VBNkZULHNCQUFBO0FBWEo7O0FBY0E7RUFDSSxVQWhHUTtFQWlHUixxQkFBQTtBQVhKOztBQWNBO0VBQ0k7SUFDSSxTQUFBO0VBWE47RUFhRTtJQUNJLFVBNUdBO0VBaUdOO0FBQ0Y7O0FBY0E7RUFDSTtJQUNJLFNBQUE7RUFaTjtFQWNFO0lBQ0ksVUFwSEc7RUF3R1Q7QUFDRjs7QUFlQTtFQUNJO0lBQ0ksU0FBQTtFQWJOO0VBZUU7SUFDSSxVQTVISztFQStHWDtBQUNGOztBQWdCQTtFQUVJO0lBQ0ksU0FBQTtFQWZOO0VBaUJFO0lBQ0ksVUFySUk7RUFzSFY7QUFDRjs7QUFxQkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBbkJKOztBQXFCRTtFQUNFLFdBUE07RUFRTixZQVRLO0VBVUwsa0JBQUE7QUFsQko7O0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBakJKOztBQW1CRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBaEJKOztBQWtCRTtFQUNFLGtCQUFBO0FBZko7O0FBa0JFO0VBQ0UseUJBQUE7RUFDQSwwRUFBQTtBQWZKOztBQWlCRTtFQUNFLFlBQUE7QUFkSjs7QUFnQkU7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7QUFiSjs7QUFlRTtFQUNFLGNBQUE7RUFDQSx5REFBQTtFQUNBLHFDQUFBO0FBWko7O0FBZUU7RUFDRSx5QkFBQTtFQUNBLDBFQUFBO0FBWko7O0FBY0U7RUFDRSxZQUFBO0FBWEo7O0FBYUU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQVZKOztBQVlFO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0EscUNBQUE7QUFUSjs7QUFZRTtFQUNFLDJCQUFBO0VBQ0EsMEVBQUE7QUFUSjs7QUFXRTtFQUNFLFlBQUE7QUFSSjs7QUFVRTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQVBKOztBQVNFO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0EsdUNBQUE7QUFOSjs7QUFTRTtFQUNFLHlCQUFBO0VBQ0EsMEVBQUE7QUFOSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FBSko7O0FBTUU7RUFDRSxjQUFBO0VBQ0EseURBQUE7RUFDQSxxQ0FBQTtBQUhKOztBQU1FO0VBQ0UseUJBQUE7RUFDQSwwRUFBQTtBQUhKOztBQUtFO0VBQ0UsWUFBQTtBQUZKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFHRTtFQUNFLGNBQUE7RUFDQSx5REFBQTtFQUNBLHFDQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLDBFQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0EscUNBQUE7QUFHSjs7QUFBRTtFQUNFLDJCQUFBO0VBQ0EsMEVBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7QUFJSjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQUtKOztBQUhFO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0EsdUNBQUE7QUFNSjs7QUFIRTtFQUNFLHlCQUFBO0VBQ0EsMEVBQUE7QUFNSjs7QUFKRTtFQUNFLFlBQUE7QUFPSjs7QUFMRTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBQVFKOztBQU5FO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0EscUNBQUE7QUFTSiIsImZpbGUiOiJhc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJBc2lkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjMzNTtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4uY29udGFpbmVyQXNpZGUgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNiMmIyY2Y7XG59XG5cbi5jb250YWluZXJBc2lkZSBoMiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcyNzI5MjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtYXJlYTogXCJIVE1MNSAgICAgICAgICBDU1MzXCIgXCJKYXZhU2NyaXB0ICAgICBKYXZhXCIgXCJQaHAgICAgICAgICAgICBTcWxcIiBcIlNjcnVtICAgICAgICAgIFJlc3BvbnNpdmVXZWJEZXNpZ25cIjtcbn1cblxuLmNvbnRhaW5lcjIgLkhUTUw1IHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMjtcbn1cblxuLmNvbnRhaW5lcjIgLkNTUzMge1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMjtcbn1cblxuLmNvbnRhaW5lcjIgLkphdmFTY3JpcHQge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4uY29udGFpbmVyMiAuSmF2YSB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xuICBncmlkLXJvdy1zdGFydDogMjtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xufVxuXG4uY29udGFpbmVyMiAuUGhwIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gIGdyaWQtcm93LWVuZDogNDtcbn1cblxuLmNvbnRhaW5lcjIgLlNxbCB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1yb3ctZW5kOiA0O1xufVxuXG4uY29udGFpbmVyMiAuU2NydW0ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBncmlkLXJvdy1zdGFydDogNDtcbiAgZ3JpZC1yb3ctZW5kOiA1O1xufVxuXG4uY29udGFpbmVyMiAuUmVzcG9uc2l2ZVdlYkRlc2lnbiB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xuICBncmlkLXJvdy1zdGFydDogNDtcbiAgZ3JpZC1yb3ctZW5kOiA1O1xufVxuXG4uYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZDogIzIzMjMzNTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNiMmIyY2Y7XG4gIH1cbiAgXG4gIC5iYXIgc3BhbiB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgJHRlYW13b3JrOiA5MiU7XG4gICRDcmVhdGl2aXR5OiA5MCU7XG4gICRJbm5vdmF0aW9uOiA4MCU7XG4gICRDb21tdW5pY2F0aW9uOiA5MCU7XG4gICRQcmVzZXRhdGlvbjogODUlO1xuICAkTW90aXZhdGlvbjogOTglO1xuICAkVnNDOiA4MCU7XG4gICRHaXRodWI6IDgwJTtcbiAgJE5ldGJlYW5zOiA3MCU7XG4gICRFY2xpcHNlOiA3NSU7XG4gIFxuICAudGVhbXdvcmsge1xuICAgIHdpZHRoOiAkdGVhbXdvcms7XG4gICAgYW5pbWF0aW9uOiB0ZWFtd29yayAycztcbiAgfVxuICBcbiAgLkNyZWF0aXZpdHkge1xuICAgIHdpZHRoOiAkQ3JlYXRpdml0eTtcbiAgICBhbmltYXRpb246IENyZWF0aXZpdHkgMnM7XG4gIH1cbiAgXG4gIC5Jbm5vdmF0aW9uIHtcbiAgICB3aWR0aDogJElubm92YXRpb247XG4gICAgYW5pbWF0aW9uOiBJbm5vdmF0aW9uIDJzO1xuICB9XG4gIFxuICAuQ29tbXVuaWNhdGlvbiB7XG4gICAgd2lkdGg6ICRDb21tdW5pY2F0aW9uO1xuICAgIGFuaW1hdGlvbjogQ29tbXVuaWNhdGlvbiAycztcbiAgfVxuICBcbiAgLlByZXNldGF0aW9uIHtcbiAgICB3aWR0aDogJFByZXNldGF0aW9uO1xuICAgIGFuaW1hdGlvbjogUHJlc2V0YXRpb24gMnM7XG4gIH1cbiAgXG4gIC5Nb3RpdmF0aW9uIHtcbiAgICB3aWR0aDogJE1vdGl2YXRpb247XG4gICAgYW5pbWF0aW9uOiBNb3RpdmF0aW9uIDJzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHRlYW13b3JrIHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6ICR0ZWFtd29yaztcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBDcmVhdGl2aXR5IHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6ICRDcmVhdGl2aXR5O1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIElubm92YXRpb24ge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogJElubm92YXRpb247XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgQ29tbXVuaWNhdGlvbiB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAkQ29tbXVuaWNhdGlvbjtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBQcmVzZXRhdGlvbiB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAkUHJlc2V0YXRpb247XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgTW90aXZhdGlvbiB7XG4gICAgMCUge1xuICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHdpZHRoOiAkTW90aXZhdGlvbjtcbiAgICB9XG4gIH1cbiAgLlZzQyB7XG4gICAgd2lkdGg6ICRWc0M7XG4gICAgYW5pbWF0aW9uOiBWc0MgMnM7XG4gIH1cblxuLkdpdGh1YiB7XG4gICAgd2lkdGg6ICRHaXRodWI7XG4gICAgYW5pbWF0aW9uOiBHaXRodWIgMnM7XG59XG5cbi5OZXRiZWFucyB7XG4gICAgd2lkdGg6ICROZXRiZWFucztcbiAgICBhbmltYXRpb246IE5ldGJlYW5zIDJzO1xufVxuXG4uRWNsaXBzZSB7XG4gICAgd2lkdGg6ICRFY2xpcHNlO1xuICAgIGFuaW1hdGlvbjogRWNsaXBzZSAycztcbn1cblxuQGtleWZyYW1lcyBWc0Mge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6ICRWc0M7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIEdpdGh1YiB7XG4gICAgMCUge1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB3aWR0aDogJEdpdGh1YjtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgTmV0YmVhbnMge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6IDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgd2lkdGg6ICROZXRiZWFucztcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgRWNsaXBzZSB7XG5cbiAgICAwJSB7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHdpZHRoOiAkRWNsaXBzZTtcbiAgICB9XG59XG5cbiAgJGFsdG86IDlyZW07XG4gICRhbmNobzogOXJlbTtcblxuLmNpcmN1bGFyLXByb2dyZXNzIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNpcmN1bGFyLXByb2dyZXNzLCAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlLCAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIHdpZHRoOiAkYW5jaG87XG4gICAgaGVpZ2h0OiAkYWx0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSwgLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jaXJjdWxhci1wcm9ncmVzczpiZWZvcmUge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogN3JlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xuICB9XG4gIFxuICAuSFRNTDUgLmNpcmN1bGFyLXByb2dyZXNzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjJkZWcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA1MCUpO1xuICB9XG4gIC5IVE1MNSAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlLCAuSFRNTDUgLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLkhUTUw1IC5jaXJjdWxhci1wcm9ncmVzczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiSFRNTDVcIjtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzM1IGNvbnRlbnQtYm94O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNjJkZWcpO1xuICB9XG4gIC5IVE1MNSAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiOTAlXCI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwgIzIzMjMzNSA1MCUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTE2MmRlZyk7XG4gIH1cbiAgXG4gIC5DU1MzIC5jaXJjdWxhci1wcm9ncmVzcyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTUzZGVnKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNTAlKTtcbiAgfVxuICAuQ1NTMyAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlLCAuQ1NTMyAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuQ1NTMyAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNTUzNcIjtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzM1IGNvbnRlbnQtYm94O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNTNkZWcpO1xuICB9XG4gIC5DU1MzIC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgY29udGVudDogXCI4NSVcIjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCAjMjMyMzM1IDUwJSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtMTUzZGVnKTtcbiAgfVxuICBcbiAgLkphdmFTY3JpcHQgLmNpcmN1bGFyLXByb2dyZXNzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNDAuNGRlZyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSk7XG4gIH1cbiAgLkphdmFTY3JpcHQgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSwgLkphdmFTY3JpcHQgLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLkphdmFTY3JpcHQgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJKYXZhU2NyaXB0XCI7XG4gICAgYmFja2dyb3VuZDogIzIzMjMzNSBjb250ZW50LWJveDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTQwLjRkZWcpO1xuICB9XG4gIC5KYXZhU2NyaXB0IC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgY29udGVudDogXCI3OCVcIjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCAjMjMyMzM1IDUwJSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtMTQwLjRkZWcpO1xuICB9XG4gIFxuICAuSmF2YSAuY2lyY3VsYXItcHJvZ3Jlc3Mge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyNmRlZyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSk7XG4gIH1cbiAgLkphdmEgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSwgLkphdmEgLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLkphdmEgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJKYXZhXCI7XG4gICAgYmFja2dyb3VuZDogIzIzMjMzNSBjb250ZW50LWJveDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTI2ZGVnKTtcbiAgfVxuICAuSmF2YSAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiNzAlXCI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwgIzIzMjMzNSA1MCUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTEyNmRlZyk7XG4gIH1cbiAgXG4gIC5QaHAgLmNpcmN1bGFyLXByb2dyZXNzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDhkZWcpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB3aGl0ZSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA1MCUpO1xuICB9XG4gIC5QaHAgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSwgLlBocCAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuUGhwIC5jaXJjdWxhci1wcm9ncmVzczpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiUGhwXCI7XG4gICAgYmFja2dyb3VuZDogIzIzMjMzNSBjb250ZW50LWJveDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTA4ZGVnKTtcbiAgfVxuICAuUGhwIC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgY29udGVudDogXCI2MCVcIjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCAjMjMyMzM1IDUwJSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtMTA4ZGVnKTtcbiAgfVxuICBcbiAgLlNxbCAuY2lyY3VsYXItcHJvZ3Jlc3Mge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSk7XG4gIH1cbiAgLlNxbCAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlLCAuU3FsIC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5TcWwgLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJTcWxcIjtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzM1IGNvbnRlbnQtYm94O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNDRkZWcpO1xuICB9XG4gIC5TcWwgLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIjgwJVwiO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsICMyMzIzMzUgNTAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC0xNDRkZWcpO1xuICB9XG4gIFxuICAuU2NydW0gLmNpcmN1bGFyLXByb2dyZXNzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTQuOGRlZyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDUwJSk7XG4gIH1cbiAgLlNjcnVtIC5jaXJjdWxhci1wcm9ncmVzczpiZWZvcmUsIC5TY3J1bSAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuU2NydW0gLmNpcmN1bGFyLXByb2dyZXNzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJTY3J1bVwiO1xuICAgIGJhY2tncm91bmQ6ICMyMzIzMzUgY29udGVudC1ib3g7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1NC44ZGVnKTtcbiAgfVxuICAuU2NydW0gLmNpcmN1bGFyLXByb2dyZXNzOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIjg2JVwiO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsICMyMzIzMzUgNTAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC0xNTQuOGRlZyk7XG4gIH1cbiAgXG4gIC5SZXNwb25zaXZlV2ViRGVzaWduIC5jaXJjdWxhci1wcm9ncmVzcyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNTAlKTtcbiAgfVxuICAuUmVzcG9uc2l2ZVdlYkRlc2lnbiAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlLCAuUmVzcG9uc2l2ZVdlYkRlc2lnbiAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuUmVzcG9uc2l2ZVdlYkRlc2lnbiAuY2lyY3VsYXItcHJvZ3Jlc3M6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlJlc3BvbnNpdmVcIjtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyMzM1IGNvbnRlbnQtYm94O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIC5SZXNwb25zaXZlV2ViRGVzaWduIC5jaXJjdWxhci1wcm9ncmVzczphZnRlciB7XG4gICAgY29udGVudDogXCI3NSVcIjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCAjMjMyMzM1IDUwJSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _module_principal_principal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/principal/principal.component */ "aOi+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _module_principal_principal_component__WEBPACK_IMPORTED_MODULE_1__["PrincipalComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
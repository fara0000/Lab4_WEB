(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BOSS\Desktop\WEB\Lab4_WEB\front\src\main.ts */"zUnb");


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page-service/login.service */ "cYQP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");








const _c0 = function () { return { fontSize: "30px" }; };
const _c1 = function () { return { fontSize: "larger" }; };
const _c2 = function () { return { height: "70px" }; };
class LoginPageComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
    }
    auth(login, password) {
        this.authorization({ login, password });
        console.log({ login, password }, 'log');
        this.cleanInputValue();
    }
    authorization(obj) {
        this._service.authUser(obj).subscribe((res) => res, (err) => console.log(err));
    }
    cleanInputValue() {
        this.login = '';
        this.password = '';
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 24, vars: 10, consts: [[1, "login-page__wrapper"], [1, "login-page__header-wrapper"], [1, "login-page__header-wrapper__title-wrapper"], [1, "pi", "pi-lock", 3, "ngStyle"], [1, "login-page__header-wrapper__title"], [1, "login-page__login-wrapper"], [1, "login-page__login-wrapper_input-wrapper"], [1, "p-float-label"], ["id", "float-input-username", "type", "text", "pInputText", "", 1, "login-page__input", 3, "ngModel", "ngModelChange"], [3, "ngStyle"], [1, "login-page__login-wrapper_input-wrapper", 3, "ngStyle"], ["id", "float-input-password", "type", "password", "pInputText", "", 1, "login-page__input", 3, "ngModel", "ngModelChange"], [1, "login-page__button-wrapper"], [1, "login-page__link-wrapper"], ["routerLink", "/registration", 1, "login-page__button-link"], ["pButton", "", "type", "button", "label", "Sign in", 1, "login-page__button", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " not registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_23_listener() { return ctx.auth(ctx.login, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: [".login-page__wrapper[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 410px;\n  display: flex;\n  padding: 24px 32px 32px 41px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 74%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-family: revert;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title-wrapper[_ngcontent-%COMP%]   .login-page__header-wrapper__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 14px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper_input-wrapper[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper[_ngcontent-%COMP%]   .login-page__login-wrapper_input-wrapper[_ngcontent-%COMP%]   .login-page__input[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 45px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 21%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-bottom: 16px;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%] {\n  color: #0073b1;\n  cursor: pointer;\n  height: 35px;\n  width: 36%;\n  font-size: larger;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%]:hover {\n  color: #006097;\n  background: #d0e8ff;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__link-wrapper[_ngcontent-%COMP%]   .login-page__button-link[_ngcontent-%COMP%]:visited {\n  color: #665ed0;\n  border: none;\n}\n.login-page__wrapper[_ngcontent-%COMP%]   .login-page__button-wrapper[_ngcontent-%COMP%]   .login-page__button[_ngcontent-%COMP%] {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFWSjtBQUNBO0VBWVEsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBVlI7QUFQQTtFQXNCYyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVpkO0FBaEJBO0VBK0JrQixnQkFBQTtFQUNBLGdCQUFBO0FBWmxCO0FBcEJBO0VBcUNRLFdBQUE7RUFDQSxZQUFBO0FBZFI7QUF4QkE7RUF5Q1ksWUFBQTtBQWRaO0FBM0JBO0VBNENnQixZQUFBO0VBQ0EsWUFBQTtBQWRoQjtBQS9CQTtFQWtEUSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBaEJSO0FBdENBO0VBeURZLFlBQUE7RUFDQSxtQkFBQTtBQWhCWjtBQTFDQTtFQTZEZ0IsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBaEJoQjtBQWtCZ0I7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFoQmxCO0FBbUJnQjtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBakJwQjtBQXpEQTtFQWdGVyxZQUFBO0FBcEJYIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW5wdXRXaWR0aDogMzIwcHg7XG5AaW5wdXRIZWlnaHQ6IDQ1cHg7XG5AYnV0dG9uV2lkdGg6IDMyMHB4O1xuQGlucHV0V3JhcHBlcldpZHRoOiAxMDAlO1xuQGlucHV0V3JhcHBlckhlaWdodDogNzdweDtcbkBtYWluV3JhcHBlcldpZHRoOiA0MTBweDtcbkBtYWluV3JhcHBlckhlaWdodDogNDEwcHg7XG5AbG9naW5QYWdlSGVhZGVyV2lkdGg6IDEwMCU7XG5AbG9naW5QYWdlSGVhZGVySGVpZ2h0OiAzNSU7XG5AbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM6IDE1cHg7XG5cbi5sb2dpbi1wYWdlX193cmFwcGVyIHtcbiAgICB3aWR0aDogQG1haW5XcmFwcGVyV2lkdGg7XG4gICAgaGVpZ2h0OiBAbWFpbldyYXBwZXJIZWlnaHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyNHB4IDMycHggMzJweCA0MXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiBAbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTVweCByZ2JhKDAsMCwwLDAuMTUpO1xuXG4gICAgLmxvZ2luLXBhZ2VfX2hlYWRlci13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IEBsb2dpblBhZ2VIZWFkZXJXaWR0aDtcbiAgICAgICAgaGVpZ2h0OiBAbG9naW5QYWdlSGVhZGVySGVpZ2h0O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAubG9naW4tcGFnZV9faGVhZGVyLXdyYXBwZXJfX2ljb24td3JhcHBlciB7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLXBhZ2VfX2hlYWRlci13cmFwcGVyX190aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNzQlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHJldmVydDtcblxuICAgICAgICAgICAgICAubG9naW4tcGFnZV9faGVhZGVyLXdyYXBwZXJfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLXBhZ2VfX2xvZ2luLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogQGlucHV0V3JhcHBlcldpZHRoO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG5cbiAgICAgICAgLmxvZ2luLXBhZ2VfX2xvZ2luLXdyYXBwZXJfaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogQGlucHV0V2lkdGg7XG5cbiAgICAgICAgICAgIC5sb2dpbi1wYWdlX19pbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuICAgICAgICAgICAgICAgIGhlaWdodDogQGlucHV0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2dpbi1wYWdlX19idXR0b24td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIxJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgLmxvZ2luLXBhZ2VfX2xpbmstd3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAubG9naW4tcGFnZV9fYnV0dG9uLWxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3M2IxO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDYwOTc7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDBlOGZmO1xuICAgICAgICAgICAgICAgICAgLy9ib3JkZXItYm90dG9tOiAwLjdweCBzb2xpZCAjMDA2MDk3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NWVkMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpbi1wYWdlX19idXR0b24ge1xuICAgICAgICAgICB3aWR0aDogQGJ1dHRvbldpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.less']
            }]
    }], function () { return [{ type: _login_page_service_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "9okx":
/*!*******************************************************************!*\
  !*** ./src/app/pages/main-page/main-page-service/main.service.ts ***!
  \*******************************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainService {
    constructor() { }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Aw39":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page-service/registration.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");





class RegistrationService {
    constructor(_http) {
        this._http = _http;
    }
    addNewUser(obj) {
        return this._http.post('http://localhost:8080/registration/register', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.json(), (err) => {
            this.handleError(err);
        }));
    }
    handleError(err) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'Error 500');
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }]; }, null); })();


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
        this.title = 'front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "main__wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n}\napp-root[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\napp-main-page[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZKO0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUhGO0FBTUE7RUFDRSxxQkFBQTtBQUpGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtYWluV3JhcHBlcldpZHRoOiAxMDAlO1xuQG1haW5XcmFwcGVySGVpZ2h0OiAxMDB2aDtcblxuLm1haW5fX3dyYXBwZXIge1xuICAgIHdpZHRoOiBAbWFpbldyYXBwZXJXaWR0aDtcbiAgICBoZWlnaHQ6IEBtYWluV3JhcHBlckhlaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLXJvb3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYXBwLW1haW4tcGFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_main_page_main_page_service_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main-page/main-page-service/main.service */ "9okx");
/* harmony import */ var _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login-page/login-page-service/login.service */ "cYQP");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _pages_registration_page_registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/registration-page/registration-page-service/registration.service */ "Aw39");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _pages_main_page_main_page_service_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
        _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
        _pages_registration_page_registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"],
    ], imports: [[
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"], _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationPageComponent"], _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"]], imports: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["routingComponents"],
                ],
                imports: [
                    _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
                ],
                providers: [
                    _pages_main_page_main_page_service_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
                    _pages_login_page_login_page_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
                    _pages_registration_page_registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_10__["RegistrationService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cYQP":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login-page/login-page-service/login.service.ts ***!
  \**********************************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");





class LoginService {
    constructor(_http) {
        this._http = _http;
    }
    authUser(obj) {
        return this._http.post('localhost:8080/login', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.json(), (err) => {
            this.handleError(err);
        }));
    }
    handleError(err) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err || 'Error 500');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }]; }, null); })();


/***/ }),

/***/ "foYC":
/*!************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-page-service/registration.service */ "Aw39");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");








const _c0 = function () { return { fontSize: "30px" }; };
const _c1 = function () { return { fontSize: "larger" }; };
const _c2 = function () { return { height: "70px" }; };
class RegistrationPageComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
    }
    register(username, password) {
        this.sendNewUser({ username, password });
        this.cleanInputValue();
    }
    sendNewUser(obj) {
        this._service.addNewUser(obj).subscribe((res) => res, (err) => console.log(err));
    }
    cleanInputValue() {
        this.username = '';
        this.password = '';
    }
}
RegistrationPageComponent.ɵfac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"])); };
RegistrationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 24, vars: 10, consts: [[1, "registration-page__wrapper"], [1, "registration-page__header-wrapper"], [1, "registration-page__header-wrapper__title-wrapper"], [1, "pi", "pi-lock", 3, "ngStyle"], [1, "registration-page__header-wrapper__title"], [1, "registration-page__login-wrapper"], [1, "registration-page__login-wrapper_input-wrapper"], [1, "p-float-label"], ["id", "float-input-username", "type", "text", "pInputText", "", 1, "registration-page__input", 3, "ngModel", "ngModelChange"], ["for", "float-input", 3, "ngStyle"], [1, "registration-page__login-wrapper_input-wrapper", 3, "ngStyle"], ["id", "float-input-password", "type", "password", "pInputText", "", 1, "registration-page__input", 3, "ngModel", "ngModelChange"], [1, "registration-page__button-wrapper"], [1, "registration-page__link-wrapper"], ["routerLink", "/login", 1, "registration-page__button-link"], ["pButton", "", "type", "button", "label", "Sign up", 1, "registration-page__button", 3, "click"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationPageComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationPageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "already registered? Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_23_listener() { return ctx.register(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: [".registration-page__wrapper[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 410px;\n  display: flex;\n  padding: 24px 32px 32px 41px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 74%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-family: revert;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title-wrapper[_ngcontent-%COMP%]   .registration-page__header-wrapper__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 14px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper_input-wrapper[_ngcontent-%COMP%] {\n  width: 320px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper[_ngcontent-%COMP%]   .registration-page__login-wrapper_input-wrapper[_ngcontent-%COMP%]   .registration-page__input[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 45px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 21%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%] {\n  height: 46px;\n  margin-bottom: 16px;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%]   .registration-page__button-link[_ngcontent-%COMP%] {\n  color: #0073b1;\n  cursor: pointer;\n  height: 35px;\n  font-size: larger;\n  width: 36%;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__link-wrapper[_ngcontent-%COMP%]   .registration-page__button-link[_ngcontent-%COMP%]:hover {\n  color: #006097;\n  background: #d0e8ff;\n  border-bottom: 0.7px solid #006097;\n}\n.registration-page__wrapper[_ngcontent-%COMP%]   .registration-page__button-wrapper[_ngcontent-%COMP%]   .registration-page__button[_ngcontent-%COMP%] {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBVkY7QUFDQTtFQVlJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVZKO0FBUEE7RUFzQk0sV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWhCQTtFQStCUSxnQkFBQTtFQUNBLGdCQUFBO0FBWlI7QUFwQkE7RUFxQ0ksV0FBQTtFQUNBLFlBQUE7QUFkSjtBQXhCQTtFQXlDTSxZQUFBO0FBZE47QUEzQkE7RUE0Q1EsWUFBQTtFQUNBLFlBQUE7QUFkUjtBQS9CQTtFQWtESSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBaEJKO0FBdENBO0VBeURNLFlBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQTFDQTtFQTZEUSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFoQlI7QUFpQlE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQWZWO0FBdERBO0VBMkVRLFlBQUE7QUFsQlIiLCJmaWxlIjoicmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW5wdXRXaWR0aDogMzIwcHg7XG5AaW5wdXRIZWlnaHQ6IDQ1cHg7XG5AYnV0dG9uV2lkdGg6IDMyMHB4O1xuQGlucHV0V3JhcHBlcldpZHRoOiAxMDAlO1xuQGlucHV0V3JhcHBlckhlaWdodDogNzdweDtcbkBtYWluV3JhcHBlcldpZHRoOiA0MTBweDtcbkBtYWluV3JhcHBlckhlaWdodDogNDEwcHg7XG5AbG9naW5QYWdlSGVhZGVyV2lkdGg6IDEwMCU7XG5AbG9naW5QYWdlSGVhZGVySGVpZ2h0OiAzNSU7XG5AbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM6IDE1cHg7XG5cbi5yZWdpc3RyYXRpb24tcGFnZV9fd3JhcHBlciB7XG4gIHdpZHRoOiBAbWFpbldyYXBwZXJXaWR0aDtcbiAgaGVpZ2h0OiBAbWFpbldyYXBwZXJIZWlnaHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI0cHggMzJweCAzMnB4IDQxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBAbWFpbldyYXBwZXJCb3JkZXJSYWRpdXM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggcmdiYSgwLDAsMCwwLjE1KTtcblxuICAucmVnaXN0cmF0aW9uLXBhZ2VfX2hlYWRlci13cmFwcGVyIHtcbiAgICB3aWR0aDogQGxvZ2luUGFnZUhlYWRlcldpZHRoO1xuICAgIGhlaWdodDogQGxvZ2luUGFnZUhlYWRlckhlaWdodDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9faGVhZGVyLXdyYXBwZXJfX2ljb24td3JhcHBlciB7XG4gICAgfVxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9faGVhZGVyLXdyYXBwZXJfX3RpdGxlLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDc0JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZm9udC1mYW1pbHk6IHJldmVydDtcblxuICAgICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19oZWFkZXItd3JhcHBlcl9fdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucmVnaXN0cmF0aW9uLXBhZ2VfX2xvZ2luLXdyYXBwZXIge1xuICAgIHdpZHRoOiBAaW5wdXRXcmFwcGVyV2lkdGg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19sb2dpbi13cmFwcGVyX2lucHV0LXdyYXBwZXIge1xuICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuXG4gICAgICAucmVnaXN0cmF0aW9uLXBhZ2VfX2lucHV0IHtcbiAgICAgICAgd2lkdGg6IEBpbnB1dFdpZHRoO1xuICAgICAgICBoZWlnaHQ6IEBpbnB1dEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJlZ2lzdHJhdGlvbi1wYWdlX19idXR0b24td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19saW5rLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgLnJlZ2lzdHJhdGlvbi1wYWdlX19idXR0b24tbGluayB7XG4gICAgICAgIGNvbG9yOiAjMDA3M2IxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgIHdpZHRoOiAzNiU7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMDA2MDk3O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkMGU4ZmY7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC43cHggc29saWQgIzAwNjA5NztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWdpc3RyYXRpb24tcGFnZV9fYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IEBidXR0b25XaWR0aDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration-page',
                templateUrl: './registration-page.component.html',
                styleUrls: ['./registration-page.component.less']
            }]
    }], function () { return [{ type: _registration_page_service_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"] }]; }, null); })();


/***/ }),

/***/ "h6PX":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");







const _c0 = function () { return { cursor: "pointer" }; };
const _c1 = function () { return { width: "90%" }; };
const _c2 = function () { return { display: "flex", justifyContent: "center" }; };
const _c3 = function () { return { width: "250px" }; };
class MainPageComponent {
    constructor() {
        this.parameter = 4;
    }
    ngOnInit() {
        this.drawRectable(this.parameter);
    }
    // tslint:disable-next-line:typedef
    drawRectable(parameter) {
        const CANVAS_WIDTH = 400;
        const CANVAS_HEIGHT = 400;
        const canvas = document.getElementById('canvas');
        // @ts-ignore
        if (canvas.getContext) {
            // @ts-ignore
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'rgba(256, 256, 256, 0.8)'; // background fill
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.fillStyle = 'rgb(35, 184, 253)'; // area
            ctx.fillRect(200, 200, parameter * 20, parameter * 40); // rectangle
            ctx.fill();
            ctx.moveTo(200 - parameter * 20, 200); // triangle
            ctx.lineTo(200, 200 + parameter * 20);
            ctx.lineTo(200, 200);
            ctx.fill();
            ctx.lineTo(200, 200 - parameter * 40); // quarter of circle
            ctx.arc(200, 200, parameter * 40, -Math.PI / 2, Math.PI, true);
            ctx.lineTo(200, 200);
            ctx.fill();
            this.drawAxis(ctx);
        }
    }
    // tslint:disable-next-line:typedef
    drawAxis(ctx) {
        const CANVAS_WIDTH = 400;
        const CANVAS_HEIGHT = 400;
        const CANVAS_STEP_X = CANVAS_WIDTH / 2 / 7;
        const CANVAS_STEP_Y = CANVAS_HEIGHT / 2 / 7;
        for (let x = 40; x < 361; x += 40) { // gird
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 400);
        }
        for (let y = 40; y < 361; y += 40) {
            ctx.moveTo(0, y);
            ctx.lineTo(400, y);
        }
        ctx.strokeStyle = '#333';
        ctx.stroke();
        ctx.fillStyle = 'black'; // axis
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(400, 200);
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 400);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
        ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
        ctx.moveTo(CANVAS_WIDTH - CANVAS_STEP_X, CANVAS_HEIGHT / 2 - CANVAS_STEP_Y / 4);
        ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X / 2, CANVAS_HEIGHT / 2);
        ctx.lineTo(CANVAS_WIDTH - CANVAS_STEP_X, CANVAS_HEIGHT / 2 + CANVAS_STEP_Y / 4);
        ctx.moveTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT - CANVAS_STEP_Y / 2);
        ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_STEP_X / 2);
        ctx.moveTo(CANVAS_WIDTH / 2 - CANVAS_STEP_X / 4, CANVAS_STEP_Y);
        ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_STEP_Y / 2);
        ctx.lineTo(CANVAS_WIDTH / 2 + CANVAS_STEP_X / 4, CANVAS_STEP_Y);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 38, vars: 18, consts: [[1, "main-page__main-wrapper"], [1, "main-page__header"], [1, "header__logo", 3, "ngStyle"], [1, "header__sign-out-button"], ["pButton", "", "pRipple", "", "type", "button", "label", "sign out", "routerLink", "/login", 1, "p-button-raised", "p-button-text", "p-button-plain"], [1, "main-page__body"], [1, "main-page__canvas-container"], ["width", "400px", "height", "400px", "id", "canvas"], [1, "main-page__form-container"], [1, "p-panel-titlebar"], [1, "p-panel-title"], [1, "p-field", "p-col-12", "p-md-6"], ["mode", "decimal", "buttonLayout", "stacked", 3, "ngStyle", "showButtons", "min", "max", "step"], ["id", "y", "type", "text", "pInputText", "", 3, "ngStyle"], ["mode", "decimal", "buttonLayout", "stacked", 1, "input__class", 3, "showButtons", "min", "max", "step"], [1, "main-page__button-container", 3, "ngStyle"], ["pButton", "", "type", "button", "label", "Send", 3, "ngStyle"], [1, "main-page__table"], [1, "main-page__table-header"], [1, "main-page__table-header-element"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Lab4_Web ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add new query");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " X: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-inputNumber", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Z: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p-inputNumber", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("showButtons", true)("min", -2)("max", 2)("step", 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButtons", true)("min", -2)("max", 2)("step", 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"]], styles: [".main-page__main-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.main-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 10%;\n  padding: 0 40px;\n  margin-bottom: 50px;\n  box-shadow: 0 2px 15px rgba(151, 150, 168, 0.28);\n}\n.main-page__body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n#canvas[_ngcontent-%COMP%] {\n  \n  cursor: crosshair;\n}\n.main-page__canvas-container[_ngcontent-%COMP%] {\n  width: 404px;\n  height: 404px;\n  border: 2px solid #ced4da;\n  margin: 0 35px 0 35px;\n}\n.input__class[_ngcontent-%COMP%] {\n  width: 286px;\n}\n.main-page__form-container[_ngcontent-%COMP%] {\n  width: 401.5px;\n  height: 401.5px;\n  border: 2px solid #ced4da;\n  border-top: 0px;\n}\n.main-page__table[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 200px;\n  border-collapse: collapse;\n  cursor: pointer;\n  margin: 3%;\n  display: flex;\n  border: 1px solid #ced4da;\n}\n.main-page__table-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n}\n.main-page__table-header-element[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: center;\n  background: #3498db;\n  color: white;\n  font-weight: bold;\n  padding: 10px;\n  border-left: 1px solid #ccc;\n  text-align: center;\n  font-size: 20px;\n}\n.p-panel-titlebar[_ngcontent-%COMP%] {\n  border: 1px solid #c8c8c8;\n  padding: 0.571em 1em;\n  background-color: #f4f4f4;\n  color: #333;\n  border-radius: 3px 3px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFERjtBQUlBO0VBRkUsZUFBZTtFQUtmLGlCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0FBTEY7QUFRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTkY7QUFTQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVBGO0FBVUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVJGO0FBV0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFURjtBQVlBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBVkYiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFnZV9fbWFpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tYWluLXBhZ2VfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAlO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgxNTEsMTUwLDE2OCwuMjgpO1xufVxuXG4ubWFpbi1wYWdlX19ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI2NhbnZhcyB7XG4gIC8vbWFyZ2luLXRvcDogN3B4O1xuICAvKiB3aWR0aDoyMCU7ICovXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4ubWFpbi1wYWdlX19jYW52YXMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwNHB4O1xuICBoZWlnaHQ6IDQwNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2VkNGRhO1xuICBtYXJnaW46IDAgMzVweCAwIDM1cHg7XG59XG5cbi5pbnB1dF9fY2xhc3Mge1xuICB3aWR0aDogMjg2cHg7XG59XG5cbi5tYWluLXBhZ2VfX2Zvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMS41cHg7XG4gIGhlaWdodDogNDAxLjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG4ubWFpbi1wYWdlX190YWJsZSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDMlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xufVxuXG4ubWFpbi1wYWdlX190YWJsZS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbi1wYWdlX190YWJsZS1oZWFkZXItZWxlbWVudCB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucC1wYW5lbC10aXRsZWJhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XG4gIHBhZGRpbmc6IC41NzFlbSAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registration-page/registration-page.component */ "foYC");







const routes = [
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    { path: 'registration', component: _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"] },
    { path: 'main', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"], _pages_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"], _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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
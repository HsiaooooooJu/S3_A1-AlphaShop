/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n// 設定 webpack 的進入點\n\nconsole.log('JS loaded!')\n// 打包 webpack => npm run build\n\n// add DOM object\nconst steps = document.querySelectorAll(\".stepper__step\");\nconst forms = document.querySelectorAll(\".form-content__part\");\nconst btnPanel = document.querySelector(\".btn-control-panel\");\nconst prevBtn = document.querySelector(\".previous\");\nconst nextBtn = document.querySelector(\".next\");\n\nconst mainContent = document.getElementById(\"main-content\");\nconst deliveryPrice = document.querySelector(\".delivery-price\");\nconst cartProduct = document.querySelector(\".cart__product\");\nconst shippingRows = document.querySelector(\".form-content__part__shipping\");\nconst cartSubtotal = document.querySelector(\".cart__subtotal .subtotal-price\");\nconst darkModeToggle = document.querySelector(\".dark-mode__input\");\n\nlet step = 0;\nlet deliveryCost = 0;\nlet subtotal = 4500;\n\n// Go to next/previous form when click next/previous-btn\n// Active stepper when click next/previous-btn\nfunction handleStepControl(e) {\n  e.preventDefault();\n  const nowStep = steps[step];\n  if (e.target.matches(\".next\")) {\n    const nextStep = steps[step + 1];\n    nowStep.classList.add(\"checked\");\n    nextStep.classList.add(\"active\");\n    forms[step].classList.add(\"d-none\");\n    forms[step + 1].classList.remove(\"d-none\");\n    step += 1;\n  } else if (e.target.matches(\".previous\")) {\n    const prevStep = steps[step - 1];\n    nowStep.classList.remove(\"active\");\n    nowStep.classList.remove(\"checked\");\n    prevStep.classList.add(\"active\");\n    forms[step].classList.add(\"d-none\");\n    forms[step - 1].classList.remove(\"d-none\");\n    step -= 1;\n  }\n  setBtnStatus();\n}\n\n// set btn status\nfunction setBtnStatus() {\n  if (step === 0) {\n    prevBtn.classList.add(\"d-none\");\n  } else {\n    prevBtn.classList.remove(\"d-none\");\n  }\n  if (step === 2) {\n    nextBtn.innerHTML = \"確認下單\";\n  } else {\n    nextBtn.innerHTML = `下一步 <i class=\"fa-solid fa-arrow-right-long\"></i>`;\n  }\n}\n\nfunction changeDeliveryFee(e) {\n  if (e.target.matches(\".standard\")) {\n    deliveryPrice.innerHTML = \"免費\";\n    deliveryCost = 0;\n  } else if (e.target.matches(\".express\")) {\n    deliveryPrice.innerHTML = \"$ 500\";\n    deliveryCost = 500;\n  }\n}\n\n// Active add/minus amount and price\nfunction handleProductAmount(e) {\n  e.preventDefault()\n  let amount = Number(e.target.parentElement.children[1].innerHTML);\n  let price = Number(e.target.parentElement.nextElementSibling.innerHTML);\n  // console.log(price);\n  if (e.target.matches(\".amount__add\")) {\n    e.target.parentElement.children[1].innerHTML = amount + 1;\n    subtotal += price;\n  } else if (e.target.matches(\".amount__minus\") && amount > 1) {\n    e.target.parentElement.children[1].innerHTML = amount - 1;\n    subtotal -= price;\n  } else {\n    return;\n  }\n}\n\nfunction renderCart() {\n  cartSubtotal.innerHTML = subtotal + deliveryCost;\n}\n\n// Dark mode\nfunction handleDarkMode(e) {\n  e.preventDefault();\n  if (e.target.checked) {\n    document.documentElement.setAttribute(\"data-theme\", \"dark\");\n  } else {\n    document.documentElement.setAttribute(\"data-theme\", \"light\");\n  }\n}\n\nbtnPanel.addEventListener(\"click\", handleStepControl);\nshippingRows.addEventListener(\"click\", changeDeliveryFee);\ncartProduct.addEventListener(\"click\", handleProductAmount);\nmainContent.addEventListener(\"click\", renderCart);\ndarkModeToggle.addEventListener(\"change\", handleDarkMode);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });
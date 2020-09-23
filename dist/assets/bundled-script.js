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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/styles.css */ \"./assets/styles/css/styles.css\");\n/* harmony import */ var _styles_css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n  // Global Variables\r\n  const nav = document.querySelector(\"#navbar\");\r\n  const hamburgerBtn = document.querySelector(\".hamburger\");\r\n\r\n  // Function to remove nav overlay and set hamburger icon to normal when a nav link is clicked\r\n  function resetNav() {\r\n    nav.classList.remove(\"header__navbar-mobile-show\");\r\n    hamburgerBtn.classList.remove(\"hamburger-cross\");\r\n  }\r\n\r\n  // function to show nav overlay when hamburger icon is cliked\r\n  function hamburger() {\r\n    document.querySelector(\"#hamburger\").addEventListener(\"click\", () => {\r\n      if (nav.classList.contains(\"header__navbar-mobile-show\")) {\r\n        resetNav();\r\n      } else {\r\n        nav.classList.add(\"header__navbar-mobile-show\");\r\n        hamburgerBtn.classList.add(\"hamburger-cross\");\r\n      }\r\n    });\r\n  }\r\n\r\n  // function to call resetNav function and smooth scroll when a nav link is clicked\r\n  function navLinks() {\r\n    document.querySelector(\"#home-link\").addEventListener(\"click\", () => {\r\n      resetNav();\r\n      document.querySelector(\".hero-wrapper\").scrollIntoView({ behavior: \"smooth\" });\r\n    });\r\n\r\n    document.querySelector(\"#work-link\").addEventListener(\"click\", () => {\r\n      resetNav();\r\n      document.querySelector(\"#mywork\").scrollIntoView({ behavior: \"smooth\" });\r\n    });\r\n\r\n    document.querySelector(\"#projects-link\").addEventListener(\"click\", () => {\r\n      resetNav();\r\n      document.querySelector(\"#myprojects\").scrollIntoView({ behavior: \"smooth\" });\r\n    });\r\n  }\r\n\r\n  // function to reveal hero section - fade in effect\r\n  function revealHero() {\r\n    const hero = document.querySelector(\".hero\");\r\n    hero.style.opacity = \"1\";\r\n    hero.style.transition = \"opacity 6s\";\r\n  }\r\n\r\n  // function to reveal mywork and projects items on scroll\r\n  function revealOnScroll() {\r\n    let itemsToReveal = document.querySelectorAll(\".projects__grid-item\");\r\n\r\n    window.addEventListener(\"scroll\", () => {\r\n      itemsToReveal.forEach((el) => {\r\n        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;\r\n        if (scrollPercent < 75) {\r\n          el.classList.add(\"reveal-item-is-visible\");\r\n        } else {\r\n          el.classList.remove(\"reveal-item-is-visible\");\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  hamburger();\r\n  navLinks();\r\n  revealHero();\r\n  revealOnScroll();\r\n});\r\n\n\n//# sourceURL=webpack:///./assets/js/app.js?");

/***/ }),

/***/ "./assets/styles/css/styles.css":
/*!**************************************!*\
  !*** ./assets/styles/css/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/css/styles.css?");

/***/ })

/******/ });
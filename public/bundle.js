/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\n//In javascript we have only global and local scope but using let we will have block scoping.\n\n//Incase of var keyword.\n/* if(1){\r\n\tvar age = 25;\r\n\tconsole.log(\"var age is \",age);\r\n}\r\nconsole.log(\"var age is outside block\",age); // Will print the age as 25 */\n\n//Incase of let keyword.\n/* if(1){\r\n\tlet age = 26;\r\n\tconsole.log(\"let age is \",age);\r\n}\r\nconsole.log(\"let age is outside block\",age); //Will give error as age is not defined. */\n\n//Destructuring of array\n\nvar a = [1, 2, 3, 4, 5, 6, 7, 8];\n\nvar _ref = [1, 2].concat(a),\n    c = _ref[0],\n    d = _ref[1];\n\nvar b = [c, d].concat(a);\nconsole.log(\"Value of C\", c);\nconsole.log(\"Value of D\", d);\nconsole.log(\"Value of B\", b);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvaW5kZXguanM/MjAxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0luIGphdmFzY3JpcHQgd2UgaGF2ZSBvbmx5IGdsb2JhbCBhbmQgbG9jYWwgc2NvcGUgYnV0IHVzaW5nIGxldCB3ZSB3aWxsIGhhdmUgYmxvY2sgc2NvcGluZy5cclxuXHJcbi8vSW5jYXNlIG9mIHZhciBrZXl3b3JkLlxyXG4vKiBpZigxKXtcclxuXHR2YXIgYWdlID0gMjU7XHJcblx0Y29uc29sZS5sb2coXCJ2YXIgYWdlIGlzIFwiLGFnZSk7XHJcbn1cclxuY29uc29sZS5sb2coXCJ2YXIgYWdlIGlzIG91dHNpZGUgYmxvY2tcIixhZ2UpOyAvLyBXaWxsIHByaW50IHRoZSBhZ2UgYXMgMjUgKi9cclxuXHJcbi8vSW5jYXNlIG9mIGxldCBrZXl3b3JkLlxyXG4vKiBpZigxKXtcclxuXHRsZXQgYWdlID0gMjY7XHJcblx0Y29uc29sZS5sb2coXCJsZXQgYWdlIGlzIFwiLGFnZSk7XHJcbn1cclxuY29uc29sZS5sb2coXCJsZXQgYWdlIGlzIG91dHNpZGUgYmxvY2tcIixhZ2UpOyAvL1dpbGwgZ2l2ZSBlcnJvciBhcyBhZ2UgaXMgbm90IGRlZmluZWQuICovXHJcblxyXG4vL0Rlc3RydWN0dXJpbmcgb2YgYXJyYXlcclxuXHJcbmxldCBhID0gWzEsMiwzLDQsNSw2LDcsOF07XHJcbmxldCBbYyxkXSA9IFsxLDIsLi4uYV07XHJcbmxldCBiID0gW2MsZCwuLi5hXTtcclxuY29uc29sZS5sb2coXCJWYWx1ZSBvZiBDXCIsYyk7XHJcbmNvbnNvbGUubG9nKFwiVmFsdWUgb2YgRFwiLGQpO1xyXG5jb25zb2xlLmxvZyhcIlZhbHVlIG9mIEJcIixiKTtcclxuXHJcblx0XHRcdFxyXG5cdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
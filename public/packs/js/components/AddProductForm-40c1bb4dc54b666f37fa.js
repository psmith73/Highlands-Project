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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/AddProductForm.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/AddProductForm.js":
/*!***********************************************************!*\
  !*** ./app/javascript/packs/components/AddProductForm.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/phil/Desktop/Rails-React/rails-react-test/app/javascript/packs/components/AddProductForm.js: Unexpected token (12:27)\n\n  10 | \n  11 |     handleValueChange = (e) => {\n> 12 |         this.setState({name= e.target.name,\n     |                            ^\n  13 |             upc= e.target.upc,\n  14 |             available_on= e.target.available_on\n  15 |          })\n    at Object._raise (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:754:17)\n    at Object.raiseWithData (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:747:17)\n    at Object.raise (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.unexpected (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:8844:16)\n    at Object.checkExpressionErrors (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:8942:12)\n    at Object.parseMaybeAssign (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9506:12)\n    at Object.parseExprListItem (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:10829:18)\n    at Object.parseCallExpressionArguments (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9887:22)\n    at Object.parseSubscript (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9787:31)\n    at Object.parseSubscripts (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9716:19)\n    at Object.parseExprSubscripts (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9699:17)\n    at Object.parseMaybeUnary (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9673:21)\n    at Object.parseExprOps (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9543:23)\n    at Object.parseMaybeConditional (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9516:23)\n    at Object.parseMaybeAssign (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9471:21)\n    at Object.parseExpression (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9423:23)\n    at Object.parseStatementContent (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:11322:23)\n    at Object.parseStatement (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Object.parseBlockBody (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Object.parseBlock (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:11738:10)\n    at Object.parseFunctionBody (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:10745:24)\n    at Object.parseArrowExpression (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:10714:10)\n    at Object.parseParenAndDistinguishExpression (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:10332:12)\n    at Object.parseExprAtom (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:10044:21)\n    at Object.parseExprAtom (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:4658:20)\n    at Object.parseExprSubscripts (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9693:23)\n    at Object.parseMaybeUnary (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9673:21)\n    at Object.parseExprOps (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9543:23)\n    at Object.parseMaybeConditional (/Users/phil/Desktop/Rails-React/rails-react-test/node_modules/@babel/parser/lib/index.js:9516:23)");

/***/ })

/******/ });
//# sourceMappingURL=AddProductForm-40c1bb4dc54b666f37fa.js.map
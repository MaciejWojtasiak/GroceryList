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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var addButton = document.getElementById('add');
var list = document.querySelector('.list');
var productsArray = sessionStorage.Products;
var totalKg = 0;
var totalAmount = 0;

function displayProducts(products) {
  var sortedByCategory = products.reduce(function (obj, v, i) {
    obj[v.category] = obj[v.category] || [];
    obj[v.category].push(v);
    return obj;
  }, {});
  Object.entries(sortedByCategory).forEach(function (entry) {
    var _entry = _slicedToArray(entry, 2),
        key = _entry[0],
        values = _entry[1];

    var categoryHeading = document.createElement('h2');
    categoryHeading.innerText = "".concat(key);
    list.append(categoryHeading);
    var table = document.createElement('table');
    table.classList.add('table');
    table.id = "".concat(key);
    table.innerHTML = "    \n      <thead>     \n        <tr>        \n          <th scope=\"col\">Nazwa</th>\n          <th scope=\"col\">Warto\u015B\u0107</th>\n          <th scope=\"col\">Jednostka</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n      ".concat(values.map(function (value) {
      return "<tr id=\"".concat(value.name, "\">          \n        <td>").concat(value.name, "</td>\n        <td>").concat(value.value, "</td>\n        <td>").concat(value.unit, "</td>\n        <td><button type=\"button\" class=\"btn btn-danger\">Delete</button></td>\n      </tr>");
    }).join(' '), "\n      </tbody>\n      </table>");
    list.append(table);
  });
}

function clearUI() {
  list.innerHTML = "";
}

function getRadioValue() {
  var radios = Array.from(document.querySelectorAll('.radioBtn'));
  var checkedRadio = radios.filter(function (radio) {
    return radio.checked;
  });

  var _checkedRadio = _slicedToArray(checkedRadio, 1),
      button = _checkedRadio[0];

  return button.value;
}

function addProduct() {
  var form = document.getElementsByTagName('form')[0];
  var name = document.getElementById('product').value;
  var value = parseFloat(document.getElementById('value').value);
  var unit = getRadioValue();
  var category = document.getElementById('category').value;
  productsArray.push({
    name: name,
    value: value,
    unit: unit,
    category: category
  });
  sessionStorage.setItem("Products", JSON.stringify(productsArray));
  form.reset();
}

function deleteProduct(element) {
  productsArray.forEach(function (product, index) {
    if (product.name === element.parentElement.parentElement.id) {
      productsArray.splice(index, 1);
      sessionStorage.setItem("Products", JSON.stringify(productsArray));
    }
  });
  handleUI();
}

function displayTotal(productsArray) {
  var totalContainer = document.createElement('p');
  var totalKg = 0;
  var totalAmount = 0;
  productsArray.map(function (item) {
    if (item.unit === "Kg") {
      totalKg += item.value;
    } else {
      totalAmount += item.value;
    }
  });
  totalContainer.innerText = "Licznik produkt\xF3w: ".concat(totalKg, "kg oraz ").concat(totalAmount, " sztuk.");
  list.append(totalContainer);
}

displayTotal(productsArray);
addButton.addEventListener('click', function () {
  addProduct();
  handleUI();
});
list.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-danger')) {
    deleteProduct(e.target);
  } else {
    return;
  }
});
window.addEventListener("DOMContentLoaded", function () {
  displayProducts(productsArray);
});

function handleUI() {
  clearUI();
  displayProducts(productsArray);
  displayTotal(productsArray);
}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map
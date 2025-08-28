/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/easyHTTP.js":
/*!****************************!*\
  !*** ./src/js/easyHTTP.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easyhttp: () => (/* binding */ easyhttp),
/* harmony export */   fetchPromise: () => (/* binding */ fetchPromise),
/* harmony export */   fetchhttp: () => (/* binding */ fetchhttp)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Custom Ajax Library
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// MAKE GET REQUEST
easyHTTP.prototype.get = function (url, callback) {
  var _this = this;
  this.http.open('GET', url, true);
  this.http.onload = function () {
    if (_this.http.status >= 200 && _this.http.status < 300) {
      var res = JSON.parse(_this.http.responseText);
      callback(null, res);
    } else {
      callback("Error: " + _this.http.status);
    }
  };
  this.http.send();
};
// MAKE POST REQUEST
easyHTTP.prototype.post = function (url, data, callback) {
  var _this2 = this;
  this.http.open('POST', url, true);
  this.http.setRequestHeader("Content-Type", "application/json");
  this.http.onreadystatechange = function () {
    if (_this2.http.readyState === 4) {
      var status = Number(_this2.http.status);
      if (status >= 200 || status < 300) {
        callback(null, JSON.parse(_this2.http.responseText));
      } else {
        callback("Error: ".concat(_this2.http.status), null);
      }
    }
  };
  this.http.send(JSON.stringify(data));
};
// MAKE PUT REQUEST
easyHTTP.prototype.put = function (url, data, callback) {
  var _this3 = this;
  this.http.open('PUT', url, true);
  this.http.setRequestHeader("Content-Type", "application/json");
  this.http.onreadystatechange = function () {
    if (_this3.http.readyState === 4) {
      if (_this3.http.status >= 200 && _this3.http.status < 300) {
        callback(null, _this3.http.responseText);
      }
    }
  };
  this.http.send(JSON.stringify(data));
};
// MAKE DELETE REQUEST
easyHTTP.prototype["delete"] = function (url, callback) {
  var _this4 = this;
  this.http.open('DELETE', url, true);
  this.http.onload = function () {
    if (_this4.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error: " + _this4.http.status);
    }
  };
  this.http.send();
};

// // Custom Fetch Library with Promises
var fetchPromiseHTTP = /*#__PURE__*/function () {
  function fetchPromiseHTTP() {
    _classCallCheck(this, fetchPromiseHTTP);
  }
  return _createClass(fetchPromiseHTTP, [{
    key: "get",
    value: function get(url) {
      return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          return resolve(data);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function (response) {
          return response.json();
        }).then(function () {
          return resolve("User deleted...");
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }]);
}(); // Custom Library with Promises (Async & Await)
var fetchHTTP = /*#__PURE__*/function () {
  function fetchHTTP() {
    _classCallCheck(this, fetchHTTP);
  }
  return _createClass(fetchHTTP, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
        var response, userData;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return fetch(url);
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              userData = _context.v;
              return _context.a(2, userData);
          }
        }, _callee);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url, data) {
        var response, postData;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return fetch(url, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              postData = _context2.v;
              return _context2.a(2, postData);
          }
        }, _callee2);
      }));
      function post(_x2, _x3) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(url, data) {
        var response, putData;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return fetch(url, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            case 1:
              response = _context3.v;
              _context3.n = 2;
              return response.json();
            case 2:
              putData = _context3.v;
              return _context3.a(2, putData);
          }
        }, _callee3);
      }));
      function put(_x4, _x5) {
        return _put.apply(this, arguments);
      }
      return put;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(url) {
        var response, deleteData;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return fetch(url, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json'
                }
              });
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return 'User successfully deleted...';
            case 2:
              deleteData = _context4.v;
              return _context4.a(2, deleteData);
          }
        }, _callee4);
      }));
      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}(); // Exporting the libraries
var easyhttp = new easyHTTP();
var fetchhttp = new fetchHTTP();
var fetchPromise = new fetchPromiseHTTP();

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
var UI = function () {
  // DOM Selectors
  var uiSelectors = {
    postsContainer: ".apiPosts",
    postTitle: "#title",
    postBody: "#body",
    submitBtn: "post-submit",
    alert: "alert",
    postForm: ".post-form",
    success: "success",
    about: "about",
    successTitle: "success-title",
    successDesc: "success-desc",
    confirmation: "confirmation",
    allowBtn: "allow",
    rejectBtn: "reject",
    confirmTitle: "confirm-title",
    confirmDesc: "confirm-desc",
    sideMenu: "sideMenu",
    sideMenuOverlay: "sideOverlay",
    sideMenuIcon: "sideMenuIcon",
    closeMenu: 'sideMenuClose'
  };
  // Public methods
  // Fetch Posts
  var fetchPosts = function fetchPosts(data) {
    var postsContainer = document.querySelector(uiSelectors.postsContainer);
    postsContainer.innerHTML = ""; // clear old posts first
    if (!Array.isArray(data)) {
      postsContainer.innerHTML = "<div class=\"text-red-500 text-center text-xl\">Invalid data format</div>";
      return;
    }
    if (!data || data.length === 0) {
      postsContainer.innerHTML = "<div class=\"text-white text-center text-3xl\">No Posts!!</div>";
      return;
    }
    data.forEach(function (post) {
      if (post) {
        postsContainer.insertAdjacentHTML("beforeend", "\n                    <div class=\"post p-2 bg-[#ebf6f7] rounded-lg\" id=\"post-".concat(post.id, "\">\n                        <h3 id=\"post-title\" class=\"text-2xl text-center font-bold py-2\">").concat(post.title, "</h3>\n                        <p id=\"post-body\" class=\"font-semi-bold mb-3 text-wrap text-justify px-2\">").concat(post.body, "</p>\n                        <div class=\"flex gap-x-3 place-content-end pb-3\">\n                            <a href=\"#\" class=\"updateIcon inline-block\">\n                                <i class=\"fa-solid fa-pencil pencil text-xl text-[#001fa8] transition-all hover:text-blue-500 hover:-translate-y-0.5\" title=\"Edit\"></i>\n                            </a>\n                            <a href=\"#\" class=\"deleteIcon inline-block\">\n                                <i class=\"fa-solid fa-xmark xmark text-xl text-[#d83b3b] transition-all hover:text-red-600 hover:-translate-y-0.5\" title=\"Remove\"></i>\n                            </a>\n                        </div>\n                    </div>\n                "));
      }
    });
  };
  // Get post fields
  var getPostFields = function getPostFields() {
    return {
      title: document.querySelector(uiSelectors.postTitle).value,
      body: document.querySelector(uiSelectors.postBody).value
    };
  };
  // Check validation
  var checkValidation = function checkValidation(post) {
    var alertID = document.getElementById(uiSelectors.alert);
    // Validation
    if (post.title === '' || post.body === '') {
      alertID.classList.remove('slideAnimation');
      alertID.classList.remove('hidden');
      alertID.offsetWidth;
      alertID.classList.add('slideAnimation');
      if (post.title === '') {
        document.querySelector(uiSelectors.postTitle).style.borderColor = "red";
      }
      if (post.body === '') {
        document.querySelector(uiSelectors.postBody).style.borderColor = "red";
      }
      setTimeout(function () {
        alertID.classList.add('hidden');
        alertID.classList.remove('slideAnimation');
        document.querySelector(uiSelectors.postTitle).style.borderColor = "";
        document.querySelector(uiSelectors.postBody).style.borderColor = "";
      }, 4000);
      return false;
    }
    return true;
  };
  // Get post info for update
  var getPostInfo = function getPostInfo(postID) {
    var container = document.querySelector(uiSelectors.postsContainer);
    var posts = Array.from(container.children);
    var foundPost = posts.find(function (post) {
      var id = post.id.split('-');
      if (id[1] == postID) {
        var inputTitle = document.querySelector(uiSelectors.postTitle);
        var inputBody = document.querySelector(uiSelectors.postBody);
        inputTitle.value = post.querySelector("#post-title").textContent;
        inputBody.value = post.querySelector("#post-body").textContent;
        return true;
      } else {
        return false;
      }
    });
    return foundPost;
  };
  // Post ID from icons
  function getPostID(e) {
    var post = e.target.parentElement.parentElement.parentElement;
    var postID = post.id.split('-');
    return postID[1];
  }
  var clearFields = function clearFields() {
    document.querySelector(uiSelectors.postTitle).value = '';
    document.querySelector(uiSelectors.postBody).value = '';
    document.querySelector(uiSelectors.postTitle).style.borderColor = "";
    document.querySelector(uiSelectors.postBody).style.borderColor = "";
  };
  var success = function success(title, desc) {
    var success = document.getElementById(uiSelectors.success);
    var successTitle = document.getElementById(uiSelectors.successTitle);
    var successBody = document.getElementById(uiSelectors.successDesc);
    // Set Value
    successTitle.textContent = title;
    successBody.textContent = desc;
    success.classList.remove('hidden');
    success.classList.add('fadeInAnimation');
    setTimeout(function () {
      window.location.reload();
    }, 2500);
  };
  var checkConfirmation = function checkConfirmation(title, desc, callback) {
    var confirmationBox = document.getElementById(uiSelectors.confirmation);
    var confirmTitle = document.getElementById(uiSelectors.confirmTitle);
    var confirmDesc = document.getElementById(uiSelectors.confirmDesc);
    confirmTitle.textContent = title;
    confirmDesc.textContent = desc;
    confirmationBox.classList.remove('hidden');
    document.getElementById(uiSelectors.allowBtn).onclick = function (e) {
      e.preventDefault();
      confirmationBox.classList.add('hidden');
      callback(true);
    };
    document.getElementById(uiSelectors.rejectBtn).onclick = function (e) {
      e.preventDefault();
      confirmationBox.classList.add('hidden');
      callback(false);
    };
  };
  return {
    uiSelectors: uiSelectors,
    fetchPosts: fetchPosts,
    getPostFields: getPostFields,
    checkValidation: checkValidation,
    getPostInfo: getPostInfo,
    getPostID: getPostID,
    success: success,
    clearFields: clearFields,
    checkConfirmation: checkConfirmation
  };
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyHTTP.js */ "./src/js/easyHTTP.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/js/ui.js");


var uiSelectors = _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.uiSelectors;

// JSON-API
var API_BASE_URL = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost" ? "http://localhost:3000" : "https://crud-json-server-qapr.onrender.com"; // Render backend URL

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Fetch Posts
  getPosts();
  // Add Post
  document.getElementById(uiSelectors.submitBtn).addEventListener("click", function (e) {
    e.preventDefault();
    addPost(e);
  });
  // Submit Post
  document.querySelector(uiSelectors.postsContainer).addEventListener("click", function (e) {
    var editIcon = e.target.closest(".updateIcon");
    var deleteIcon = e.target.closest(".deleteIcon");
    if (editIcon) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkConfirmation("Are you sure you want this post to get set for update?", "Click, Yes to continue, No to cancel", function (response) {
        if (response) {
          updatePost(e);
        }
      });
    } else if (deleteIcon) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkConfirmation("Are you sure you want this post to get deleted?", "Click, Yes to continue, No to cancel", function (response) {
        if (response) {
          deletePost(e);
        }
      });
    }
  });
  // Icon Testing
  document.querySelector("#sideMenuIcon i").addEventListener("click", function (e) {
    e.preventDefault();
    var overlay = document.getElementById(uiSelectors.sideMenuOverlay);
    var menu = document.getElementById(uiSelectors.sideMenu);
    document.body.classList.add("overflow-y-hidden");
    overlay.classList.remove("hidden");
    menu.classList.remove("hidden");
    requestAnimationFrame(function () {
      menu.classList.remove("sideMenuExit");
      menu.classList.add("sideMenuEntrance");
    });
    console.log(menu.classList);
  });
  document.getElementById(uiSelectors.closeMenu).addEventListener("click", function (e) {
    e.preventDefault();
    var overlay = document.getElementById(uiSelectors.sideMenuOverlay);
    var menu = document.getElementById(uiSelectors.sideMenu);
    document.body.classList.remove("overflow-y-hidden");
    menu.classList.remove("sideMenuEntrance");
    menu.classList.add("sideMenuExit");
    setTimeout(function () {
      overlay.classList.add("hidden");
      menu.classList.add("hidden");
      menu.classList.remove("sideMenuExit");
    }, 700);
    console.log(menu.classList);
  });
});

// easyHTTP - AJAX
// @desc Fetch all posts
// @route GET /posts
// function getPosts() {
//   http.easyhttp.get("http://localhost:3000/posts", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       UI.fetchPosts(data);
//     }
//   });
// }

// @desc Post a post
// @route POST /posts
// function addPost() {
//   let post = UI.getPostFields();
//   if (UI.checkValidation(post)) {
//     // Ask for confirmation FIRST
//     UI.checkConfirmation(
//       "Confirm Post Submission?",
//       "Are you sure you want to submit this post?",
//       function (response) {
//         if (response) {
//           // Only submit if user confirms
//           http.easyhttp.post(
//             "http://localhost:3000/posts",
//             post,
//             (err, res) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 UI.success(
//                   "Post - Submission Successful",
//                   "Post has been submitted successfully without any errors"
//                 );
//                 getPosts();
//               }
//             }
//           );
//         }
//       }
//     );
//   } else {
//     console.error("Validation Failed");
//   }
// }
// function updatePost(e) {
//   e.preventDefault();
//         let postID = UI.getPostID(e);
//         let postToEdit = UI.getPostInfo(postID);
//         if (postToEdit) {
//           document
//             .getElementById(uiSelectors.submitBtn)
//             .addEventListener("click", () => {
//               UI.checkConfirmation(
//                 "Confirm Post Updation?",
//                 "Are you sure you want to update this post?",
//                 function (response) {
//                   if (response) {
//                     http.easyhttp.put(
//                       `http://localhost:3000/posts/${postID}`,
//                       UI.getPostFields(),
//                       (err, res) => {
//                         if (err) {
//                           console.log(err);
//                         } else if (UI.checkValidation(res)) {
//                           UI.success(
//                             "Post - Updation Successful",
//                             "Post has been updated successfully without any errors"
//                           );
//                           getPosts();
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             });
//         }
//       }
// @desc Delete a specific post
// @route DELETE /posts/id
// function deletePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   console.log(postID);
//   if (postID) {
//     http.easyhttp.delete(
//       `http://localhost:3000/posts/${postID}`,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//         } else {
//           UI.success(
//             "Post - Deletion Successful",
//             "Post has been deleted successfully without any errors"
//           );
//           getPosts();
//         }
//       }
//     );
//   }
// }

// Custom fetch using (Async/Await)
// function getPosts() {
//   http.fetchhttp
//     .get("http://localhost:3000/posts")
//     .then((data) => {
//       if (data) {
//         UI.fetchPosts(data);
//       }
//     })
//     .catch((err) => console.log(err));
// }
// function addPost() {
//   let post = UI.getPostFields();
//   if (UI.checkValidation(post)) {
//     // Ask for confirmation FIRST
//     UI.checkConfirmation(
//       "Confirm Post Submission?",
//       "Are you sure you want to submit this post?",
//       function (response) {
//         if (response) {
//           // Only submit if user confirms
//           http.fetchhttp
//             .post("http://localhost:3000/posts", post)
//             .catch((err) => {
//               if (err) {
//                 console.log(err);
//               }
//             })
//             .then((res) => {
//               UI.success(
//                 "Post - Submission Successful",
//                 "Post has been submitted successfully without any errors"
//               );
//               getPosts();
//             });
//         }
//       }
//     );
//   } else {
//     console.error("Validation Failed");
//   }
// }
// function updatePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   let postToEdit = UI.getPostInfo(postID);
//   if (postToEdit) {
//     document
//       .getElementById(uiSelectors.submitBtn)
//       .addEventListener("click", () => {
//         UI.checkConfirmation(
//           "Confirm Post Updation?",
//           "Are you sure you want to update this post?",
//           function (response) {
//             if (response) {
//               http.fetchhttp
//                 .put(
//                   `http://localhost:3000/posts/${postID}`,
//                   UI.getPostFields()
//                 )
//                 .catch((err) => {
//                   if (err) {
//                     console.log(err);
//                   }
//                 })
//                 .then((data) => {
//                   if (UI.checkValidation(data)) {
//                     UI.success(
//                       "Post - Updation Successful",
//                       "Post has been updated successfully without any errors"
//                     );
//                     getPosts();
//                   }
//                 });
//             }
//           }
//         );
//       });
//   }
// }
// function deletePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   console.log(postID);
//   if (postID) {
//     http.fetchhttp
//       .delete(`http://localhost:3000/posts/${postID}`)
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//         }
//       })
//       .then((res) => {
//         UI.success(
//           "Post - Deletion Successful",
//           "Post has been deleted successfully without any errors"
//         );
//         getPosts();
//       });
//   }
// }
// Custom Fetch (Promises)
function getPosts() {
  _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.get("".concat(API_BASE_URL, "/posts")).then(function (data) {
    if (data) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.fetchPosts(data);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
}
function addPost() {
  var post = _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostFields();
  if (_ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkValidation(post)) {
    // Ask for confirmation FIRST
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkConfirmation("Confirm Post Submission?", "Are you sure you want to submit this post?", function (response) {
      if (response) {
        // Only submit if user confirms
        _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.post("".concat(API_BASE_URL, "/posts"), post)["catch"](function (err) {
          if (err) {
            console.log(err);
          }
        }).then(function (res) {
          _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.success("Post - Submission Successful", "Post has been submitted successfully without any errors");
          getPosts();
        });
      }
    });
  } else {
    console.error("Validation Failed");
  }
}
function updatePost(e) {
  e.preventDefault();
  var postID = _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostID(e);
  var postToEdit = _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostInfo(postID);
  if (postToEdit) {
    document.getElementById(uiSelectors.submitBtn).addEventListener("click", function () {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkConfirmation("Confirm Post Updation?", "Are you sure you want to update this post?", function (response) {
        if (response) {
          _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.put("".concat(API_BASE_URL, "posts/").concat(postID), _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostFields())["catch"](function (err) {
            if (err) {
              console.log(err);
            }
          }).then(function (data) {
            if (_ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.checkValidation(data)) {
              _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.success("Post - Updation Successful", "Post has been updated successfully without any errors");
              getPosts();
            }
          });
        }
      });
    });
  }
}
function deletePost(e) {
  e.preventDefault();
  var postID = _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostID(e);
  console.log(postID);
  if (postID) {
    _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise["delete"]("".concat(API_BASE_URL, "/posts/").concat(postID))["catch"](function (err) {
      if (err) {
        console.log(err);
      }
    }).then(function (res) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.success("Post - Deletion Successful", "Post has been deleted successfully without any errors");
      getPosts();
    });
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNtQyxRQUFRQSxDQUFBLEVBQUc7RUFDbEJuSSxzREFBaUIsQ0FDZEUsR0FBRyxJQUFBa0IsTUFBQSxDQUFJNEcsWUFBWSxXQUFRLENBQUMsQ0FDNUJsSixJQUFJLENBQUMsVUFBQ2lDLElBQUksRUFBSztJQUNkLElBQUlBLElBQUksRUFBRTtNQUNSOEMs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RTtJQUNWeEcsc0RBQWlCLFVBQ1IsSUFBQW9CLE1BQUEsQ0FBSTRHLFlBQVksYUFBQTVHLE1BQUEsQ0FBVW9GLE1BQU0sQ0FBRSxDQUFDLFNBQ3BDLENBQUMsVUFBQzFFLEdBQUcsRUFBSztNQUNkLElBQUlBLEdBQUcsRUFBRTtRQUNQK0csT0FBTyxDQUFDQyxHQUFHLENBQUNoSCxHQUFHLENBQUM7TUFDbEI7SUFDRixDQUFDLENBQUMsQ0FDRGhELElBQUksQ0FBQyxVQUFDMkIsR0FBRyxFQUFLO01BQ2JvRCxzQ0FBRSxDQUFDUSxPQUFPLENBQ1IsNEJBQTRCLEVBQzVCLHVEQUNGLENBQUM7TUFDRDhELFFBQVEsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDO0VBQ047QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFiZWxfd2VicGFja19kZW1vLy4vc3JjL2pzL2Vhc3lIVFRQLmpzIiwid2VicGFjazovL2JhYmVsX3dlYnBhY2tfZGVtby8uL3NyYy9qcy91aS5qcyIsIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFiZWxfd2VicGFja19kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSBBamF4IExpYnJhcnlcclxuZnVuY3Rpb24gZWFzeUhUVFAoKSB7XHJcbiAgICB0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxufVxyXG5cclxuLy8gTUFLRSBHRVQgUkVRVUVTVFxyXG5lYXN5SFRUUC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5odHRwLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5odHRwLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5odHRwLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5odHRwLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh0aGlzLmh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2FsbGJhY2soXCJFcnJvcjogXCIgKyB0aGlzLmh0dHAuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmh0dHAuc2VuZCgpO1xyXG59XHJcbi8vIE1BS0UgUE9TVCBSRVFVRVNUXHJcbmVhc3lIVFRQLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjYWxsYmFjayl7XHJcbiAgICB0aGlzLmh0dHAub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgIHRoaXMuaHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PntcclxuICAgICAgICBpZiAodGhpcy5odHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gTnVtYmVyKHRoaXMuaHR0cC5zdGF0dXMpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID49IDIwMCB8fCBzdGF0dXMgPCAzMDApIHsgICBcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIEpTT04ucGFyc2UodGhpcy5odHRwLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhgRXJyb3I6ICR7dGhpcy5odHRwLnN0YXR1c31gLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaHR0cC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxufVxyXG4vLyBNQUtFIFBVVCBSRVFVRVNUXHJcbmVhc3lIVFRQLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNhbGxiYWNrKXtcclxuICAgIHRoaXMuaHR0cC5vcGVuKCdQVVQnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHRoaXMuaHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PntcclxuICAgICAgICBpZiAodGhpcy5odHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICBpZiAodGhpcy5odHRwLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5odHRwLnN0YXR1cyA8IDMwMCl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHRoaXMuaHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufVxyXG4gICAgdGhpcy5odHRwLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcbi8vIE1BS0UgREVMRVRFIFJFUVVFU1RcclxuZWFzeUhUVFAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuaHR0cC5vcGVuKCdERUxFVEUnLCB1cmwsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuaHR0cC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cC5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBcIlBvc3QgRGVsZXRlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2FsbGJhY2soXCJFcnJvcjogXCIgKyB0aGlzLmh0dHAuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmh0dHAuc2VuZCgpO1xyXG59XHJcblxyXG4vLyAvLyBDdXN0b20gRmV0Y2ggTGlicmFyeSB3aXRoIFByb21pc2VzXHJcbmNsYXNzIGZldGNoUHJvbWlzZUhUVFB7XHJcbiAgICBnZXQodXJsKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT57XHJcbiAgICAgICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwb3N0KHVybCwgZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiByZXNvbHZlKGRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdXQodXJsLGRhdGEpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZGVsZXRlKHVybCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHJlc29sdmUoXCJVc2VyIGRlbGV0ZWQuLi5cIikpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuLy8gQ3VzdG9tIExpYnJhcnkgd2l0aCBQcm9taXNlcyAoQXN5bmMgJiBBd2FpdClcclxuY2xhc3MgZmV0Y2hIVFRQe1xyXG4gICAgYXN5bmMgZ2V0KHVybCl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB1c2VyRGF0YTtcclxuICAgIH1cclxuICAgIGFzeW5jIHBvc3QodXJsLCBkYXRhKXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBwb3N0RGF0YTtcclxuICAgIH1cclxuICAgIGFzeW5jIHB1dCh1cmwsZGF0YSl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5IDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHV0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcHV0RGF0YTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZSh1cmwpe1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkZWxldGVEYXRhID0gYXdhaXQgJ1VzZXIgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQuLi4nO1xyXG4gICAgICAgIHJldHVybiBkZWxldGVEYXRhO1xyXG4gICAgfVxyXG59XHJcbi8vIEV4cG9ydGluZyB0aGUgbGlicmFyaWVzXHJcbmV4cG9ydCBjb25zdCBlYXN5aHR0cCA9IG5ldyBlYXN5SFRUUCgpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hodHRwID0gbmV3IGZldGNoSFRUUCgpO1xyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9taXNlID0gbmV3IGZldGNoUHJvbWlzZUhUVFAoKTsiLCJjb25zdCBVSSA9ICgoKSA9PiB7XHJcbiAgICAvLyBET00gU2VsZWN0b3JzXHJcbiAgICBjb25zdCB1aVNlbGVjdG9ycyA9IHtcclxuICAgICAgICBwb3N0c0NvbnRhaW5lcjogXCIuYXBpUG9zdHNcIixcclxuICAgICAgICBwb3N0VGl0bGU6IFwiI3RpdGxlXCIsXHJcbiAgICAgICAgcG9zdEJvZHk6IFwiI2JvZHlcIixcclxuICAgICAgICBzdWJtaXRCdG46IFwicG9zdC1zdWJtaXRcIixcclxuICAgICAgICBhbGVydDogXCJhbGVydFwiLCBcclxuICAgICAgICBwb3N0Rm9ybTogXCIucG9zdC1mb3JtXCIsXHJcbiAgICAgICAgc3VjY2VzczogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgYWJvdXQ6IFwiYWJvdXRcIixcclxuICAgICAgICBzdWNjZXNzVGl0bGU6IFwic3VjY2Vzcy10aXRsZVwiLFxyXG4gICAgICAgIHN1Y2Nlc3NEZXNjOiBcInN1Y2Nlc3MtZGVzY1wiLFxyXG4gICAgICAgIGNvbmZpcm1hdGlvbjogXCJjb25maXJtYXRpb25cIixcclxuICAgICAgICBhbGxvd0J0bjogXCJhbGxvd1wiLFxyXG4gICAgICAgIHJlamVjdEJ0bjogXCJyZWplY3RcIixcclxuICAgICAgICBjb25maXJtVGl0bGU6IFwiY29uZmlybS10aXRsZVwiLFxyXG4gICAgICAgIGNvbmZpcm1EZXNjOiBcImNvbmZpcm0tZGVzY1wiLFxyXG4gICAgICAgIHNpZGVNZW51OiBcInNpZGVNZW51XCIsXHJcbiAgICAgICAgc2lkZU1lbnVPdmVybGF5OiBcInNpZGVPdmVybGF5XCIsXHJcbiAgICAgICAgc2lkZU1lbnVJY29uOiBcInNpZGVNZW51SWNvblwiLFxyXG4gICAgICAgIGNsb3NlTWVudTogJ3NpZGVNZW51Q2xvc2UnXHJcbiAgICB9O1xyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIC8vIEZldGNoIFBvc3RzXHJcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBwb3N0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdHNDb250YWluZXIpO1xyXG4gICAgICAgIHBvc3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIGNsZWFyIG9sZCBwb3N0cyBmaXJzdFxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xyXG4gICAgICAgICAgICBwb3N0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+SW52YWxpZCBkYXRhIGZvcm1hdDwvZGl2PmA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgXHJcbiAgICBcclxuICAgICAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcG9zdHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHRleHQtM3hsXCI+Tm8gUG9zdHMhITwvZGl2PmA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0c0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0IHAtMiBiZy1bI2ViZjZmN10gcm91bmRlZC1sZ1wiIGlkPVwicG9zdC0ke3Bvc3QuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD1cInBvc3QtdGl0bGVcIiBjbGFzcz1cInRleHQtMnhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCBweS0yXCI+JHtwb3N0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicG9zdC1ib2R5XCIgY2xhc3M9XCJmb250LXNlbWktYm9sZCBtYi0zIHRleHQtd3JhcCB0ZXh0LWp1c3RpZnkgcHgtMlwiPiR7cG9zdC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLXgtMyBwbGFjZS1jb250ZW50LWVuZCBwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidXBkYXRlSWNvbiBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBlbmNpbCBwZW5jaWwgdGV4dC14bCB0ZXh0LVsjMDAxZmE4XSB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGhvdmVyOi10cmFuc2xhdGUteS0wLjVcIiB0aXRsZT1cIkVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZGVsZXRlSWNvbiBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrIHhtYXJrIHRleHQteGwgdGV4dC1bI2Q4M2IzYl0gdHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC1yZWQtNjAwIGhvdmVyOi10cmFuc2xhdGUteS0wLjVcIiB0aXRsZT1cIlJlbW92ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIEdldCBwb3N0IGZpZWxkc1xyXG4gICAgY29uc3QgZ2V0UG9zdEZpZWxkcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RUaXRsZSkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RCb2R5KS52YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyBDaGVjayB2YWxpZGF0aW9uXHJcbiAgICBjb25zdCBjaGVja1ZhbGlkYXRpb24gPSAocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWxlcnRJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmFsZXJ0KTtcclxuICAgICAgICAgICAgLy8gVmFsaWRhdGlvblxyXG4gICAgICAgICAgICBpZiAocG9zdC50aXRsZSA9PT0gJycgfHwgcG9zdC5ib2R5ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRJRC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUFuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnRJRC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0SUQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBhbGVydElELmNsYXNzTGlzdC5hZGQoJ3NsaWRlQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zdC50aXRsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RUaXRsZSkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc3QuYm9keSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RCb2R5KS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydElELmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0SUQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVBbmltYXRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RUaXRsZSkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH0sIDQwMDApOyAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIEdldCBwb3N0IGluZm8gZm9yIHVwZGF0ZVxyXG4gICAgY29uc3QgZ2V0UG9zdEluZm8gPSAocG9zdElEKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdHNDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBwb3N0cyA9IEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKTtcclxuICAgICAgICBsZXQgZm91bmRQb3N0ID0gcG9zdHMuZmluZCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBwb3N0LmlkLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgIGlmKGlkWzFdID09IHBvc3RJRCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdFRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RCb2R5KTtcclxuICAgICAgICAgICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBwb3N0LnF1ZXJ5U2VsZWN0b3IoXCIjcG9zdC10aXRsZVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGlucHV0Qm9keS52YWx1ZSA9IHBvc3QucXVlcnlTZWxlY3RvcihcIiNwb3N0LWJvZHlcIikudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZm91bmRQb3N0O1xyXG4gICAgfTtcclxuICAgIC8vIFBvc3QgSUQgZnJvbSBpY29uc1xyXG4gICAgZnVuY3Rpb24gZ2V0UG9zdElEKGUpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3QgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgbGV0IHBvc3RJRCA9IHBvc3QuaWQuc3BsaXQoJy0nKTsgICBcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RJRFsxXTtcclxuICAgIH0gXHJcbiAgICBjb25zdCBjbGVhckZpZWxkcyA9ICgpID0+e1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdFRpdGxlKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0VGl0bGUpLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjsgICBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RCb2R5KS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9ICh0aXRsZSwgZGVzYykgPT4ge1xyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VjY2Vzcyk7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3NUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnN1Y2Nlc3NUaXRsZSk7IFxyXG4gICAgICAgIGxldCBzdWNjZXNzQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnN1Y2Nlc3NEZXNjKTtcclxuICAgICAgICAvLyBTZXQgVmFsdWVcclxuICAgICAgICBzdWNjZXNzVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICBzdWNjZXNzQm9keS50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgICAgICAgc3VjY2Vzcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBzdWNjZXNzLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkFuaW1hdGlvbicpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0sIDI1MDApXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja0NvbmZpcm1hdGlvbiA9ICh0aXRsZSwgZGVzYyxjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIGxldCBjb25maXJtYXRpb25Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5jb25maXJtYXRpb24pO1xyXG4gICAgICAgIGxldCBjb25maXJtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5jb25maXJtVGl0bGUpO1xyXG4gICAgICAgIGxldCBjb25maXJtRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmNvbmZpcm1EZXNjKTtcclxuICAgICAgICBjb25maXJtVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgICAgIGNvbmZpcm1EZXNjLnRleHRDb250ZW50ID0gZGVzYztcclxuXHJcbiAgICAgICAgY29uZmlybWF0aW9uQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmFsbG93QnRuKS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25maXJtYXRpb25Cb3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5yZWplY3RCdG4pLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdWlTZWxlY3RvcnMsXHJcbiAgICAgICAgZmV0Y2hQb3N0cyxcclxuICAgICAgICBnZXRQb3N0RmllbGRzLFxyXG4gICAgICAgIGNoZWNrVmFsaWRhdGlvbixcclxuICAgICAgICBnZXRQb3N0SW5mbyxcclxuICAgICAgICBnZXRQb3N0SUQsXHJcbiAgICAgICAgc3VjY2VzcyxcclxuICAgICAgICBjbGVhckZpZWxkcyxcclxuICAgICAgICBjaGVja0NvbmZpcm1hdGlvbixcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBVSSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGh0dHAgZnJvbSBcIi4vZWFzeUhUVFAuanNcIjtcclxuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aS5qc1wiO1xyXG5sZXQgdWlTZWxlY3RvcnMgPSBVSS51aVNlbGVjdG9ycztcclxuXHJcbi8vIEpTT04tQVBJXHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9XHJcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcIjEyNy4wLjAuMVwiIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIlxyXG4gICAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXHJcbiAgICA6IFwiaHR0cHM6Ly9jcnVkLWpzb24tc2VydmVyLXFhcHIub25yZW5kZXIuY29tXCI7IC8vIFJlbmRlciBiYWNrZW5kIFVSTFxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAvLyBGZXRjaCBQb3N0c1xyXG4gIGdldFBvc3RzKCk7XHJcbiAgLy8gQWRkIFBvc3RcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnN1Ym1pdEJ0bilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBhZGRQb3N0KGUpO1xyXG4gICAgfSk7XHJcbiAgLy8gU3VibWl0IFBvc3RcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdHNDb250YWluZXIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBlZGl0SWNvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudXBkYXRlSWNvblwiKTtcclxuICAgICAgbGV0IGRlbGV0ZUljb24gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZUljb25cIik7XHJcbiAgICAgIGlmIChlZGl0SWNvbikge1xyXG4gICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4gICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdGhpcyBwb3N0IHRvIGdldCBzZXQgZm9yIHVwZGF0ZT9cIixcclxuICAgICAgICAgIFwiQ2xpY2ssIFllcyB0byBjb250aW51ZSwgTm8gdG8gY2FuY2VsXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlUG9zdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGVsZXRlSWNvbikge1xyXG4gICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4gICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdGhpcyBwb3N0IHRvIGdldCBkZWxldGVkP1wiLFxyXG4gICAgICAgICAgXCJDbGljaywgWWVzIHRvIGNvbnRpbnVlLCBObyB0byBjYW5jZWxcIixcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBkZWxldGVQb3N0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgLy8gSWNvbiBUZXN0aW5nXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlTWVudUljb24gaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnVPdmVybGF5KTtcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnUpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3cteS1oaWRkZW5cIik7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlTWVudUV4aXRcIik7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInNpZGVNZW51RW50cmFuY2VcIik7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKG1lbnUuY2xhc3NMaXN0KTtcclxuICB9KTtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmNsb3NlTWVudSlcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnNpZGVNZW51T3ZlcmxheSk7XHJcbiAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnUpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy15LWhpZGRlblwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZU1lbnVFbnRyYW5jZVwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic2lkZU1lbnVFeGl0XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVNZW51RXhpdFwiKTtcclxuICAgICAgfSwgNzAwKTtcclxuICAgICAgY29uc29sZS5sb2cobWVudS5jbGFzc0xpc3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gZWFzeUhUVFAgLSBBSkFYXHJcbi8vIEBkZXNjIEZldGNoIGFsbCBwb3N0c1xyXG4vLyBAcm91dGUgR0VUIC9wb3N0c1xyXG4vLyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuLy8gICBodHRwLmVhc3lodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLCAoZXJyLCBkYXRhKSA9PiB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBVSS5mZXRjaFBvc3RzKGRhdGEpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBAZGVzYyBQb3N0IGEgcG9zdFxyXG4vLyBAcm91dGUgUE9TVCAvcG9zdHNcclxuLy8gZnVuY3Rpb24gYWRkUG9zdCgpIHtcclxuLy8gICBsZXQgcG9zdCA9IFVJLmdldFBvc3RGaWVsZHMoKTtcclxuLy8gICBpZiAoVUkuY2hlY2tWYWxpZGF0aW9uKHBvc3QpKSB7XHJcbi8vICAgICAvLyBBc2sgZm9yIGNvbmZpcm1hdGlvbiBGSVJTVFxyXG4vLyAgICAgVUkuY2hlY2tDb25maXJtYXRpb24oXHJcbi8vICAgICAgIFwiQ29uZmlybSBQb3N0IFN1Ym1pc3Npb24/XCIsXHJcbi8vICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHBvc3Q/XCIsXHJcbi8vICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgLy8gT25seSBzdWJtaXQgaWYgdXNlciBjb25maXJtc1xyXG4vLyAgICAgICAgICAgaHR0cC5lYXN5aHR0cC5wb3N0KFxyXG4vLyAgICAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLFxyXG4vLyAgICAgICAgICAgICBwb3N0LFxyXG4vLyAgICAgICAgICAgICAoZXJyLCByZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4vLyAgICAgICAgICAgICAgICAgICBcIlBvc3QgLSBTdWJtaXNzaW9uIFN1Y2Nlc3NmdWxcIixcclxuLy8gICAgICAgICAgICAgICAgICAgXCJQb3N0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICBnZXRQb3N0cygpO1xyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIEZhaWxlZFwiKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gdXBkYXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgICAgICAgbGV0IHBvc3RUb0VkaXQgPSBVSS5nZXRQb3N0SW5mbyhwb3N0SUQpO1xyXG4vLyAgICAgICAgIGlmIChwb3N0VG9FZGl0KSB7XHJcbi8vICAgICAgICAgICBkb2N1bWVudFxyXG4vLyAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VibWl0QnRuKVxyXG4vLyAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuLy8gICAgICAgICAgICAgICAgIFwiQ29uZmlybSBQb3N0IFVwZGF0aW9uP1wiLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRoaXMgcG9zdD9cIixcclxuLy8gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBodHRwLmVhc3lodHRwLnB1dChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvJHtwb3N0SUR9YCxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFVJLmdldFBvc3RGaWVsZHMoKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIChlcnIsIHJlcykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVSS5jaGVja1ZhbGlkYXRpb24ocmVzKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnN1Y2Nlc3MoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3QgLSBVcGRhdGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vIEBkZXNjIERlbGV0ZSBhIHNwZWNpZmljIHBvc3RcclxuLy8gQHJvdXRlIERFTEVURSAvcG9zdHMvaWRcclxuLy8gZnVuY3Rpb24gZGVsZXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgY29uc29sZS5sb2cocG9zdElEKTtcclxuLy8gICBpZiAocG9zdElEKSB7XHJcbi8vICAgICBodHRwLmVhc3lodHRwLmRlbGV0ZShcclxuLy8gICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy8ke3Bvc3RJRH1gLFxyXG4vLyAgICAgICAoZXJyLCByZXMpID0+IHtcclxuLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4vLyAgICAgICAgICAgICBcIlBvc3QgLSBEZWxldGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQ3VzdG9tIGZldGNoIHVzaW5nIChBc3luYy9Bd2FpdClcclxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbi8vICAgaHR0cC5mZXRjaGh0dHBcclxuLy8gICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHNcIilcclxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgICAgVUkuZmV0Y2hQb3N0cyhkYXRhKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBhZGRQb3N0KCkge1xyXG4vLyAgIGxldCBwb3N0ID0gVUkuZ2V0UG9zdEZpZWxkcygpO1xyXG4vLyAgIGlmIChVSS5jaGVja1ZhbGlkYXRpb24ocG9zdCkpIHtcclxuLy8gICAgIC8vIEFzayBmb3IgY29uZmlybWF0aW9uIEZJUlNUXHJcbi8vICAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuLy8gICAgICAgXCJDb25maXJtIFBvc3QgU3VibWlzc2lvbj9cIixcclxuLy8gICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcG9zdD9cIixcclxuLy8gICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAvLyBPbmx5IHN1Ym1pdCBpZiB1c2VyIGNvbmZpcm1zXHJcbi8vICAgICAgICAgICBodHRwLmZldGNoaHR0cFxyXG4vLyAgICAgICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLCBwb3N0KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgVUkuc3VjY2VzcyhcclxuLy8gICAgICAgICAgICAgICAgIFwiUG9zdCAtIFN1Ym1pc3Npb24gU3VjY2Vzc2Z1bFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJQb3N0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gRmFpbGVkXCIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBmdW5jdGlvbiB1cGRhdGVQb3N0KGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IHBvc3RJRCA9IFVJLmdldFBvc3RJRChlKTtcclxuLy8gICBsZXQgcG9zdFRvRWRpdCA9IFVJLmdldFBvc3RJbmZvKHBvc3RJRCk7XHJcbi8vICAgaWYgKHBvc3RUb0VkaXQpIHtcclxuLy8gICAgIGRvY3VtZW50XHJcbi8vICAgICAgIC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5zdWJtaXRCdG4pXHJcbi8vICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4vLyAgICAgICAgICAgXCJDb25maXJtIFBvc3QgVXBkYXRpb24/XCIsXHJcbi8vICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1cGRhdGUgdGhpcyBwb3N0P1wiLFxyXG4vLyAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgIGh0dHAuZmV0Y2hodHRwXHJcbi8vICAgICAgICAgICAgICAgICAucHV0KFxyXG4vLyAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzLyR7cG9zdElEfWAsXHJcbi8vICAgICAgICAgICAgICAgICAgIFVJLmdldFBvc3RGaWVsZHMoKVxyXG4vLyAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBpZiAoVUkuY2hlY2tWYWxpZGF0aW9uKGRhdGEpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgVUkuc3VjY2VzcyhcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCAtIFVwZGF0aW9uIFN1Y2Nlc3NmdWxcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZ2V0UG9zdHMoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gZGVsZXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgY29uc29sZS5sb2cocG9zdElEKTtcclxuLy8gICBpZiAocG9zdElEKSB7XHJcbi8vICAgICBodHRwLmZldGNoaHR0cFxyXG4vLyAgICAgICAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvJHtwb3N0SUR9YClcclxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgIFVJLnN1Y2Nlc3MoXHJcbi8vICAgICAgICAgICBcIlBvc3QgLSBEZWxldGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBDdXN0b20gRmV0Y2ggKFByb21pc2VzKVxyXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICBodHRwLmZldGNoUHJvbWlzZVxyXG4gICAgLmdldChgJHtBUElfQkFTRV9VUkx9L3Bvc3RzYClcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgVUkuZmV0Y2hQb3N0cyhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufVxyXG5mdW5jdGlvbiBhZGRQb3N0KCkge1xyXG4gIGxldCBwb3N0ID0gVUkuZ2V0UG9zdEZpZWxkcygpO1xyXG4gIGlmIChVSS5jaGVja1ZhbGlkYXRpb24ocG9zdCkpIHtcclxuICAgIC8vIEFzayBmb3IgY29uZmlybWF0aW9uIEZJUlNUXHJcbiAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuICAgICAgXCJDb25maXJtIFBvc3QgU3VibWlzc2lvbj9cIixcclxuICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcG9zdD9cIixcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvLyBPbmx5IHN1Ym1pdCBpZiB1c2VyIGNvbmZpcm1zXHJcbiAgICAgICAgICBodHRwLmZldGNoUHJvbWlzZVxyXG4gICAgICAgICAgICAucG9zdChgJHtBUElfQkFTRV9VUkx9L3Bvc3RzYCwgcG9zdClcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIFVJLnN1Y2Nlc3MoXHJcbiAgICAgICAgICAgICAgICBcIlBvc3QgLSBTdWJtaXNzaW9uIFN1Y2Nlc3NmdWxcIixcclxuICAgICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IHdpdGhvdXQgYW55IGVycm9yc1wiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBnZXRQb3N0cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIEZhaWxlZFwiKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlUG9zdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbiAgbGV0IHBvc3RUb0VkaXQgPSBVSS5nZXRQb3N0SW5mbyhwb3N0SUQpO1xyXG4gIGlmIChwb3N0VG9FZGl0KSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VibWl0QnRuKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuICAgICAgICAgIFwiQ29uZmlybSBQb3N0IFVwZGF0aW9uP1wiLFxyXG4gICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRoaXMgcG9zdD9cIixcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBodHRwLmZldGNoUHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLnB1dChcclxuICAgICAgICAgICAgICAgICAgYCR7QVBJX0JBU0VfVVJMfXBvc3RzLyR7cG9zdElEfWAsXHJcbiAgICAgICAgICAgICAgICAgIFVJLmdldFBvc3RGaWVsZHMoKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoVUkuY2hlY2tWYWxpZGF0aW9uKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUkuc3VjY2VzcyhcclxuICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCAtIFVwZGF0aW9uIFN1Y2Nlc3NmdWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9zdHMoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlUG9zdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbiAgY29uc29sZS5sb2cocG9zdElEKTtcclxuICBpZiAocG9zdElEKSB7XHJcbiAgICBodHRwLmZldGNoUHJvbWlzZVxyXG4gICAgICAuZGVsZXRlKGAke0FQSV9CQVNFX1VSTH0vcG9zdHMvJHtwb3N0SUR9YClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIFVJLnN1Y2Nlc3MoXHJcbiAgICAgICAgICBcIlBvc3QgLSBEZWxldGlvbiBTdWNjZXNzZnVsXCIsXHJcbiAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGdldFBvc3RzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfdHlwZW9mIiwiY29uc3RydWN0b3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJlYXN5SFRUUCIsImh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsImdldCIsInVybCIsImNhbGxiYWNrIiwiX3RoaXMiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsInBvc3QiLCJkYXRhIiwiX3RoaXMyIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjb25jYXQiLCJzdHJpbmdpZnkiLCJwdXQiLCJfdGhpczMiLCJfdGhpczQiLCJmZXRjaFByb21pc2VIVFRQIiwicmVqZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJlcnIiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRlbGV0ZSIsImZldGNoSFRUUCIsIl9nZXQiLCJfY2FsbGVlIiwidXNlckRhdGEiLCJfY29udGV4dCIsIl94IiwiX3Bvc3QiLCJfY2FsbGVlMiIsInBvc3REYXRhIiwiX2NvbnRleHQyIiwiX3gyIiwiX3gzIiwiX3B1dCIsIl9jYWxsZWUzIiwicHV0RGF0YSIsIl9jb250ZXh0MyIsIl94NCIsIl94NSIsIl9kZWxldGUyIiwiX2NhbGxlZTQiLCJkZWxldGVEYXRhIiwiX2NvbnRleHQ0IiwiX3g2IiwiZWFzeWh0dHAiLCJmZXRjaGh0dHAiLCJmZXRjaFByb21pc2UiLCJVSSIsInVpU2VsZWN0b3JzIiwicG9zdHNDb250YWluZXIiLCJwb3N0VGl0bGUiLCJwb3N0Qm9keSIsInN1Ym1pdEJ0biIsImFsZXJ0IiwicG9zdEZvcm0iLCJzdWNjZXNzIiwiYWJvdXQiLCJzdWNjZXNzVGl0bGUiLCJzdWNjZXNzRGVzYyIsImNvbmZpcm1hdGlvbiIsImFsbG93QnRuIiwicmVqZWN0QnRuIiwiY29uZmlybVRpdGxlIiwiY29uZmlybURlc2MiLCJzaWRlTWVudSIsInNpZGVNZW51T3ZlcmxheSIsInNpZGVNZW51SWNvbiIsImNsb3NlTWVudSIsImZldGNoUG9zdHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaWQiLCJ0aXRsZSIsImdldFBvc3RGaWVsZHMiLCJjaGVja1ZhbGlkYXRpb24iLCJhbGVydElEIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJvZmZzZXRXaWR0aCIsImFkZCIsInN0eWxlIiwiYm9yZGVyQ29sb3IiLCJzZXRUaW1lb3V0IiwiZ2V0UG9zdEluZm8iLCJwb3N0SUQiLCJjb250YWluZXIiLCJwb3N0cyIsImZyb20iLCJjaGlsZHJlbiIsImZvdW5kUG9zdCIsImZpbmQiLCJzcGxpdCIsImlucHV0VGl0bGUiLCJpbnB1dEJvZHkiLCJ0ZXh0Q29udGVudCIsImdldFBvc3RJRCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGVhckZpZWxkcyIsImRlc2MiLCJzdWNjZXNzQm9keSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2hlY2tDb25maXJtYXRpb24iLCJjb25maXJtYXRpb25Cb3giLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJBUElfQkFTRV9VUkwiLCJob3N0bmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRQb3N0cyIsImFkZFBvc3QiLCJlZGl0SWNvbiIsImNsb3Nlc3QiLCJkZWxldGVJY29uIiwidXBkYXRlUG9zdCIsImRlbGV0ZVBvc3QiLCJvdmVybGF5IiwibWVudSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBvc3RUb0VkaXQiXSwic291cmNlUm9vdCI6IiJ9
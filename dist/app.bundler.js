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
  _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.get("http://localhost:3000/posts").then(function (data) {
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
        _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.post("http://localhost:3000/posts", post)["catch"](function (err) {
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
          _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise.put("http://localhost:3000/posts/".concat(postID), _ui_js__WEBPACK_IMPORTED_MODULE_1__.UI.getPostFields())["catch"](function (err) {
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
    _easyHTTP_js__WEBPACK_IMPORTED_MODULE_0__.fetchPromise["delete"]("http://localhost:3000/posts/".concat(postID))["catch"](function (err) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7TUFDYm9ELHNDQUFFLENBQUNRLE9BQU8sQ0FDUiw0QkFBNEIsRUFDNUIsdURBQ0YsQ0FBQztNQUNENEQsUUFBUSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7RUFDTjtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vLi9zcmMvanMvZWFzeUhUVFAuanMiLCJ3ZWJwYWNrOi8vYmFiZWxfd2VicGFja19kZW1vLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL2JhYmVsX3dlYnBhY2tfZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYWJlbF93ZWJwYWNrX2RlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhYmVsX3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhYmVsX3dlYnBhY2tfZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhYmVsX3dlYnBhY2tfZGVtby8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIEFqYXggTGlicmFyeVxyXG5mdW5jdGlvbiBlYXN5SFRUUCgpIHtcclxuICAgIHRoaXMuaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG59XHJcblxyXG4vLyBNQUtFIEdFVCBSRVFVRVNUXHJcbmVhc3lIVFRQLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLmh0dHAub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmh0dHAub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmh0dHAuc3RhdHVzID49IDIwMCAmJiB0aGlzLmh0dHAuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBKU09OLnBhcnNlKHRoaXMuaHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYWxsYmFjayhcIkVycm9yOiBcIiArIHRoaXMuaHR0cC5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaHR0cC5zZW5kKCk7XHJcbn1cclxuLy8gTUFLRSBQT1NUIFJFUVVFU1RcclxuZWFzeUhUVFAucHJvdG90eXBlLnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNhbGxiYWNrKXtcclxuICAgIHRoaXMuaHR0cC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmh0dHAuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+e1xyXG4gICAgICAgIGlmICh0aGlzLmh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBOdW1iZXIodGhpcy5odHRwLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPj0gMjAwIHx8IHN0YXR1cyA8IDMwMCkgeyAgIFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgSlNPTi5wYXJzZSh0aGlzLmh0dHAucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGBFcnJvcjogJHt0aGlzLmh0dHAuc3RhdHVzfWAsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5odHRwLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG59XHJcbi8vIE1BS0UgUFVUIFJFUVVFU1RcclxuZWFzeUhUVFAucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY2FsbGJhY2spe1xyXG4gICAgdGhpcy5odHRwLm9wZW4oJ1BVVCcsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+e1xyXG4gICAgICAgIGlmICh0aGlzLmh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIGlmICh0aGlzLmh0dHAuc3RhdHVzID49IDIwMCAmJiB0aGlzLmh0dHAuc3RhdHVzIDwgMzAwKXtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgdGhpcy5odHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG59XHJcbiAgICB0aGlzLmh0dHAuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbn1cclxuLy8gTUFLRSBERUxFVEUgUkVRVUVTVFxyXG5lYXN5SFRUUC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5odHRwLm9wZW4oJ0RFTEVURScsIHVybCwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5odHRwLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5odHRwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIFwiUG9zdCBEZWxldGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjYWxsYmFjayhcIkVycm9yOiBcIiArIHRoaXMuaHR0cC5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaHR0cC5zZW5kKCk7XHJcbn1cclxuXHJcbi8vIC8vIEN1c3RvbSBGZXRjaCBMaWJyYXJ5IHdpdGggUHJvbWlzZXNcclxuY2xhc3MgZmV0Y2hQcm9taXNlSFRUUHtcclxuICAgIGdldCh1cmwpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PntcclxuICAgICAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHBvc3QodXJsLCBkYXRhKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1dCh1cmwsZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiByZXNvbHZlKGRhdGEpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBkZWxldGUodXJsKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gcmVzb2x2ZShcIlVzZXIgZGVsZXRlZC4uLlwiKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDdXN0b20gTGlicmFyeSB3aXRoIFByb21pc2VzIChBc3luYyAmIEF3YWl0KVxyXG5jbGFzcyBmZXRjaEhUVFB7XHJcbiAgICBhc3luYyBnZXQodXJsKXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJEYXRhO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcG9zdCh1cmwsIGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHBvc3REYXRhO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgcHV0KHVybCxkYXRhKXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwdXREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBwdXREYXRhO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlKHVybCl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZScgOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZURhdGEgPSBhd2FpdCAnVXNlciBzdWNjZXNzZnVsbHkgZGVsZXRlZC4uLic7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZURhdGE7XHJcbiAgICB9XHJcbn1cclxuLy8gRXhwb3J0aW5nIHRoZSBsaWJyYXJpZXNcclxuZXhwb3J0IGNvbnN0IGVhc3lodHRwID0gbmV3IGVhc3lIVFRQKCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaGh0dHAgPSBuZXcgZmV0Y2hIVFRQKCk7XHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb21pc2UgPSBuZXcgZmV0Y2hQcm9taXNlSFRUUCgpOyIsImNvbnN0IFVJID0gKCgpID0+IHtcclxuICAgIC8vIERPTSBTZWxlY3RvcnNcclxuICAgIGNvbnN0IHVpU2VsZWN0b3JzID0ge1xyXG4gICAgICAgIHBvc3RzQ29udGFpbmVyOiBcIi5hcGlQb3N0c1wiLFxyXG4gICAgICAgIHBvc3RUaXRsZTogXCIjdGl0bGVcIixcclxuICAgICAgICBwb3N0Qm9keTogXCIjYm9keVwiLFxyXG4gICAgICAgIHN1Ym1pdEJ0bjogXCJwb3N0LXN1Ym1pdFwiLFxyXG4gICAgICAgIGFsZXJ0OiBcImFsZXJ0XCIsIFxyXG4gICAgICAgIHBvc3RGb3JtOiBcIi5wb3N0LWZvcm1cIixcclxuICAgICAgICBzdWNjZXNzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBhYm91dDogXCJhYm91dFwiLFxyXG4gICAgICAgIHN1Y2Nlc3NUaXRsZTogXCJzdWNjZXNzLXRpdGxlXCIsXHJcbiAgICAgICAgc3VjY2Vzc0Rlc2M6IFwic3VjY2Vzcy1kZXNjXCIsXHJcbiAgICAgICAgY29uZmlybWF0aW9uOiBcImNvbmZpcm1hdGlvblwiLFxyXG4gICAgICAgIGFsbG93QnRuOiBcImFsbG93XCIsXHJcbiAgICAgICAgcmVqZWN0QnRuOiBcInJlamVjdFwiLFxyXG4gICAgICAgIGNvbmZpcm1UaXRsZTogXCJjb25maXJtLXRpdGxlXCIsXHJcbiAgICAgICAgY29uZmlybURlc2M6IFwiY29uZmlybS1kZXNjXCIsXHJcbiAgICAgICAgc2lkZU1lbnU6IFwic2lkZU1lbnVcIixcclxuICAgICAgICBzaWRlTWVudU92ZXJsYXk6IFwic2lkZU92ZXJsYXlcIixcclxuICAgICAgICBzaWRlTWVudUljb246IFwic2lkZU1lbnVJY29uXCIsXHJcbiAgICAgICAgY2xvc2VNZW51OiAnc2lkZU1lbnVDbG9zZSdcclxuICAgIH07XHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgLy8gRmV0Y2ggUG9zdHNcclxuICAgIGNvbnN0IGZldGNoUG9zdHMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0c0NvbnRhaW5lcik7XHJcbiAgICAgICAgcG9zdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gY2xlYXIgb2xkIHBvc3RzIGZpcnN0XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHBvc3RzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwidGV4dC1yZWQtNTAwIHRleHQtY2VudGVyIHRleHQteGxcIj5JbnZhbGlkIGRhdGEgZm9ybWF0PC9kaXY+YDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICBcclxuICAgIFxyXG4gICAgICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBwb3N0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC0zeGxcIj5ObyBQb3N0cyEhPC9kaXY+YDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBvc3QpIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QgcC0yIGJnLVsjZWJmNmY3XSByb3VuZGVkLWxnXCIgaWQ9XCJwb3N0LSR7cG9zdC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPVwicG9zdC10aXRsZVwiIGNsYXNzPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHB5LTJcIj4ke3Bvc3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJwb3N0LWJvZHlcIiBjbGFzcz1cImZvbnQtc2VtaS1ib2xkIG1iLTMgdGV4dC13cmFwIHRleHQtanVzdGlmeSBweC0yXCI+JHtwb3N0LmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAteC0zIHBsYWNlLWNvbnRlbnQtZW5kIHBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ1cGRhdGVJY29uIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGVuY2lsIHBlbmNpbCB0ZXh0LXhsIHRleHQtWyMwMDFmYThdIHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtYmx1ZS01MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNVwiIHRpdGxlPVwiRWRpdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkZWxldGVJY29uIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmsgeG1hcmsgdGV4dC14bCB0ZXh0LVsjZDgzYjNiXSB0cmFuc2l0aW9uLWFsbCBob3Zlcjp0ZXh0LXJlZC02MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNVwiIHRpdGxlPVwiUmVtb3ZlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gR2V0IHBvc3QgZmllbGRzXHJcbiAgICBjb25zdCBnZXRQb3N0RmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdFRpdGxlKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpLnZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8vIENoZWNrIHZhbGlkYXRpb25cclxuICAgIGNvbnN0IGNoZWNrVmFsaWRhdGlvbiA9IChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGVydElEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuYWxlcnQpO1xyXG4gICAgICAgICAgICAvLyBWYWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGlmIChwb3N0LnRpdGxlID09PSAnJyB8fCBwb3N0LmJvZHkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydElELmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlQW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBhbGVydElELmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnRJRC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIGFsZXJ0SUQuY2xhc3NMaXN0LmFkZCgnc2xpZGVBbmltYXRpb24nKTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3N0LnRpdGxlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdFRpdGxlKS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zdC5ib2R5ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0SUQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRJRC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZUFuaW1hdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdFRpdGxlKS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0Qm9keSkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSwgNDAwMCk7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gR2V0IHBvc3QgaW5mbyBmb3IgdXBkYXRlXHJcbiAgICBjb25zdCBnZXRQb3N0SW5mbyA9IChwb3N0SUQpID0+IHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0c0NvbnRhaW5lcik7XHJcbiAgICAgICAgbGV0IHBvc3RzID0gQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pO1xyXG4gICAgICAgIGxldCBmb3VuZFBvc3QgPSBwb3N0cy5maW5kKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHBvc3QuaWQuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgaWYoaWRbMV0gPT0gcG9zdElEKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0VGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9IHBvc3QucXVlcnlTZWxlY3RvcihcIiNwb3N0LXRpdGxlXCIpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaW5wdXRCb2R5LnZhbHVlID0gcG9zdC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3QtYm9keVwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmb3VuZFBvc3Q7XHJcbiAgICB9O1xyXG4gICAgLy8gUG9zdCBJRCBmcm9tIGljb25zXHJcbiAgICBmdW5jdGlvbiBnZXRQb3N0SUQoZSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBsZXQgcG9zdElEID0gcG9zdC5pZC5zcGxpdCgnLScpOyAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcG9zdElEWzFdO1xyXG4gICAgfSBcclxuICAgIGNvbnN0IGNsZWFyRmllbGRzID0gKCkgPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0VGl0bGUpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1aVNlbGVjdG9ycy5wb3N0Qm9keSkudmFsdWUgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVpU2VsZWN0b3JzLnBvc3RUaXRsZSkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiOyAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdEJvZHkpLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdWNjZXNzID0gKHRpdGxlLCBkZXNjKSA9PiB7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5zdWNjZXNzKTtcclxuICAgICAgICBsZXQgc3VjY2Vzc1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VjY2Vzc1RpdGxlKTsgXHJcbiAgICAgICAgbGV0IHN1Y2Nlc3NCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VjY2Vzc0Rlc2MpO1xyXG4gICAgICAgIC8vIFNldCBWYWx1ZVxyXG4gICAgICAgIHN1Y2Nlc3NUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIHN1Y2Nlc3NCb2R5LnRleHRDb250ZW50ID0gZGVzYztcclxuICAgICAgICBzdWNjZXNzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHN1Y2Nlc3MuY2xhc3NMaXN0LmFkZCgnZmFkZUluQW5pbWF0aW9uJyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSwgMjUwMClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrQ29uZmlybWF0aW9uID0gKHRpdGxlLCBkZXNjLGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1hdGlvbkJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmNvbmZpcm1hdGlvbik7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmNvbmZpcm1UaXRsZSk7XHJcbiAgICAgICAgbGV0IGNvbmZpcm1EZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuY29uZmlybURlc2MpO1xyXG4gICAgICAgIGNvbmZpcm1UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICAgICAgY29uZmlybURlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xyXG5cclxuICAgICAgICBjb25maXJtYXRpb25Cb3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuYWxsb3dCdG4pLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbkJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnJlamVjdEJ0bikub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uZmlybWF0aW9uQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1aVNlbGVjdG9ycyxcclxuICAgICAgICBmZXRjaFBvc3RzLFxyXG4gICAgICAgIGdldFBvc3RGaWVsZHMsXHJcbiAgICAgICAgY2hlY2tWYWxpZGF0aW9uLFxyXG4gICAgICAgIGdldFBvc3RJbmZvLFxyXG4gICAgICAgIGdldFBvc3RJRCxcclxuICAgICAgICBzdWNjZXNzLFxyXG4gICAgICAgIGNsZWFyRmllbGRzLFxyXG4gICAgICAgIGNoZWNrQ29uZmlybWF0aW9uLFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IFVJIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiLi9lYXN5SFRUUC5qc1wiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpLmpzXCI7XHJcbmxldCB1aVNlbGVjdG9ycyA9IFVJLnVpU2VsZWN0b3JzO1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAvLyBGZXRjaCBQb3N0c1xyXG4gIGdldFBvc3RzKCk7XHJcbiAgLy8gQWRkIFBvc3RcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnN1Ym1pdEJ0bilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBhZGRQb3N0KGUpO1xyXG4gICAgfSk7XHJcbiAgLy8gU3VibWl0IFBvc3RcclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IodWlTZWxlY3RvcnMucG9zdHNDb250YWluZXIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGxldCBlZGl0SWNvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudXBkYXRlSWNvblwiKTtcclxuICAgICAgbGV0IGRlbGV0ZUljb24gPSBlLnRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZUljb25cIik7XHJcbiAgICAgIGlmIChlZGl0SWNvbikge1xyXG4gICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4gICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdGhpcyBwb3N0IHRvIGdldCBzZXQgZm9yIHVwZGF0ZT9cIixcclxuICAgICAgICAgIFwiQ2xpY2ssIFllcyB0byBjb250aW51ZSwgTm8gdG8gY2FuY2VsXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgdXBkYXRlUG9zdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGVsZXRlSWNvbikge1xyXG4gICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4gICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdGhpcyBwb3N0IHRvIGdldCBkZWxldGVkP1wiLFxyXG4gICAgICAgICAgXCJDbGljaywgWWVzIHRvIGNvbnRpbnVlLCBObyB0byBjYW5jZWxcIixcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBkZWxldGVQb3N0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgLy8gSWNvbiBUZXN0aW5nXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlTWVudUljb24gaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnVPdmVybGF5KTtcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnUpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3cteS1oaWRkZW5cIik7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlTWVudUV4aXRcIik7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInNpZGVNZW51RW50cmFuY2VcIik7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKG1lbnUuY2xhc3NMaXN0KTtcclxuICB9KTtcclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLmNsb3NlTWVudSlcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnNpZGVNZW51T3ZlcmxheSk7XHJcbiAgICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc2lkZU1lbnUpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyZmxvdy15LWhpZGRlblwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZU1lbnVFbnRyYW5jZVwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic2lkZU1lbnVFeGl0XCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNpZGVNZW51RXhpdFwiKTtcclxuICAgICAgfSwgNzAwKTtcclxuICAgICAgY29uc29sZS5sb2cobWVudS5jbGFzc0xpc3QpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gZWFzeUhUVFAgLSBBSkFYXHJcbi8vIEBkZXNjIEZldGNoIGFsbCBwb3N0c1xyXG4vLyBAcm91dGUgR0VUIC9wb3N0c1xyXG4vLyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuLy8gICBodHRwLmVhc3lodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLCAoZXJyLCBkYXRhKSA9PiB7XHJcbi8vICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBVSS5mZXRjaFBvc3RzKGRhdGEpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBAZGVzYyBQb3N0IGEgcG9zdFxyXG4vLyBAcm91dGUgUE9TVCAvcG9zdHNcclxuLy8gZnVuY3Rpb24gYWRkUG9zdCgpIHtcclxuLy8gICBsZXQgcG9zdCA9IFVJLmdldFBvc3RGaWVsZHMoKTtcclxuLy8gICBpZiAoVUkuY2hlY2tWYWxpZGF0aW9uKHBvc3QpKSB7XHJcbi8vICAgICAvLyBBc2sgZm9yIGNvbmZpcm1hdGlvbiBGSVJTVFxyXG4vLyAgICAgVUkuY2hlY2tDb25maXJtYXRpb24oXHJcbi8vICAgICAgIFwiQ29uZmlybSBQb3N0IFN1Ym1pc3Npb24/XCIsXHJcbi8vICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGlzIHBvc3Q/XCIsXHJcbi8vICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgLy8gT25seSBzdWJtaXQgaWYgdXNlciBjb25maXJtc1xyXG4vLyAgICAgICAgICAgaHR0cC5lYXN5aHR0cC5wb3N0KFxyXG4vLyAgICAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLFxyXG4vLyAgICAgICAgICAgICBwb3N0LFxyXG4vLyAgICAgICAgICAgICAoZXJyLCByZXMpID0+IHtcclxuLy8gICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4vLyAgICAgICAgICAgICAgICAgICBcIlBvc3QgLSBTdWJtaXNzaW9uIFN1Y2Nlc3NmdWxcIixcclxuLy8gICAgICAgICAgICAgICAgICAgXCJQb3N0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICBnZXRQb3N0cygpO1xyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJWYWxpZGF0aW9uIEZhaWxlZFwiKTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gdXBkYXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgICAgICAgbGV0IHBvc3RUb0VkaXQgPSBVSS5nZXRQb3N0SW5mbyhwb3N0SUQpO1xyXG4vLyAgICAgICAgIGlmIChwb3N0VG9FZGl0KSB7XHJcbi8vICAgICAgICAgICBkb2N1bWVudFxyXG4vLyAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQodWlTZWxlY3RvcnMuc3VibWl0QnRuKVxyXG4vLyAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuLy8gICAgICAgICAgICAgICAgIFwiQ29uZmlybSBQb3N0IFVwZGF0aW9uP1wiLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRoaXMgcG9zdD9cIixcclxuLy8gICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBodHRwLmVhc3lodHRwLnB1dChcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvJHtwb3N0SUR9YCxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFVJLmdldFBvc3RGaWVsZHMoKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIChlcnIsIHJlcykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChVSS5jaGVja1ZhbGlkYXRpb24ocmVzKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJLnN1Y2Nlc3MoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3QgLSBVcGRhdGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gdXBkYXRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vIEBkZXNjIERlbGV0ZSBhIHNwZWNpZmljIHBvc3RcclxuLy8gQHJvdXRlIERFTEVURSAvcG9zdHMvaWRcclxuLy8gZnVuY3Rpb24gZGVsZXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgY29uc29sZS5sb2cocG9zdElEKTtcclxuLy8gICBpZiAocG9zdElEKSB7XHJcbi8vICAgICBodHRwLmVhc3lodHRwLmRlbGV0ZShcclxuLy8gICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy8ke3Bvc3RJRH1gLFxyXG4vLyAgICAgICAoZXJyLCByZXMpID0+IHtcclxuLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4vLyAgICAgICAgICAgICBcIlBvc3QgLSBEZWxldGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4vLyAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQ3VzdG9tIGZldGNoIHVzaW5nIChBc3luYy9Bd2FpdClcclxuLy8gZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XHJcbi8vICAgaHR0cC5mZXRjaGh0dHBcclxuLy8gICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHNcIilcclxuLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbi8vICAgICAgIGlmIChkYXRhKSB7XHJcbi8vICAgICAgICAgVUkuZmV0Y2hQb3N0cyhkYXRhKTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBhZGRQb3N0KCkge1xyXG4vLyAgIGxldCBwb3N0ID0gVUkuZ2V0UG9zdEZpZWxkcygpO1xyXG4vLyAgIGlmIChVSS5jaGVja1ZhbGlkYXRpb24ocG9zdCkpIHtcclxuLy8gICAgIC8vIEFzayBmb3IgY29uZmlybWF0aW9uIEZJUlNUXHJcbi8vICAgICBVSS5jaGVja0NvbmZpcm1hdGlvbihcclxuLy8gICAgICAgXCJDb25maXJtIFBvc3QgU3VibWlzc2lvbj9cIixcclxuLy8gICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3VibWl0IHRoaXMgcG9zdD9cIixcclxuLy8gICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAvLyBPbmx5IHN1Ym1pdCBpZiB1c2VyIGNvbmZpcm1zXHJcbi8vICAgICAgICAgICBodHRwLmZldGNoaHR0cFxyXG4vLyAgICAgICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiLCBwb3N0KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgVUkuc3VjY2VzcyhcclxuLy8gICAgICAgICAgICAgICAgIFwiUG9zdCAtIFN1Ym1pc3Npb24gU3VjY2Vzc2Z1bFwiLFxyXG4vLyAgICAgICAgICAgICAgICAgXCJQb3N0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICAgICAgICApO1xyXG4vLyAgICAgICAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgY29uc29sZS5lcnJvcihcIlZhbGlkYXRpb24gRmFpbGVkXCIpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBmdW5jdGlvbiB1cGRhdGVQb3N0KGUpIHtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IHBvc3RJRCA9IFVJLmdldFBvc3RJRChlKTtcclxuLy8gICBsZXQgcG9zdFRvRWRpdCA9IFVJLmdldFBvc3RJbmZvKHBvc3RJRCk7XHJcbi8vICAgaWYgKHBvc3RUb0VkaXQpIHtcclxuLy8gICAgIGRvY3VtZW50XHJcbi8vICAgICAgIC5nZXRFbGVtZW50QnlJZCh1aVNlbGVjdG9ycy5zdWJtaXRCdG4pXHJcbi8vICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4vLyAgICAgICAgICAgXCJDb25maXJtIFBvc3QgVXBkYXRpb24/XCIsXHJcbi8vICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1cGRhdGUgdGhpcyBwb3N0P1wiLFxyXG4vLyAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4vLyAgICAgICAgICAgICAgIGh0dHAuZmV0Y2hodHRwXHJcbi8vICAgICAgICAgICAgICAgICAucHV0KFxyXG4vLyAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzLyR7cG9zdElEfWAsXHJcbi8vICAgICAgICAgICAgICAgICAgIFVJLmdldFBvc3RGaWVsZHMoKVxyXG4vLyAgICAgICAgICAgICAgICAgKVxyXG4vLyAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICBpZiAoVUkuY2hlY2tWYWxpZGF0aW9uKGRhdGEpKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgVUkuc3VjY2VzcyhcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCAtIFVwZGF0aW9uIFN1Y2Nlc3NmdWxcIixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZ2V0UG9zdHMoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gZGVsZXRlUG9zdChlKSB7XHJcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIGxldCBwb3N0SUQgPSBVSS5nZXRQb3N0SUQoZSk7XHJcbi8vICAgY29uc29sZS5sb2cocG9zdElEKTtcclxuLy8gICBpZiAocG9zdElEKSB7XHJcbi8vICAgICBodHRwLmZldGNoaHR0cFxyXG4vLyAgICAgICAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvJHtwb3N0SUR9YClcclxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgICBpZiAoZXJyKSB7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgIFVJLnN1Y2Nlc3MoXHJcbi8vICAgICAgICAgICBcIlBvc3QgLSBEZWxldGlvbiBTdWNjZXNzZnVsXCIsXHJcbi8vICAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNzZnVsbHkgd2l0aG91dCBhbnkgZXJyb3JzXCJcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIGdldFBvc3RzKCk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBDdXN0b20gRmV0Y2ggKFByb21pc2VzKVxyXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcclxuICBodHRwLmZldGNoUHJvbWlzZVxyXG4gICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0c1wiKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBVSS5mZXRjaFBvc3RzKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBvc3QoKSB7XHJcbiAgbGV0IHBvc3QgPSBVSS5nZXRQb3N0RmllbGRzKCk7XHJcbiAgaWYgKFVJLmNoZWNrVmFsaWRhdGlvbihwb3N0KSkge1xyXG4gICAgLy8gQXNrIGZvciBjb25maXJtYXRpb24gRklSU1RcclxuICAgIFVJLmNoZWNrQ29uZmlybWF0aW9uKFxyXG4gICAgICBcIkNvbmZpcm0gUG9zdCBTdWJtaXNzaW9uP1wiLFxyXG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdWJtaXQgdGhpcyBwb3N0P1wiLFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vIE9ubHkgc3VibWl0IGlmIHVzZXIgY29uZmlybXNcclxuICAgICAgICAgIGh0dHAuZmV0Y2hQcm9taXNlXHJcbiAgICAgICAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Bvc3RzXCIsIHBvc3QpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgXCJQb3N0IC0gU3VibWlzc2lvbiBTdWNjZXNzZnVsXCIsXHJcbiAgICAgICAgICAgICAgICBcIlBvc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZ2V0UG9zdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiVmFsaWRhdGlvbiBGYWlsZWRcIik7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgcG9zdElEID0gVUkuZ2V0UG9zdElEKGUpO1xyXG4gIGxldCBwb3N0VG9FZGl0ID0gVUkuZ2V0UG9zdEluZm8ocG9zdElEKTtcclxuICBpZiAocG9zdFRvRWRpdCkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKHVpU2VsZWN0b3JzLnN1Ym1pdEJ0bilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgVUkuY2hlY2tDb25maXJtYXRpb24oXHJcbiAgICAgICAgICBcIkNvbmZpcm0gUG9zdCBVcGRhdGlvbj9cIixcclxuICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGlzIHBvc3Q/XCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgaHR0cC5mZXRjaFByb21pc2VcclxuICAgICAgICAgICAgICAgIC5wdXQoXHJcbiAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvJHtwb3N0SUR9YCxcclxuICAgICAgICAgICAgICAgICAgVUkuZ2V0UG9zdEZpZWxkcygpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChVSS5jaGVja1ZhbGlkYXRpb24oZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBVSS5zdWNjZXNzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb3N0IC0gVXBkYXRpb24gU3VjY2Vzc2Z1bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb3N0IGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IHdpdGhvdXQgYW55IGVycm9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXRQb3N0cygpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBkZWxldGVQb3N0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHBvc3RJRCA9IFVJLmdldFBvc3RJRChlKTtcclxuICBjb25zb2xlLmxvZyhwb3N0SUQpO1xyXG4gIGlmIChwb3N0SUQpIHtcclxuICAgIGh0dHAuZmV0Y2hQcm9taXNlXHJcbiAgICAgIC5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wb3N0cy8ke3Bvc3RJRH1gKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgVUkuc3VjY2VzcyhcclxuICAgICAgICAgIFwiUG9zdCAtIERlbGV0aW9uIFN1Y2Nlc3NmdWxcIixcclxuICAgICAgICAgIFwiUG9zdCBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseSB3aXRob3V0IGFueSBlcnJvcnNcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2V0UG9zdHMoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl90eXBlb2YiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsImVhc3lIVFRQIiwiaHR0cCIsIlhNTEh0dHBSZXF1ZXN0IiwiZ2V0IiwidXJsIiwiY2FsbGJhY2siLCJfdGhpcyIsIm9wZW4iLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwicG9zdCIsImRhdGEiLCJfdGhpczIiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNvbmNhdCIsInN0cmluZ2lmeSIsInB1dCIsIl90aGlzMyIsIl90aGlzNCIsImZldGNoUHJvbWlzZUhUVFAiLCJyZWplY3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImVyciIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiZGVsZXRlIiwiZmV0Y2hIVFRQIiwiX2dldCIsIl9jYWxsZWUiLCJ1c2VyRGF0YSIsIl9jb250ZXh0IiwiX3giLCJfcG9zdCIsIl9jYWxsZWUyIiwicG9zdERhdGEiLCJfY29udGV4dDIiLCJfeDIiLCJfeDMiLCJfcHV0IiwiX2NhbGxlZTMiLCJwdXREYXRhIiwiX2NvbnRleHQzIiwiX3g0IiwiX3g1IiwiX2RlbGV0ZTIiLCJfY2FsbGVlNCIsImRlbGV0ZURhdGEiLCJfY29udGV4dDQiLCJfeDYiLCJlYXN5aHR0cCIsImZldGNoaHR0cCIsImZldGNoUHJvbWlzZSIsIlVJIiwidWlTZWxlY3RvcnMiLCJwb3N0c0NvbnRhaW5lciIsInBvc3RUaXRsZSIsInBvc3RCb2R5Iiwic3VibWl0QnRuIiwiYWxlcnQiLCJwb3N0Rm9ybSIsInN1Y2Nlc3MiLCJhYm91dCIsInN1Y2Nlc3NUaXRsZSIsInN1Y2Nlc3NEZXNjIiwiY29uZmlybWF0aW9uIiwiYWxsb3dCdG4iLCJyZWplY3RCdG4iLCJjb25maXJtVGl0bGUiLCJjb25maXJtRGVzYyIsInNpZGVNZW51Iiwic2lkZU1lbnVPdmVybGF5Iiwic2lkZU1lbnVJY29uIiwiY2xvc2VNZW51IiwiZmV0Y2hQb3N0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpZCIsInRpdGxlIiwiZ2V0UG9zdEZpZWxkcyIsImNoZWNrVmFsaWRhdGlvbiIsImFsZXJ0SUQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9mZnNldFdpZHRoIiwiYWRkIiwic3R5bGUiLCJib3JkZXJDb2xvciIsInNldFRpbWVvdXQiLCJnZXRQb3N0SW5mbyIsInBvc3RJRCIsImNvbnRhaW5lciIsInBvc3RzIiwiZnJvbSIsImNoaWxkcmVuIiwiZm91bmRQb3N0IiwiZmluZCIsInNwbGl0IiwiaW5wdXRUaXRsZSIsImlucHV0Qm9keSIsInRleHRDb250ZW50IiwiZ2V0UG9zdElEIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNsZWFyRmllbGRzIiwiZGVzYyIsInN1Y2Nlc3NCb2R5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjaGVja0NvbmZpcm1hdGlvbiIsImNvbmZpcm1hdGlvbkJveCIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRQb3N0cyIsImFkZFBvc3QiLCJlZGl0SWNvbiIsImNsb3Nlc3QiLCJkZWxldGVJY29uIiwidXBkYXRlUG9zdCIsImRlbGV0ZVBvc3QiLCJvdmVybGF5IiwibWVudSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInBvc3RUb0VkaXQiXSwic291cmNlUm9vdCI6IiJ9
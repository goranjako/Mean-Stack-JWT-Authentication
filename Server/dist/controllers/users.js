"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _user = _interopRequireDefault(require("../models/user"));

var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    (0, _classCallCheck2["default"])(this, UsersController);
  }

  (0, _createClass2["default"])(UsersController, [{
    key: "getAll",
    value: // Get All
    function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var products;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req.body) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return _user["default"].find({}).exec();

              case 4:
                products = _context.sent;
                return _context.abrupt("return", res.status(200).json(products));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 11:
                _context.next = 14;
                break;

              case 13:
                return _context.abrupt("return", res.status(401).send({
                  success: false,
                  msg: 'Unauthorized. Please check the email address and password and try again.'
                }));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function getAll(_x, _x2, _x3) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getById",
    value: // Get by id
    function () {
      var _getById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _id, obj;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _id = req.params.id;

                if (!_id) {
                  _context2.next = 18;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return _user["default"].findById({
                  _id: _id
                });

              case 5:
                obj = _context2.sent;

                if (!obj) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.status(200).json(obj));

              case 10:
                ;
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", res.status(404).json({
                  error: 'User not found'
                }));

              case 16:
                _context2.next = 19;
                break;

              case 18:
                return _context2.abrupt("return", res.status(401).send({
                  success: false,
                  msg: 'Unauthorized.'
                }));

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 13]]);
      }));

      function getById(_x4, _x5) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }() // Put by id

  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var user, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(req.params.id && req.body)) {
                  _context3.next = 17;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return _user["default"].findById(req.params.id).exec();

              case 4:
                user = _context3.sent;
                user.set(req.body);
                _context3.next = 8;
                return user.save();

              case 8:
                result = _context3.sent;
                return _context3.abrupt("return", res.status(200).json(result));

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", res.status(400).json({
                  success: false,
                  msg: 'User does not exist!'
                }));

              case 15:
                _context3.next = 18;
                break;

              case 17:
                return _context3.abrupt("return", res.status(401).send({
                  success: false,
                  msg: 'Unauthorized.'
                }));

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 12]]);
      }));

      function put(_x6, _x7) {
        return _put.apply(this, arguments);
      }

      return put;
    }()
  }, {
    key: "delete",
    value: // Delete by id
    function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _user["default"].deleteOne({
                  _id: req.params.id
                }).exec();

              case 3:
                res.status(200).json({
                  success: true,
                  msg: ' User is deleted successfully.'
                });
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(400).json({
                  success: false,
                  msg: 'User does not exist!'
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function _delete(_x8, _x9) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return UsersController;
}();

var _default = new UsersController();

exports["default"] = _default;
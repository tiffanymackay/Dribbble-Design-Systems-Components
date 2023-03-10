"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribble-button",
    style: {
      backgroundColor: '#3E5197',
      color: 'white',
      fontFamily: 'Inter',
      fontSize: '24px',
      fontWeight: 'bold',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '8px'
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;
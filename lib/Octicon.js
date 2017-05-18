'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../css/Octicon.css');

var Octicon = (_temp = _class = function (_Component) {
  _inherits(Octicon, _Component);

  function Octicon() {
    _classCallCheck(this, Octicon);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Octicon.prototype.render = function render() {
    var _props = this.props,
        name = _props.name,
        className = _props.className,
        mega = _props.mega,
        spin = _props.spin,
        props = _objectWithoutProperties(_props, ['name', 'className', 'mega', 'spin']);

    var classNames = [mega ? 'mega-octicon' : 'octicon', 'octicon-' + name];
    if (spin) {
      classNames.push('spin-octicon');
    }
    if (className) {
      classNames.push(className);
    }
    return _react2.default.createElement('span', _extends({}, props, { className: classNames.join(' ') }));
  };

  return Octicon;
}(_react.Component), _class.defaultProps = {
  mega: false,
  spin: false
}, _temp);
process.env.NODE_ENV !== "production" ? Octicon.propTypes = {
  name: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  mega: _propTypes2.default.bool,
  spin: _propTypes2.default.bool
} : void 0;
exports.default = Octicon;
module.exports = exports['default'];
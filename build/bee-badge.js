'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * @title badge 默认显示内容1
 */
var defaultProps = {
	children: "1"
};

var clsPrefix = 'u-badge';

var Badge = function (_React$Component) {
	_inherits(Badge, _React$Component);

	function Badge(props) {
		_classCallCheck(this, Badge);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Badge.prototype.render = function render() {
		var _props = this.props;
		var colors = _props.colors;
		var className = _props.className;
		var children = _props.children;

		var others = _objectWithoutProperties(_props, ['colors', 'className', 'children']);

		var clsObj = {};
		if (className) {
			clsObj[className] = true;
		}
		/**
   * @title 以u-badge起头的颜色类判断
   */
		if (colors) {
			clsObj[clsPrefix + '-' + colors] = true;
		}

		var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);

		return _react2["default"].createElement(
			'span',
			_extends({ className: classNames }, others),
			children
		);
	};

	return Badge;
}(_react2["default"].Component);

Badge.defaultProps = defaultProps;

exports["default"] = Badge;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Badge2["default"];
module.exports = exports['default'];
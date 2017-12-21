'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _iconSettings = require('../../../../components/icon-settings');

var _iconSettings2 = _interopRequireDefault(_iconSettings);

var _radioButtonGroup = require('../../../../components/radio-button-group');

var _radioButtonGroup2 = _interopRequireDefault(_radioButtonGroup);

var _radio = require('../../../../components/radio-button-group/radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // `~` is replaced with design-system-react at runtime


// `~` is replaced with design-system-react at runtime

var Example = function (_React$Component) {
	_inherits(Example, _React$Component);

	function Example(props) {
		_classCallCheck(this, Example);

		var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

		_this.state = { checked: 'Tue' };
		return _this;
	}

	_createClass(Example, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
			var labels = { label: 'Day of week' };
			if (this.props.errorLabel) {
				labels.error = this.props.errorLabel;
			}
			return _react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_radioButtonGroup2.default,
						{
							labels: labels,
							onChange: function onChange(event) {
								return _this2.setState({ checked: event.target.value });
							},
							disabled: this.props.disabled,
							required: this.props.required,
							name: this.props.name,
							errorId: this.props.errorId
						},
						days.map(function (day) {
							return _react2.default.createElement(_radio2.default, {
								key: day,
								id: day,
								label: day,
								value: day,
								checked: _this2.state.checked === day,
								variant: 'button-group'
							});
						})
					)
				)
			);
		}
	}]);

	return Example;
}(_react2.default.Component);

Example.propTypes = {
	disabled: _propTypes2.default.bool,
	required: _propTypes2.default.bool,
	name: _propTypes2.default.string,
	errorId: _propTypes2.default.string,
	errorLabel: _propTypes2.default.string
};

Example.displayName = 'RadioButtonGroupExample';

exports.default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
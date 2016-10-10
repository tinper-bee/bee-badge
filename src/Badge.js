import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const propTypes = {
    /**
	 * @title 背景颜色
	 */
	colors: React.PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'dark','']),
	/**
	 * @title 类名
	 */
	className: React.PropTypes.string,
	/**
	 * @title 内容
	 */
	children: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.string
	])
};

const defaultProps = {
	colors: "",
	className: "",
	children: "1"
};

const clsPrefix = 'u-badge';

class Badge extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let {colors,className,children, ...others} = this.props;
		let clsObj = {};
		if(className){
			clsObj[className] = true;
		}
		if(colors){
			clsObj[`${clsPrefix}-${colors}`] = true;
		}
		let classNames = classnames(clsPrefix,clsObj);
		return(
			<span className={classNames} {...others}>{this.props.children}</span>
		);
	}
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
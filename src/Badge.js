import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 *  badge 默认显示内容1
 */
const defaultProps = {
	children: "1",
	clsPrefix: 'u-badge'
};


class Badge extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let {colors,className,children,clsPrefix, ...others} = this.props;
		let clsObj = {};
		if(className){
			clsObj[className] = true;
		}
		/**
		 *  以u-badge起头的颜色类判断
		 */
		if(colors){
			clsObj[`${clsPrefix}-${colors}`] = true;
		}
		
		let classNames = classnames(clsPrefix,clsObj);

		return(
			<span className={classNames} {...others}>{children}</span>
		);
	}
}

Badge.defaultProps = defaultProps;

export default Badge;
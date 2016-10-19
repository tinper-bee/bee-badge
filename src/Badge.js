import React, { PropTypes } from 'react';
import classnames from 'classnames';

const defaultProps = {
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
			<span className={classNames} {...others}>{children}</span>
		);
	}
}

Badge.defaultProps = defaultProps;

export default Badge;
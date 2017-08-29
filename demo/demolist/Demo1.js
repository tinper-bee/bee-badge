/**
 * @title 基本样式Badge
 * @description `colors`控制背景颜色种类。
 */

import React, { Component } from 'react';
import Badge from '../../src';

export default class Demo1 extends Component {
	render () {
		return (
			<Badge colors="primary" >8</Badge>
		)
	}
}
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import { Badge } from '../src/index';

describe('Enzyme Shallow', function() {
	it('Badge should be exist', function() {
		let badge = shallow(<Badge/>);
		expect(badge.hasClass('u-badge')).to.equal(true);
	})
})

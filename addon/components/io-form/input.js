import Ember from 'ember';
import DisabledClass from '../../mixin/disabled-class';
import translateSize from '../../utils/translate-size';

/**
 * io-input Component
 ```html
 ``` 
 */

export default Ember.Component.extend(DisabledClass, {
	/**
	 * [tagName description]
	 */
	tagName: 'span',
	attributeBindings: ['state', 'disabled', 'type', 'role'],
	classNames: 'io-input-wrapper',
	classNamePrefix: ['io-input-'],
	role: 'input',
	/**
	 * @attribute  value
	 */
	value: '',
	/**
	 * @attribute type
	 */
	type: 'text',
	/**
	 * @attribute diabled
	 */
	disabled: false,
	/**
	 * @attribute  disabled
	 */
	size: 'default',
	/**
	 * @attribute placeholder 
	 * @type {String}
	 */
	placeholder: '请输入',
	dataError: Ember.computed.alias('data-error'),
	/**
	 * @state inputClass
	 */
	inputClass: function() {
		var ret = 'io-input ';

		if (this.get('size')) {
			ret += this.get('classNamePrefix') + translateSize(this.get('size')) + ' ';
		}

		if (this.get('disabled')) {
			ret += this.get('classNamePrefix') + 'disabled ';
		}

		return ret;
	}.property('disabled', 'size')
});
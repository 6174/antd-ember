import Ember from 'ember';

/**
 * Col Component
 ```html
    {{#io-col}}{{/io-col}}
 ``` 
 */

export default Ember.Component.extend({
	/**
	 * [tagName description]
	 */
	tagName: 'span',
	classNames: 'io-checkbox',
	classNamePrefix: 'io-checkbox-',
	attributeBindings: ['checked', 'disabled'],
	classNameBindings: ['checkedClass', 'disabledClass'],
	checkedClass: function() {
		if (this.get('checked') === true) {
			return this.get('classNamePrefix') + 'checked';
		} else {
			return '';
		}
	}.property('checked'),
	disabledClass: function() {
		if (this.get('disabled')) {
			return this.get('classNamePrefix') + 'disabled';
		} else {
			return '';
		}
	}.property('disabled'),
	/**
	 * [checked attribute for component]
	 * @type {Boolean}
	 */
	checked: false,
	/**
	 * [onChecked event]
	 * @return {[type]} [description]
	 */
	onChecked: function() {
		this.sendAction('onChange', this.get('checked'));
	}.observes('checked'),
});
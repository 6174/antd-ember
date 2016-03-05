import Ember from 'ember';

/**
 * Radio Component
 ```html
 ``` 
 */

export default Ember.Component.extend({
	/**
	 * [tagName description]
	 */
	tagName: 'span',
	classNames: 'io-radio',
	classNamePrefix: 'io-radio-',
	attributeBindings: ['checked', 'disabled', 'name'],
	classNameBindings: ['checkedClass', 'disabledClass'],
	/**
	 * [attributes for component]
	 * @type {Boolean}
	 */
	checked: null,
	value: null,
	checkedClass: function() {
		if (this.get('checked') === this.get('value')) {
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
	htmlChecked: function() {
		return this.get('value') === this.get('checked');
	}.property('checked', 'value'),
	actions: {
		change: function(ev) {
			this.set('checked', this.get('value'));
		}
	}
});
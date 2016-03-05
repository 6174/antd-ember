import Ember from 'ember';
import ComponentParentMixin from './component-parent';


/**
 * Mixin for components that act as a child component in a parent-child relationship of components
 *
 * @class ComponentChild
 * @namespace Mixins
 */
export default Ember.Mixin.create({

  _didInsertElement: Ember.on('didInsertElement', function() {
    var parent = this.nearestOfType(ComponentParentMixin);
    if (parent) {
      this.set('parent', parent);
      parent.registerChild(this);
    }
  }),

  _willDestroyElement: Ember.on('willDestroyElement', function() {
    var parent = this.nearestOfType(ComponentParentMixin);
    if (parent) {
      this.set('parent', null);
      parent.removeChild(this);
    }
  })
});
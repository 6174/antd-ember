import Em from 'ember';
import IdxConfig from 'ember-cli-idcos/config';

export default {
  name: 'ember-idx-tree',
  initialize: function() {
    var Config = Em.IdxConfig = Em.IdxConfig ? Em.IdxConfig : IdxConfig.create();

    var defaultConfig = Config.getConfig('default');
    if (!defaultConfig) {
        Config.addConfig('default');
        defaultConfig = Config.getConfig('default');
    }

    defaultConfig['tree'] = {
        classes: ['io-tree-branch', 'io-tree', 'fa-ul'],
            branchClasses: ['io-tree-branch', 'fa-ul'],
            nodeClasses: ['io-tree-node'],
            nodeOpenClasses: [],
            nodeCloseClasses: [],
            nodeOpenIconClasses: ['fa-li', 'fa', 'fa-caret-down'],
            nodeCloseIconClasses: ['fa-li', 'fa', 'fa-caret-right'],
            nodeLeafClasses: ['leaf'],
            nodeLeafIconClasses: ['fa-li', 'fa',''],
            nodeLoadingIconClasses: ['fa-li', 'fa', 'fa-spinner', 'fa-spin'],
            nodeSelectedClasses: ['io-tree-node-active']
    }
  }
};
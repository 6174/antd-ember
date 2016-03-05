/* jshint node: true */
'use strict';
module.exports = {
    name: 'ember-cli-idcos',
    blueprintsPath: function() {
        // return path.join(__dirname, 'blueprints');
    },
    included: function(app, parentAddon) {
        this._super.included(app);
        app = (parentAddon || app);
        var bowerDirectory = 'vendor/lib';
        app.import(bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js');
        app.import(bowerDirectory + '/bootstrap-validator/dist/validator.min.js');
        app.import(bowerDirectory + '/bootstrap-sweetalert/lib/sweet-alert.min.js');
        app.import(bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
        app.import(bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
        app.import(bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
        app.import(bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
        app.import(bowerDirectory + "/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
        app.import(bowerDirectory + "/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts"});
    }
};
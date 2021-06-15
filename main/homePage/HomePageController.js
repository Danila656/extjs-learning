Ext.define('App.view.main.homePage.HomePageController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home-page',

    changeAddressToFilm: function (args) {
        this.redirectTo(`film/${args.selection.id}`);
    },
});

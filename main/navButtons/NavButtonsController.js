Ext.define('App.view.main.navButtons.NavButtonsController', {
    alias: 'controller.nav-buttons',
    extend: 'Ext.app.ViewController',

    changeAddressToHome: function () {
        this.redirectTo('home');
    },

    changeAddressToFavorite: function () {
        this.redirectTo('favorite');
    },
});
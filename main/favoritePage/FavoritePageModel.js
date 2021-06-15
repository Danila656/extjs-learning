Ext.define('App.view.main.favoritePage.FavoritePageModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.favorite-page',

    changeAddressToFilmFromController: function (args) {
        this.redirectTo(`film/${args.selection.id}`);
    }
});

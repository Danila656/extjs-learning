Ext.define('App.view.main.filmPage.FilmPageModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.film-page',
    stores: {
        favoriteAdding: {
            fields: {
                status: 'boolean'
            },
            data: {status: false}
        },
    }
});

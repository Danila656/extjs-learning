Ext.define('App.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    stores: {
        favoriteList: {
            fields: [],
            data: []
        },
    }
});

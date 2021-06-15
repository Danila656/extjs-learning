Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'favorite': 'onFavorite',
        'home': 'onHome'
    },

    init: function () {
        const vm = this.getViewModel();
        const favoriteList = vm.get('favoriteList');

        if (JSON.parse(localStorage.getItem('favoriteList'))) {
            favoriteList.add(JSON.parse(localStorage.getItem('favoriteList')));
        }
    },

    onFavorite: function () {
        const MainUnit = Ext.getCmp('app-main');
        const Favorite = Ext.getCmp('favorite-page');
        const Loader = Ext.getCmp('loader')
        MainUnit.remove('favorite-page', false);
        MainUnit.remove('home-page', false);
        MainUnit.remove('film-page', false);
        MainUnit.add(Loader);
        MainUnit.remove('loader',false)
        MainUnit.add(Favorite)
    },

    onHome: function () {
        console.log(1)
        const MainUnit = Ext.getCmp('app-main');
        const HomePage = Ext.getCmp('home-page')
        const Loader = Ext.getCmp('loader')
        MainUnit.remove('home-page', false);
        MainUnit.remove('favorite-page', false);
        MainUnit.remove('film-page', false);
        MainUnit.remove('loader', false);
        MainUnit.add(Loader);
        MainUnit.add(HomePage);
    },
});

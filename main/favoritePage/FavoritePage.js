Ext.define('App.view.main.favoritePage.FavoritePage', {
    extend: 'Ext.container.Container',

    xtype: 'favorite-page',

    controller: 'favorite-page',

    viewModel: {
        type: 'favorite-page'
    },

    id: 'favorite-page',

    items: [{
        xtype: 'grid',
        bind: {
            store: '{favoriteList}'
        },
        width: '100%',
        height: 900,
        columns: [{
            text: 'Film Name',
            dataIndex: 'title',
            flex: 1,
            listeners: {
                dblclick: 'changeAddressToFavoriteFilm'
            }
        }, {
            text: 'Description',
            dataIndex: 'overview',
            flex: 3,
            listeners: {
                dblclick: 'changeAddressToFavoriteFilm'
            }
        }, {
            text: 'Poster',
            width: 400,
            renderer: function (val) {
                return '<img src="http://image.tmdb.org/t/p/w342' + val + '">';
            },
            dataIndex: 'poster_path',
            listeners: {
                dblclick: 'changeAddressToFavoriteFilm'
            }   
        }]
    }]
});

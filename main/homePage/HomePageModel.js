Ext.define('App.view.main.homePage.HomePageModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.home-page',
    stores: {
        films: {
            fields: [
                {
                    type: 'string',
                    convert: function (value) {
                        return 'http://image.tmdb.org/t/p/w342' + value;
                    },
                    name: 'poster_path'
                }
            ],
            proxy: {
                type: 'ajax',
                url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
                actionMethods: {read: 'GET'},
                reader: {
                    type: 'json',
                    rootProperty: 'results',
                    totalProperty: 'total_results',
                },
            },
            pageSize: 20,
            autoLoad: true
        }
    }
});

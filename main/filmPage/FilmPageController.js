Ext.define('App.view.main.filmPage.FilmPageController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.film-page',
    routes: {
        'favoriteFilm/:id': 'onFavoriteFilm',
        'film/:id': 'onFilm'
    },

    renderFilmInfo: function () {
        const vm = this.getViewModel();
        const favoriteList = vm.get('favoriteList');
        const Main = Ext.getCmp('app-main');
        const Film = Ext.getCmp('film-page');

    },

    onFavoriteFilm: function () {
        const vm = this.getViewModel();
        const favoriteList = vm.get('favoriteList');
        const Main = Ext.getCmp('app-main');
        const Film = Ext.getCmp('film-page');

        vm.set('filmId', id);

        Ext.Ajax.request({
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`,
            success: (response, options) => {
                const filmInfo = Ext.decode(response.responseText)
                let button = {
                    xtype: 'button',
                    id: 'favoriteButton',
                    text: 'Add to favorite',
                    handler: 'addToFavorite',
                };

                favoriteList.getData().items.forEach((item) => {
                    if (item.id === filmInfo.id) {
                        button = {
                            id: 'favoriteButton',
                            xtype: 'button',
                            text: 'Delete from favorite',
                            handler: 'deleteFromFavorite',
                        }
                    }
                });

                vm.set('filmInfo', filmInfo);
                Main.remove('favorite-page', false);
                Main.remove('home-page', false);
                Main.add(Film);
                Film.remove('filmInfo');
                Film.add({
                    xtype: 'container',
                    id: 'filmInfo',
                    layout: {
                        type: 'hbox',
                    },
                    margin: '50 0 0 0',
                    items: [{
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'Center'
                        },
                        flex: 1,
                        defaults: {
                            padding: 15
                        },
                        items: [{
                            html: filmInfo.title
                        }, {
                            html: 'Date:' + filmInfo.release_date,
                        }, {
                            html: 'Score: ' + filmInfo.vote_average,
                        }, {
                            html: 'Description: ' + filmInfo.overview,
                            width: 400
                        },
                            button
                        ]
                    }, {
                        xtype: 'image',
                        src: 'http://image.tmdb.org/t/p/w342' + filmInfo.poster_path,
                    }]
                })
            }
        })
    }
    ,

    addToFavorite: function () {
        const vm = this.getViewModel();
        const favoriteList = vm.get('favoriteList');
        const id = vm.get('filmId');

        Ext.Ajax.request({
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`,
            success: (response) => {
                favoriteList.add(Ext.decode(response.responseText));
            }
        });

        localStorage.setItem('favoriteList', JSON.stringify(favoriteList.getData().items.map((item) => {
            return item.data
        })));
    },

    changeFilmToLast: function () {
        const vm = this.getViewModel();
        const filmId = vm.get('filmInfo').id;
        Ext.Ajax.request({
            url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
            success: (response) => {
                Ext.decode(response.responseText).results.forEach((item, index, array) => {
                    if (item.id === filmId) {
                        if (index === 0) {
                            this.redirectTo(`film/${array[19].id}`);
                            return 0;
                        } else {
                            this.redirectTo(`film/${array[index - 1].id}`);
                            return 0;
                        }

                    }
                });
            }
        })
    },

    changeFilmToNext: function () {
        const vm = this.getViewModel();
        const filmId = vm.get('filmInfo').id;
        Ext.Ajax.request({
            url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c',
            success: (response) => {
                Ext.decode(response.responseText).results.forEach((item, index, array) => {
                    if (item.id === filmId) {
                        if (index === 19) {
                            this.redirectTo(`film/${array[0].id}`);
                            return 0;
                        } else {
                            this.redirectTo(`film/${array[index + 1].id}`);
                            return 0;
                        }

                    }
                });
            }
        })
    },

    deleteFromFavorite: function () {
        const vm = this.getViewModel();
        const filmInfo = vm.get('filmInfo');
        const favoriteList = vm.get('favoriteList');

        favoriteList.getData().items.forEach((item, index) => {
            if (item.id === filmInfo.id) {
                favoriteList.removeAt(index);
            }
        })

        localStorage.setItem('favoriteList', JSON.stringify(favoriteList.getData().items.map((item) => {
            return item.data
        })));
    },

    onFilm: function (id) {
        const vm = this.getViewModel();
        const favoriteList = vm.get('favoriteList');
        const Main = Ext.getCmp('app-main');
        const Film = Ext.getCmp('film-page');

        vm.set('filmId', id);

        Ext.Ajax.request({
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`,
            success: (response, options) => {
                const filmInfo = Ext.decode(response.responseText)
                let button = {
                    xtype: 'button',
                    id: 'favoriteButton',
                    text: 'Add to favorite',
                    handler: 'addToFavorite',
                };

                favoriteList.getData().items.forEach((item) => {
                    if (item.id === filmInfo.id) {
                        console.log(1)
                        button = {
                            id: 'favoriteButton',
                            xtype: 'button',
                            text: 'Delete from favorite',
                            handler: 'deleteFromFavorite',
                        }
                    }
                });

                vm.set('filmInfo', filmInfo);
                Main.remove('favorite-page', false);
                Main.remove('home-page', false);
                Main.add(Film);
                Film.remove('filmInfo');
                Film.add({
                    xtype: 'container',
                    id: 'filmInfo',
                    layout: {
                        type: 'hbox',
                    },
                    margin: '50 0 0 0',
                    items: [{
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'Center'
                        },
                        flex: 1,
                        defaults: {
                            padding: 15
                        },
                        items: [{
                            html: filmInfo.title
                        }, {
                            html: 'Date:' + filmInfo.release_date,
                        }, {
                            html: 'Score: ' + filmInfo.vote_average,
                        }, {
                            html: 'Description: ' + filmInfo.overview,
                            width: 400
                        },
                            button
                        ]
                    }, {
                        xtype: 'image',
                        src: 'http://image.tmdb.org/t/p/w342' + filmInfo.poster_path,
                    }]
                })
            }
        });
    },
});

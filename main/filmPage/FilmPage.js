Ext.define('App.view.main.filmPage.FilmPage', {
    extend: 'Ext.container.Container',

    xtype: 'film-page',

    controller: 'film-page',


    viewModel: {
        type: 'film-page'

    },
    id: 'film-page',

    width: '100%',
    margin: '100 0 0 0',
    height: 600,
    layout: {
        type: 'vbox',
        align: 'center'
    },
    defaults: {
        width: 800,
    },

    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'center'
        },
        items: [{
            xtype: 'button',
            text: 'Last',
            handler: 'changeFilmToLast',
            flex: 1
        }, {
            xtype: 'button',
            text: 'Next',
            handler: 'changeFilmToNext',
            flex: 1
        }]
    }, ]
});
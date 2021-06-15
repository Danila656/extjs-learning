Ext.define('App.view.main.navButtons.NavButtons', {
    xtype: 'nav-buttons',
    extend: 'Ext.container.Container',
    controller: 'nav-buttons',

    layout: {
        type: 'hbox',
        align: 'center'
    },
    width: '100%',

    items: [{
        xtype: 'button',
        text: 'Home',
        flex: 1,
        handler: 'changeAddressToHome',
    }, {
        xtype: 'button',
        text: 'Favorite List',
        flex: 1,
        handler: 'changeAddressToFavorite'
    }]
});
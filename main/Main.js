Ext.define('App.view.main.Main', {
    xtype: 'app-main',
    extend: 'Ext.container.Container',
    viewModel: {
        type: 'main'
    },
    id: 'app-main',
    width:'100%',
    height:'100%',
    layout:{
        type: 'vbox',
        align: 'center'
    },
    items: [{
        xtype: 'nav-buttons'
    },{
        xtype: 'home-page'
    }]
});

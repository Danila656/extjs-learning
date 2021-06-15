Ext.define('App.view.main.homePage.HomePage', {
    extend: 'Ext.Container',
    xtype: 'home-page',
    controller: 'home-page',
    viewModel: {
        type: 'home-page'
    },
    height:1000,
    id:'home-page',
    layout:'hbox',
    items:[
        {
            xtype: 'pictures',
            data: 'films',
            tpl:team
        }
    ]
});

Ext.onReady(function (){
    console.log(this.getViewModel());
    const tpl = new Ext.XTemplate(
        '<tpl for=".">',
        '   <span onclick="changeAddressToFilm()">' ,
        '   <img src="http://image.tmdb.org/t/p/w342{poster_path}"/>' ,
        '   </span>' ,
        '</tpl>'
    )
    tpl.overwrite(Home,films)
})
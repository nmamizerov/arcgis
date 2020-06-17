require([ "esri/Map", "esri/views/MapView", 'esri/layers/GroupLayer', 'esri/layers/MapImageLayer' ], function(Map, MapView, GroupLayer, MapImageLayer) {
    const fl_1 = new MapImageLayer({
        url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer',
    })
    // const fl_2 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/2',
    // })
    // const fl_3 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/3',
    // })
    // const fl_4 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/4',
    // })
    // const fl_5 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/5',
    // })
    // const fl_6 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/6',
    // })
    // const fl_7 = new FeatureLayer({
    //     url: 'https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/Cadastre/MapServer/7',
    // })
    // const fl_1_7 = new GroupLayer({
    //     title: "fl_1_7",
    //     visible: true,
    //     visibilityMode: "exclusive",
    //     layers: [fl_1,fl_2]
    // });
    var map = new Map({
        basemap: "streets",
    });
    var view = new MapView({
        container: "viewDiv", // Reference to the DOM node that will contain the view
        map: map // References the map object created in step 3
    });
    view.when( function () {
        console.log('load event called');
        map.layers.add(fl_1);
      });
    
});



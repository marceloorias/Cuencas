var wms_layers = [];

var lyr_Hillshade_SRTM_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hillshade_SRTM<br />\
    <img src="styles/legend/Hillshade_SRTM_0_0.png" /> 0<br />\
    <img src="styles/legend/Hillshade_SRTM_0_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hillshade_SRTM_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7858809.898491, -3519546.119039, -7809369.352256, -3479691.541504]
        })
    });
var format_Zonal_Statistics_1 = new ol.format.GeoJSON();
var features_Zonal_Statistics_1 = format_Zonal_Statistics_1.readFeatures(json_Zonal_Statistics_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonal_Statistics_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonal_Statistics_1.addFeatures(features_Zonal_Statistics_1);
var lyr_Zonal_Statistics_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonal_Statistics_1, 
                style: style_Zonal_Statistics_1,
                popuplayertitle: 'Zonal_Statistics',
                interactive: true,
    title: 'Zonal_Statistics<br />\
    <img src="styles/legend/Zonal_Statistics_1_0.png" /> <br />\
    <img src="styles/legend/Zonal_Statistics_1_1.png" /> <br />\
    <img src="styles/legend/Zonal_Statistics_1_2.png" /> <br />\
    <img src="styles/legend/Zonal_Statistics_1_3.png" /> <br />' });
var format_Cauces_2 = new ol.format.GeoJSON();
var features_Cauces_2 = format_Cauces_2.readFeatures(json_Cauces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cauces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cauces_2.addFeatures(features_Cauces_2);
var lyr_Cauces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cauces_2, 
                style: style_Cauces_2,
                popuplayertitle: 'Cauces',
                interactive: true,
                title: '<img src="styles/legend/Cauces_2.png" /> Cauces'
            });

lyr_Hillshade_SRTM_0.setVisible(true);lyr_Zonal_Statistics_1.setVisible(true);lyr_Cauces_2.setVisible(true);
var layersList = [lyr_Hillshade_SRTM_0,lyr_Zonal_Statistics_1,lyr_Cauces_2];
lyr_Zonal_Statistics_1.set('fieldAliases', {'id': 'id', 'Cuenca': 'Cuenca', 'VALUE': 'VALUE', 'fid': 'fid', 'max': 'max', 'mean': 'mean', 'min': 'min', 'stdDev': 'stdDev', });
lyr_Cauces_2.set('fieldAliases', {'fid': 'fid', 'BASIN': 'BASIN', 'UP_ELEV': 'UP_ELEV', 'DN_ELEV': 'DN_ELEV', 'LENGTH': 'LENGTH', 'AVG_SLOPE': 'AVG_SLOPE', });
lyr_Zonal_Statistics_1.set('fieldImages', {'id': 'TextEdit', 'Cuenca': 'TextEdit', 'VALUE': 'TextEdit', 'fid': 'Range', 'max': 'Range', 'mean': 'TextEdit', 'min': 'Range', 'stdDev': 'TextEdit', });
lyr_Cauces_2.set('fieldImages', {'fid': 'TextEdit', 'BASIN': 'TextEdit', 'UP_ELEV': 'TextEdit', 'DN_ELEV': 'TextEdit', 'LENGTH': 'TextEdit', 'AVG_SLOPE': 'TextEdit', });
lyr_Zonal_Statistics_1.set('fieldLabels', {'id': 'hidden field', 'Cuenca': 'inline label - always visible', 'VALUE': 'inline label - always visible', 'fid': 'hidden field', 'max': 'inline label - always visible', 'mean': 'inline label - always visible', 'min': 'inline label - always visible', 'stdDev': 'hidden field', });
lyr_Cauces_2.set('fieldLabels', {'fid': 'hidden field', 'BASIN': 'inline label - always visible', 'UP_ELEV': 'inline label - always visible', 'DN_ELEV': 'inline label - always visible', 'LENGTH': 'no label', 'AVG_SLOPE': 'hidden field', });
lyr_Cauces_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
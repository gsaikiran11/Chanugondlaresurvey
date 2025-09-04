ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([791289.446906, 1737416.835500, 802820.562494, 1744237.068500]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingVirtualEarth_1 = new ol.layer.Tile({
            'title': 'Bing Virtual Earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_EsriImagery_2 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LinkedwithDLR_3 = new ol.format.GeoJSON();
var features_LinkedwithDLR_3 = format_LinkedwithDLR_3.readFeatures(json_LinkedwithDLR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_LinkedwithDLR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinkedwithDLR_3.addFeatures(features_LinkedwithDLR_3);
var lyr_LinkedwithDLR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinkedwithDLR_3, 
                style: style_LinkedwithDLR_3,
                popuplayertitle: 'Linked with DLR',
                interactive: true,
                title: '<img src="styles/legend/LinkedwithDLR_3.png" /> Linked with DLR'
            });
var format_GroundValidationData_4 = new ol.format.GeoJSON();
var features_GroundValidationData_4 = format_GroundValidationData_4.readFeatures(json_GroundValidationData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_GroundValidationData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GroundValidationData_4.addFeatures(features_GroundValidationData_4);
var lyr_GroundValidationData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GroundValidationData_4, 
                style: style_GroundValidationData_4,
                popuplayertitle: 'Ground Validation Data',
                interactive: true,
                title: '<img src="styles/legend/GroundValidationData_4.png" /> Ground Validation Data'
            });
var format_VillageMap_5 = new ol.format.GeoJSON();
var features_VillageMap_5 = format_VillageMap_5.readFeatures(json_VillageMap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_VillageMap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillageMap_5.addFeatures(features_VillageMap_5);
var lyr_VillageMap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillageMap_5, 
                style: style_VillageMap_5,
                popuplayertitle: 'Village Map',
                interactive: true,
                title: '<img src="styles/legend/VillageMap_5.png" /> Village Map'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BingVirtualEarth_1.setVisible(false);lyr_EsriImagery_2.setVisible(false);lyr_LinkedwithDLR_3.setVisible(true);lyr_GroundValidationData_4.setVisible(false);lyr_VillageMap_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BingVirtualEarth_1,lyr_EsriImagery_2,lyr_LinkedwithDLR_3,lyr_GroundValidationData_4,lyr_VillageMap_5];
lyr_LinkedwithDLR_3.set('fieldAliases', {'LPM_NO': 'LPM_NO', 'Corelation': 'Corelation', 'Ac.Cts': 'Ac.Cts', 'Hc.Cts': 'Hc.Cts', 'Land Natur': 'Land Natur', 'Land Nat_1': 'Land Nat_1', 'Land Class': 'Land Class', 'Land Cla_1': 'Land Cla_1', 'Nature Of': 'Nature Of', 'Khata No.': 'Khata No.', 'Pattadhar': 'Pattadhar', 'Pattadha_1': 'Pattadha_1', 'Enjoyment': 'Enjoyment', });
lyr_GroundValidationData_4.set('fieldAliases', {'CHALTHA': 'CHALTHA', 'SY_NO': 'SY_NO', 'KHATA_NO': 'KHATA_NO', 'PATTADAR': 'PATTADAR', 'AREA': 'AREA', 'ADAN_EXT': 'ADAN_EXT', 'REMARKS': 'REMARKS', 'LPM_NO': 'LPM_NO', });
lyr_VillageMap_5.set('fieldAliases', {'Name': 'Name', 'Sy.No.': 'Sy.No.', 'area': 'area', });
lyr_LinkedwithDLR_3.set('fieldImages', {'LPM_NO': 'TextEdit', 'Corelation': 'TextEdit', 'Ac.Cts': 'TextEdit', 'Hc.Cts': 'TextEdit', 'Land Natur': 'TextEdit', 'Land Nat_1': 'TextEdit', 'Land Class': 'TextEdit', 'Land Cla_1': 'TextEdit', 'Nature Of': 'TextEdit', 'Khata No.': 'TextEdit', 'Pattadhar': 'TextEdit', 'Pattadha_1': 'TextEdit', 'Enjoyment': 'TextEdit', });
lyr_GroundValidationData_4.set('fieldImages', {'CHALTHA': 'TextEdit', 'SY_NO': 'TextEdit', 'KHATA_NO': 'TextEdit', 'PATTADAR': 'TextEdit', 'AREA': 'TextEdit', 'ADAN_EXT': 'TextEdit', 'REMARKS': 'TextEdit', 'LPM_NO': 'TextEdit', });
lyr_VillageMap_5.set('fieldImages', {'Name': 'TextEdit', 'Sy.No.': 'TextEdit', 'area': 'TextEdit', });
lyr_LinkedwithDLR_3.set('fieldLabels', {'LPM_NO': 'header label - visible with data', 'Corelation': 'inline label - visible with data', 'Ac.Cts': 'inline label - always visible', 'Hc.Cts': 'hidden field', 'Land Natur': 'inline label - always visible', 'Land Nat_1': 'hidden field', 'Land Class': 'inline label - always visible', 'Land Cla_1': 'hidden field', 'Nature Of': 'hidden field', 'Khata No.': 'inline label - always visible', 'Pattadhar': 'inline label - always visible', 'Pattadha_1': 'no label', 'Enjoyment': 'no label', });
lyr_GroundValidationData_4.set('fieldLabels', {'CHALTHA': 'hidden field', 'SY_NO': 'hidden field', 'KHATA_NO': 'inline label - visible with data', 'PATTADAR': 'inline label - visible with data', 'AREA': 'inline label - visible with data', 'ADAN_EXT': 'hidden field', 'REMARKS': 'hidden field', 'LPM_NO': 'hidden field', });
lyr_VillageMap_5.set('fieldLabels', {'Name': 'hidden field', 'Sy.No.': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_VillageMap_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
define([
  "dojo/_base/declare",
  "esri/layers/WebTileLayer",
  "esri/geometry/SpatialReference",
  "esri/geometry/Extent",
  "esri/layers/support/TileInfo"
], function (
  declare,
  WebTileLayer,
  SpatialReference,
  Extent,
  TileInfo
) {
    var tdtAnno = {};
    tdtAnno.getLayer = function () {
      var tiledLayer = new WebTileLayer({
        urlTemplate: "http://{subDomain}.tianditu.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        id: 'TDTAnnoLayer'
      });

      return tiledLayer;
    };

    return tdtAnno;

  });
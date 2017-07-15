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
    var tdt = {};
    tdt.getLayer = function () {
      var tiledLayer = new WebTileLayer({
        urlTemplate: "http://{subDomain}.tianditu.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={level}&TileCol={col}&&TileRow={row}&l={level}&style=default&format=tiles",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        id: 'TDTLayer'
      });

      return tiledLayer;
    };

    return tdt;
  });
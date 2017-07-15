import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import store from '../../store';

@Component({
    selector: 'esri-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent {
    @ViewChild('viewDiv') mapEl: ElementRef;
    constructor(private esriLoader: EsriLoaderService) { }

    ngOnInit() {
        this.esriLoader.load({
            url: 'https://js.arcgis.com/4.4/'
        }).then(() => {
            this.esriLoader.loadModules([
                "esri/Map",
                "esri/views/SceneView",
                "esri/Basemap",
                "esri/config",
                "esri/layers/TileLayer",
                "/assets/libs/tdlib/TDTImgAnnoLayer.js",
                "/assets/libs/tdlib/TDTImgLayer.js",
                "dojo/domReady!"
            ]).then(([
                Map,
                SceneView,
                Basemap,
                esriConfig,
                TileLayer,
                TDTImgAnnoLayer,
                TDTImgLayer
            ]) => {

                esriConfig.request.corsEnabledServers
                    .push("t0.tianditu.cn", "t1.tianditu.cn", "t2.tianditu.cn", "t3.tianditu.cn", "t4.tianditu.cn", "t5.tianditu.cn", "t6.tianditu.cn", "t7.tianditu.cn", );

                var tdtLayer = TDTImgLayer.getLayer();
                var tdtannoLayer = TDTImgAnnoLayer.getLayer();
                var BoundariesLayer = new TileLayer({
                    url: "https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer",
                    "id": "BoundariesLayer"
                });
                var basemap = new Basemap({
                    baseLayers: [tdtLayer, tdtannoLayer, BoundariesLayer],
                    title: "chinaterrain",
                    id: "chinaterrain"
                });
                var map = new Map({
                    basemap: basemap,
                    ground: "world-elevation"
                });

                var view = new SceneView({
                    container: this.mapEl.nativeElement,
                    map: map,
                    zoom: 5,
                    center: [106, 35]
                });
                store.view = view;
            });
        });
    }
}
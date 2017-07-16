import { Component } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import store from '../../store';

@Component({
    selector: 'basemap-toggle',
    templateUrl: './basemap-toggle.component.html',
    styleUrls: ['./basemap-toggle.component.css']
})

export class BasemapToggleComponent {
    private basemapToggle: any;
    constructor(private esriLoader: EsriLoaderService) { }

    ngOnInit() {

        // this.esriLoader.load({
        //     url: 'https://js.arcgis.com/4.4/'
        // }).then(() => {
        this.esriLoader.loadModules([
            "esri/layers/TileLayer",
            "esri/Basemap",
            "esri/widgets/BasemapToggle",
            "/assets/libs/tdlib/TDTAnnoLayer.js",
            "/assets/libs/tdlib/TDTLayer.js"
        ]).then(([
            TileLayer,
            Basemap,
            BasemapToggle,
            TDTAnnoLayer,
            TDTLayer
        ]) => {
            var tdtLayer = TDTAnnoLayer.getLayer();
            var tdtannoLayer = TDTLayer.getLayer();
            var BoundariesLayer = new TileLayer({
                url: "https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer",
                "id": "BoundariesLayer"
            });
            var nextBasemap = new Basemap({
                baseLayers: [BoundariesLayer, tdtannoLayer, tdtLayer],
                title: 'chinaImg',
                id: 'chinaImg'
            });
            this.basemapToggle = new BasemapToggle({
                view: store.view,
                nextBasemap: nextBasemap
            });
        });
        // });

    }

    onclick() {
        if (!this.basemapToggle.view) {
            this.basemapToggle.view = store.view;
        }
        this.basemapToggle.toggle();
    }
}
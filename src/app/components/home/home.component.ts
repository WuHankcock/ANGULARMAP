import { Component, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import store from '../../store';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    private homeBtn: any;
    constructor(private esriLoader: EsriLoaderService) { }
    onClick() {
        this.esriLoader.loadModules([
            "esri/widgets/Home"
        ]).then(([
            Home
        ]) => {
            this.homeBtn = new Home({
                view: store.view,
                viewpoint: {
                    "scale": 22573068.106206276,
                    "rotation": 0,
                    "camera": {
                        "position":
                        {
                            "x": 11799866.024086999,
                            "y": 4087936.345051543,
                            "z": 7152463.203793859,
                            "spatialReference": {
                                "latestWkid": 3857,
                                "wkid": 102100
                            }
                        },
                        "heading": 0,
                        "tilt": 0.49999999999986244
                    }
                }
            });
            this.homeBtn.go().then(() => {
                this.homeBtn.destroy();
            });
        })
    }
}
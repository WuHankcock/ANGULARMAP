import { Component, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import store from '../../store';

@Component({
    selector: 'locate',
    templateUrl: './locate.component.html',
    styleUrls: ['./locate.component.css']
})

export class LocateComponent {
    private locateBtn: any;
    constructor(private esriLoader: EsriLoaderService) { }
    ngOnInit() {

    }
    onClick() {
        this.esriLoader.loadModules([
            "esri/widgets/Locate"
        ]).then(([
            Locate
        ]) => {
            this.locateBtn = new Locate({
                view: store.view
            });
            this.locateBtn.locate().then(() => {
                this.locateBtn.destroy();
            });

        });

    }
}
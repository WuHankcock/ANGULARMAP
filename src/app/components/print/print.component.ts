import { Component, ViewChild, ElementRef } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
declare global {
    interface Window {
        html2canvas: any;
        Canvas2Image: any;
    }
}
@Component({
    selector: 'print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css']
})

export class PrintComponent {
    constructor(private esriLoader: EsriLoaderService) { }
    onClick() {
        this.esriLoader.loadModules([
            "/assets/libs/html2cavans/html2canvas.js",
            "/assets/libs/html2cavans/canvas2image.js"
        ]).then(([]) => {

            window.html2canvas(document.getElementById('viewDiv'), {
                onrendered: function (canvas) {
                    window.Canvas2Image.saveAsPNG(canvas,400,400)
                }
            });
        })
    }
}

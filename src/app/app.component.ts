import { Component, ElementRef, ViewChild } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';

import { MapComponent } from './components/map/map.component';
import { BasemapToggleComponent } from './components/basemaptoggle/basemap-toggle.component';
import { LocateComponent } from './components/locate/locate.component';
import { HomeComponent } from './components/home/home.component';
import { PrintComponent } from './components/print/print.component';
import {LayersListComponent} from './components/layerslist/layers-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

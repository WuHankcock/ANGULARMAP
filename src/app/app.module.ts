import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EsriLoaderModule, EsriLoaderService } from 'angular-esri-loader';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BasemapToggleComponent } from './components/basemaptoggle/basemap-toggle.component';
import { LocateComponent } from './components/locate/locate.component';
import { HomeComponent } from './components/home/home.component';
import { PrintComponent } from './components/print/print.component';
import { LayersListComponent } from './components/layerslist/layers-list.component';

import { LayersListTreeService } from './services/layers-list-tree.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BasemapToggleComponent,
    LocateComponent,
    HomeComponent,
    PrintComponent,
    LayersListComponent
  ],
  imports: [
    BrowserModule,
    EsriLoaderModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [EsriLoaderService, LayersListTreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

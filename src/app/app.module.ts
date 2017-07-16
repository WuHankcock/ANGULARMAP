import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsriLoaderModule } from 'angular-esri-loader';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BasemapToggleComponent } from './components/basemaptoggle/basemap-toggle.component';
import { LocateComponent } from './components/locate/locate.component';
import { HomeComponent } from './components/home/home.component';
import { PrintComponent } from './components/print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BasemapToggleComponent,
    LocateComponent,
    HomeComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    EsriLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

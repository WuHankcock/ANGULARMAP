import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsriLoaderModule } from 'angular-esri-loader';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { BasemapToggleComponent } from './components/basemaptoggle/basemap-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BasemapToggleComponent
  ],
  imports: [
    BrowserModule,
    EsriLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-EC'
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule,
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-EC' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

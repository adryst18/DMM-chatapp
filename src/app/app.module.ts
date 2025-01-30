import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemAjustesComponent } from './component/item-ajustes/item-ajustes.component'; // Importar el nuevo componente

import { ItemEstadoComponent } from './component/item-estados/item-estados.component';
import { ItemLlamadaComponent } from './component/item-llamadas/item-llamadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemEstadoComponent, 
    ItemLlamadaComponent, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Estrategia de reutilización de rutas
  ],
  bootstrap: [AppComponent],
  exports: [
    ItemEstadoComponent, 
    ItemLlamadaComponent, 
  ],
})
export class AppModule {}
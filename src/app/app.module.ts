import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { contadorReducer } from './contador/contador.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador:contadorReducer}),// {contador:contadorReducer} es el State Principal de toda la aplicación (es toda la estructura de datos)
    StoreDevtoolsModule.instrument({
      maxAge: 25, //Retiene 25 estados
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

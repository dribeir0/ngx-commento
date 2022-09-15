import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCommentoModule } from 'ngx-commento';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCommentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranctionlistComponent } from './tranctionlist/tranctionlist.component';
import {HttpClientModule} from "@angular/common/http";
import { TransactionaddComponent } from './transactionadd/transactionadd.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TranctionlistComponent,
    TransactionaddComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

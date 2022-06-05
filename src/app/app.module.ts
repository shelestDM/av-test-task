import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip'

import { AppComponent } from './app.component';
import { ShowdataComponent } from './components/showdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NullCheck } from './shared/pipes/nullcheck.pipe';
import { ProductName } from './shared/pipes/productname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    NullCheck,
    ProductName
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

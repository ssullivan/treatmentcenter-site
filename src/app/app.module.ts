import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TreatmentSearchComponent } from './treatment-search/treatment-search.component';
import { TreatmentApiService } from './treatment-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TreatmentSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [TreatmentApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

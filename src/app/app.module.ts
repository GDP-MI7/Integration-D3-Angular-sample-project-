import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PieChartComponent } from './06_pie_chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [PieChartComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { TreeSelectComponent } from './components/student-result/helper-components/tree-select/tree-select.component';
import { BarHorizontalComponent } from './components/bar-horizontal/bar-horizontal.component';
import { DetailedAnalysisChartComponent } from './detailed-analysis-chart/detailed-analysis-chart.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 


@NgModule({
  declarations: [
    AppComponent,
    StudentResultComponent,
    TreeSelectComponent,
    BarHorizontalComponent,
    DetailedAnalysisChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    //Material Moduls
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

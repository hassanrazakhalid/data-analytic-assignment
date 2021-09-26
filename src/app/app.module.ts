import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TreeSelectComponent } from './components/student-result/helper-components/tree-select/tree-select.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentResultComponent,
    TreeSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
//Material Moduls
MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

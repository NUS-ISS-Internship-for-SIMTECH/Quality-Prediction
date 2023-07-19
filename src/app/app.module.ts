import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PredictionMachinePageComponent } from './view/prediction-machine-page/prediction-machine-page.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { MenuModule } from '@progress/kendo-angular-menu';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorCustomSampleComponent } from './components/indicator-custom-sample/indicator-custom-sample.component';
import { HttpClientModule } from '@angular/common/http';
import { PredictionGridComponent } from './components/prediction-grid/prediction-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PredictionMachinePageComponent,
    LayoutComponent,
    SidebarComponent,
    HorizontalMenuComponent,
    IndicatorCustomSampleComponent,
    PredictionGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ChartsModule,
    IconsModule,
    DialogsModule,
    MenuModule,
    LabelModule,
    InputsModule,
    DropDownsModule,
    ButtonsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

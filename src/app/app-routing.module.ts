import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionMachinePageComponent } from './view/prediction-machine-page/prediction-machine-page.component';

const routes: Routes = [
  {
    path: 'quality-prediction-page',
    component: PredictionMachinePageComponent,
  },
  {
    path: '**',
    redirectTo: 'quality-prediction-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

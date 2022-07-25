import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path: '',
    component: TracksPageComponent,
    /* Si no se especifica el router outlet a usar angular tomara por defecto
    el mas cercano en jerarquia a ese nivel de rutas */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }

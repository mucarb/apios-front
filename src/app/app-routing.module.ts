import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';

const routes: Routes = [
  {
    // se o caminho for vazio, redirecionar para o component Home
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

// import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { DesenvolvedorComponent } from './desenvolvedor/desenvolvedor.component';
// import { TabelaComponent } from './tabela/tabela.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'desenvolvedor', component: DesenvolvedorComponent},
  {path:'contato', component: ContatoComponent}
  // {path:'tabela', component: TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

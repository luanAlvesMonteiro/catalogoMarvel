import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPersonagensComponent } from './lista-personagens/lista-personagens.component';
import { DetalhesPersonagemComponent } from './detalhes-personagem/detalhes-personagem.component';

//import { VerificaGuardService } from './guards/verifica-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/personagens', pathMatch: 'full'
  },
  {
    path: 'personagens',  component: ListaPersonagensComponent    
  },
  {
    path: 'detalhes-personagens/:idPersonagem', 
    component: DetalhesPersonagemComponent,
    //canActivate: [VerificaGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

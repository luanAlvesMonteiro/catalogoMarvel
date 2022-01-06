import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaPersonagensComponent } from './lista-personagens/lista-personagens.component';
import { DetalhesPersonagemComponent } from './detalhes-personagem/detalhes-personagem.component';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonagensComponent,
    DetalhesPersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { ListaPersonagensService } from '../services/lista-personagens.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.css']
})
export class ListaPersonagensComponent implements OnInit {
  
  router: Router;

  constructor(
    private ListaPersonagensService : ListaPersonagensService,
    router: Router,
  ) 
  { 
    this.router = router;  
  }
 
  ngOnInit(): void {    
    this.carregarMaisPersonagens(0);
  }
  
  paginaItem : number = 0;  
  carregarMaisPersonagens(pagina : number, buscaPersonagem = "")
  {           
    this.paginaItem++;    
    let limite = 20;
    let offset = pagina * limite;
    let dados = {      
      nomePersonagem : buscaPersonagem,
      limite : limite,
      offset : offset
    }    
    this.listarTodosPersonagens(dados);
  }  

  personagens : any;
  totalPersonagens : number = 0;
  msgAguarde = true;
  listarTodosPersonagens(dados: any)
  {         
    this.ListaPersonagensService.listarTodosPersonagens(dados).subscribe((data: any) =>{            
      if(dados.offset == 0)
      {        
        this.personagens = data.data.results;   
      }
      else
      {
        var i = this.personagens.length;
        for(var x = 0; x < data.data.results.length; x++)
        {          
          this.personagens[i] = data.data.results[x];           
          i++;
        }        
      }
      
      if(typeof this.personagens !== "undefined")
      {
        this.msgAguarde = false;
      }            
      this.totalPersonagens = data.data.total;      
    }, error => {
      console.log(error)
    });
  } 

  verDetalhesPersonagem(idPersonagem : number)
  {    
    this.router.navigate(['detalhes-personagens/'+idPersonagem]);    
  }

  campoPersonagem  = "";
  verificaConsulta(pesquisa : string)
  {    
    this.paginaItem = 0;
    this.carregarMaisPersonagens(0, pesquisa);

  }

}

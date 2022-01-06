import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaPersonagensService } from '../services/lista-personagens.service'


@Component({
  selector: 'app-detalhes-personagem',
  templateUrl: './detalhes-personagem.component.html',
  styleUrls: ['./detalhes-personagem.component.css']
})
export class DetalhesPersonagemComponent implements OnInit {

  constructor(
    private ListaPersonagensService : ListaPersonagensService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(                    
      params => {
        this.idPersonagem = params.idPersonagem
      }
    );    
  }

  idPersonagem : any;
  personagem = {
    nome : "",
    img : ""
  };

  quadrinhos : any;

  inforCompletaPersonagem : any;
  ngOnInit(): void {    
    this.carregarPersonagem(this.idPersonagem);
  }
  
  msgAguarde = true;
  carregarPersonagem(idPersonagem : number)
  {
    this.ListaPersonagensService.carregarPersonagemPorId(idPersonagem).subscribe((data: any) =>{      
      this.inforCompletaPersonagem = data;
      this.personagem.nome = data.data.results[0].name; 
      this.personagem.img = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension;       

      if(this.personagem.nome !== "")
      {
        this.msgAguarde = false;
      }                  

      this.buscaPorPagina(0);
    }, error => {
      console.log(error)
    });    
  }

  paginaItem : number = 0;  
  buscaPorPagina(pagina : number)
  {           
      let limite  = 4;
      let offset = pagina * limite;
      let dados = {
        idPersonagem : this.idPersonagem,
        limite : limite,
        offset : offset
      }
      this.carregarQuadrinhosPersonagem(dados);
  }
  
  carregarQuadrinhosPersonagem(dados : any)
  {
    this.ListaPersonagensService.carregarQuadrinhosPersonagemPorId(dados).subscribe((data: any) =>{      
      this.quadrinhos = data.data.results      
      this.gerarPaginacao(data.data.total);      
    }, error => {
      console.log(error)
    });
  }

  paginacao : any;  
  gerarPaginacao(totalRegistros:number)
  {
    let resultado = totalRegistros / 4;
    if(Number.isInteger(resultado) == false) 
    {
      resultado = parseInt(resultado.toFixed(0)) + 1;      
    }
    this.paginacao = new Array(resultado);
  }
}

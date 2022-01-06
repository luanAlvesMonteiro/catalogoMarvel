import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaPersonagensService {

  constructor(
    private http: HttpClient
  ) { }

  public_key = '5a237863b3cc2061003cbbc4fe20dc06';
  hash = 'bd4b447a65ef5d6b174f87cf9db6d2db';
  //url_api = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.public_key}&hash=${this.hash}`;
  url = `https://gateway.marvel.com:443/v1/public/`;
  config = `ts=1&apikey=${this.public_key}&hash=${this.hash}`;


  listarTodosPersonagens(dados : any): Observable<any> {
    var url_settings = '?' + this.config + '&limit='+ dados.limite +'&offset='+ dados.offset; 
    if(dados.nomePersonagem !== ''){
      url_settings += '&nameStartsWith=' + dados.nomePersonagem;
    }
    return this.http.get<any>(this.url + 'characters' +  url_settings)
    .pipe(map((data:any)=>data))
  }  

  carregarPersonagemPorId(idPersonagem : number): Observable<any> {
    return this.http.get<any>(this.url + 'characters/' + idPersonagem + '?' + this.config)
    .pipe(map((data:any)=>data))
  }

  carregarQuadrinhosPersonagemPorId(dados : any): Observable<any> {        
    var url_settings = '?' + this.config + '&limit='+ dados.limite +'&offset='+ dados.offset;
    return this.http.get<any>(this.url + 'characters/' + dados.idPersonagem + '/comics' + url_settings)
    .pipe(map((data:any)=>data))
  }  
}

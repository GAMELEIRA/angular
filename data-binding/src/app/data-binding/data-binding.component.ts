import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  public url = 'https://br.linkedin.com/in/gabriel-gameleira-dos-santos-634b23161';
  public cursoAngular: boolean = true;
  public urlImagem = 'http://lorempixel.com.br/400/200/nature';

  constructor() { }

  public getValor = () => 1;

  public getCurtirCurso = () => true;

}

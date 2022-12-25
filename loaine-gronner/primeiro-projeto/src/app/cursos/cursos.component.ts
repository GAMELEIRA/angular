import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  public nomePortal: string;
  public cursos: Array<string> = [];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training';
    this.getCursos();
  }

  public getCursos = () => {
   this.cursos = this.cursosService.getCursos();
  }


}

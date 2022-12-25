import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  public getCursos() {
    return [
      'Javascript',
      'Angular'
    ]
  }

}

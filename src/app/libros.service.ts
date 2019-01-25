import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class LibrosService {

  libros: any[] = [];
  constructor() {
    this.libros = [
      {
        title: 'Eloquent JavaScript, Second Edition',
        author: 'Marijn Haverbeke',
        editorial: 'No Starch Press',
        edition: 3
      },
      {
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        editorial: "O'Reilly Media",
        edition: 3, id:5
      },
      {
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        editorial: "O'Reilly Media",
        edition: 3, id:4
      },
      {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        editorial: "O'Reilly Media",
        edition: 3, id: 2
      },
      {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        editorial: 'No Starch Press',
        edition: 3, id: 1
      },
      {
        title: "You Don't Know JS",
        author: 'Kyle Simpson',
        editorial: "O'Reilly Media",
        edition: 3, id: 5
      },
      {
        title: 'Git Pocket Guide',
        author: 'Richard E. Silverman',
        editorial: "O'Reilly Media",
        edition: 3, id: 7
      },
      {
        title: 'Designing Evolvable Web APIs APIswith ASP.NET',
        author: 'Glenn Block, et al.',
        editorial: "O'Reilly Media",
        edition: 3, id: 9
      }
    ];
  }

  removeLibro(libro){
      _.remove(this.libros, libro);
      return this.libros;
  }
  
  addLibros(libro) {
    this.libros.push(libro);
    return this.libros;
  }

  getLibros() {
    return this.libros;
  }
}

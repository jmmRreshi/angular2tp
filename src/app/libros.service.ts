import { Injectable } from '@angular/core';

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
        edition: 3
      },
      {
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        editorial: "O'Reilly Media",
        edition: 3
      },
      {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        editorial: "O'Reilly Media",
        edition: 3
      },
      {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        editorial: 'No Starch Press',
        edition: 3
      },
      {
        title: "You Don't Know JS",
        author: 'Kyle Simpson',
        editorial: "O'Reilly Media",
        edition: 3
      },
      {
        title: 'Git Pocket Guide',
        author: 'Richard E. Silverman',
        editorial: "O'Reilly Media",
        edition: 3
      },
      {
        title: 'Designing Evolvable Web APIs with ASP.NET',
        author: 'Glenn Block, et al.',
        editorial: "O'Reilly Media",
        edition: 3
      }
    ];
  }

  

  addLibros(libro) {
    this.libros.push(libro);
    return this.libros;
  }

  getLibros() {
    return this.libros;
  }
}
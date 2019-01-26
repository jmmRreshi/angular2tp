import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Title } from '@angular/platform-browser';
import { text } from '@angular/core/src/render3';

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
        edition: 3,
        id: 5
      },
      {
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        editorial: "O'Reilly Media",
        edition: 3,
      },
      {
        title: 'Programming JavaScript Applications',
        author: 'Eric Elliott',
        editorial: "O'Reilly Media",
        edition: 3,
      },
      {
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        editorial: 'No Starch Press',
        edition: 3,
      },
      {
        title: "You Don't Know JS",
        author: 'Kyle Simpson',
        editorial: "O'Reilly Media",
        edition: 3,
      },
      {
        title: 'Git Pocket Guide',
        author: 'Richard E. Silverman',
        editorial: "O'Reilly Media",
        edition: 3,
      },
      {
        title: 'Designing Evolvable Web APIs APIswith ASP.NET',
        author: 'Glenn Block, et al.',
        editorial: "O'Reilly Media",
        edition: 3,
      }
    ];
  }

  removeLibro(libro) {
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

  filtrosLibros(text) {
    /*console.log (_.some(this.libros, function(o) { 
    console.log(o)  
    return o.title == "Designing Evolvable Web APIs APIswith ASP.NET"; }) );*/
    let librosFiltrados =  this.libros.filter((libro) => {
      if (_.includes( libro.title.toLowerCase() , text.toLowerCase())) {
        return libro
      } 
      if (_.includes( libro.author.toLowerCase() , text.toLowerCase())) {
        return libro
      } 
    });
    return librosFiltrados;
  }
};

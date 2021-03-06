import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

import { LibrosService } from './libros.service';
import { MatDialog } from '@angular/material';
import { AddBookComponent } from './add-libro.component';
import { ThrowStmt } from '@angular/compiler';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  @ViewChild('booksTable') booksTable: MatTable<any>;

  filterText: string = "";
  libros: any[] = [];

  displayedColumns: string[] = [
    'title',
    'autor',
    'publisher',
    'edition',
    'acciones'
  ];
  constructor(private librosService: LibrosService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '50%',
      data: {
        title: '',
        editorial: '',
        author: '',
        edition: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.libros = this.librosService.addLibros(result);
      this.booksTable.renderRows();
    });
  }

  ngOnInit(): void {
    this.libros = this.librosService.getLibros();
  }

  removeFilter(){
    this.libros = this.librosService.getLibros();
  }

  eliminarLibro(libro) {
    this.libros = this.librosService.removeLibro(libro);
    this.booksTable.renderRows();
  }
  filtrosLibros() {
    this.libros = this.librosService.filtrosLibros(this.filterText);
    this.booksTable.renderRows();
  }
}


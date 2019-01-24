import { Component } from '@angular/core';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'trabajo-final';
  libros: any[] = [];
  displayedColumns: string[] = ['title', 'autor'];
  constructor(private librosService: LibrosService) {
    // console.log(this.librosService.getLibros())
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.librosService.getLibros());
    this.libros = this.librosService.getLibros();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

import { LibrosService } from './libros.service';
import { AddBookComponent } from './add-libro.component';

@NgModule({
  declarations: [AppComponent, AddBookComponent],
  entryComponents: [AddBookComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule {}

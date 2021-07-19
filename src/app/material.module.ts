import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({

  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule
  ],

  exports: [
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ]

})

export class MaterialModule { }

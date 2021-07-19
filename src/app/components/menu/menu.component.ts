import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCerrarMenu() {
    this.menuToggle.emit();
  }

  terminarSesionMenu() {
    this.onCerrarMenu();
  }



}

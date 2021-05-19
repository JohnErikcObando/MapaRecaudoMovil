import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }


}

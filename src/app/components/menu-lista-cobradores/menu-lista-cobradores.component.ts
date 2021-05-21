import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { TblusuarioModel } from '../../models/tblusuario.models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu-lista-cobradores',
  templateUrl: './menu-lista-cobradores.component.html',
  styleUrls: ['./menu-lista-cobradores.component.css']
})
export class MenuListaCobradoresComponent implements OnInit {


  tblusuarios: any[] = [];

  @Output() menuToggle = new EventEmitter<void>();

  // para conener la fecha actual
  fecha = new FormControl(new Date());


  constructor(private listaCobradoresService: ListaCobradoresService) { }

  ngOnInit(): void {

    this.listaCobradoresService.getCobradores()
      .subscribe(cobradores => {
        this.tblusuarios = cobradores;

      })

  }

  // cerrar el menu de lista cobradores
  onCerrarMenu() {
    this.menuToggle.emit();
  }

  consultar(){

  }

}

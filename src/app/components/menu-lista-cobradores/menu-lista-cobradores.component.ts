import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { TblusuarioModel } from '../../models/tblusuario.models';

@Component({
  selector: 'app-menu-lista-cobradores',
  templateUrl: './menu-lista-cobradores.component.html',
  styleUrls: ['./menu-lista-cobradores.component.css']
})
export class MenuListaCobradoresComponent implements OnInit {


  tblusuarios: any[] = [];

  @Output() menuToggle = new EventEmitter<void>();

  constructor(private listaCobradoresService: ListaCobradoresService) { }

  ngOnInit(): void {

    this.listaCobradoresService.listaCobradores()
      .subscribe(cobradores => {
        this.tblusuarios = cobradores;

      })

  }


  onCerrarMenu() {
    this.menuToggle.emit();
  }

}

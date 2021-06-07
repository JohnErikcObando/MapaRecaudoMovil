import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PosicionIstUser } from 'src/app/models/PosicionlstUser.models';
import { TblusuarioModel } from 'src/app/models/tblusuario.models';

<<<<<<< HEAD
// import moment paa formatear fecha
=======
// import { Moment } from 'moment';
import * as _moment from 'moment';
>>>>>>> 7fc8ec5ac3b9bee92f14bdf19f00937e6ff72c84
import * as moment from 'moment';


@Component({
  selector: 'app-menu-lista-cobradores',
  templateUrl: './menu-lista-cobradores.component.html',
  styleUrls: ['./menu-lista-cobradores.component.css']
})
export class MenuListaCobradoresComponent implements OnInit, OnDestroy {

  tblusuarios: TblusuarioModel[] = [];
  coordenadas: PosicionIstUser[] = [];

  @Output() menuToggle = new EventEmitter<void>();

  // para conener la fecha actual
  // fecha = new FormControl(new Date());
  fecha = new Date();

  form: FormGroup;

<<<<<<< HEAD
  moment = moment;
=======
  moment = _moment;
>>>>>>> 7fc8ec5ac3b9bee92f14bdf19f00937e6ff72c84

  private usuarioConsulta: String;
  private fechaConsulta: String;

  constructor(private listaCobradoresService: ListaCobradoresService,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.cargarFormulario();
    this.listaUsuario();

  }

  ngOnDestroy(): void {

  }

  // cerrar el menu de lista cobradores
  onCerrarMenu(usuario: String) {

    this.menuToggle.emit();
    console.log('cobrador seleccionado:', usuario);
    this.usuarioConsulta = usuario;

  }


  listaUsuario() {

    this.listaCobradoresService.getCobradores()
      .subscribe((cobradores: any) => {
        this.tblusuarios = cobradores;
      });

  }

  cargarFormulario() {

    this.form = new FormGroup({
      fecha: new FormControl({ value: this.fecha, disabled: false }, Validators.required),

    });
  }


  consultarPagos() {

    this.fechaConsulta = moment(this.form.get('fecha').value).format("yyyy-MM-DD");

    console.log('conusltar Pagos usuario:', this.usuarioConsulta, 'fecha:', this.fechaConsulta);

    this.listaCobradoresService.obtenerCordenadas(this.usuarioConsulta, this.fechaConsulta)
      .subscribe((resp: any) => {
        this.coordenadas = resp;
        localStorage.setItem('listapagos', JSON.stringify(resp));
        console.log('este es consulta pagos', this.coordenadas);
      });
  }

}

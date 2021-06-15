import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PosicionIstUser } from 'src/app/models/PosicionlstUser.models';
import { TblusuarioModel } from 'src/app/models/tblusuario.models';

// Servicios
import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { DatosConsultaService } from '../../services/datos-consulta.service';

// import { Moment } from 'moment';
import * as moment from 'moment';


import { MapaComponent } from '../mapa/mapa.component';



@Component({
  selector: 'app-menu-lista-cobradores',
  templateUrl: './menu-lista-cobradores.component.html',
  styleUrls: ['./menu-lista-cobradores.component.css']
})

export class MenuListaCobradoresComponent implements OnInit, OnDestroy {

  tblusuarios: TblusuarioModel[];
  coordenadas: PosicionIstUser[];

  // evento del menu toolbar cerrar
  @Output() menuToggle = new EventEmitter<void>();


  // para conener la fecha actual
  fecha = new Date();

  // variable para traer la informacion del formulario
  form: FormGroup;

  // variable de la libreria para formatear la fecha
  moment = moment;


  usuarioConsulta: string;
  fechaConsulta: string;

  constructor(private listaCobradoresService: ListaCobradoresService,
    private fb: FormBuilder,
    public datosConsultaService: DatosConsultaService) { }


  ngOnInit(): void {

    this.cargarFormulario();
    this.listaUsuario();

  }

  ngOnDestroy(): void {

  }

  // cerrar el menu de lista cobradores y verificar el seleccionado
  onCerrarMenu(usuario: string) {

    this.menuToggle.emit();
    console.log('estoy en menu lista');

    console.log('cobrador seleccionado:', usuario);
    this.usuarioConsulta = usuario;

  }

  // lista los usuarios de recaudo movil
  listaUsuario() {

    this.listaCobradoresService.getCobradores()
      .subscribe((cobradores: any) => {
        this.tblusuarios = cobradores;
      });

  }

  // inicializacion del formulario con sus alidaciones
  cargarFormulario() {

    this.form = new FormGroup({
      fecha: new FormControl({ value: this.fecha, disabled: false }, Validators.required),

    });
  }


  // Consultar los pagos del cobrador seleccionado
  consultarPagos() {

    this.fechaConsulta = moment(this.form.get('fecha').value).format("yyyy-MM-DD");

    this.datosConsultaService.usuario = this.usuarioConsulta;
    this.datosConsultaService.fecha = this.fechaConsulta;

    // // console.log('conusltar Pagos usuario:', this.usuarioConsulta, 'fecha:', this.fechaConsulta);

    // this.listaCobradoresService.obtenerCordenadas(this.usuarioConsulta, this.fechaConsulta)
    //   .subscribe((resp: any) => {
    //     this.coordenadas = resp;
    //     // console.log('este es consulta pagos', resp);
    //     localStorage.setItem('listapagos', JSON.stringify(resp));
    //     console.log('este es consulta pagos', this.coordenadas);
    //   });

  }

}




import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


// Models
import { TblusuarioModel } from 'src/app/models/tblusuario.models';
import { PosicionIstUser } from 'src/app/models/PosicionlstUser.models';

// Servicios
import { DatosConsultaService } from 'src/app/services/datos-consulta.service';
import { ListaCobradoresService } from 'src/app/services/lista-cobradores.service';


// Formateo fecha
import * as moment from 'moment';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  // cerrar menu
  @Output() menuToggle = new EventEmitter<void>();

  // Datos consultar pagos
  @Output() messageEvent = new EventEmitter<{}>();


  tblusuarios: TblusuarioModel[];
  coordenadas: PosicionIstUser[];


  // array: any = [];

  fecha = new Date();

  // variable para traer la informacion del formulario
  form: FormGroup;

  // variable de la libreria para formatear la fecha
  moment = moment;

  // -----------------------------------------------------------------------------------------------------
  usuarioConsulta: string;
  fechaConsulta: string;

  Consulta: {
    usuario: string;
    fecha: string;
    cobrador: string;
  }

  // Consulta cuadre de caja
  cuadreCaja: any = []
  cuadre: string;

  constructor(private listaCobradoresService: ListaCobradoresService,
    private fb: FormBuilder,
    public datosConsultaService: DatosConsultaService) { }


  ngOnInit(): void {

    this.cargarFormulario();
    this.listaUsuario();

  }

  sendMessage() {
    // enviar los parametros de consulta a componente mapa cuando se detecte un evento
    this.messageEvent.emit(this.Consulta)
  }


  // cerrar el menu de lista cobradores y verificar el seleccionado
  onCerrarMenu(usuario: string, cobrador: string) {

    this.menuToggle.emit();

    this.fechaConsulta = moment(this.form.get('fecha').value).format("yyyy-MM-DD");

    // parametros de consulta
    this.Consulta = {
      usuario: usuario,
      fecha: this.fechaConsulta,
      cobrador: cobrador
    }

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

}

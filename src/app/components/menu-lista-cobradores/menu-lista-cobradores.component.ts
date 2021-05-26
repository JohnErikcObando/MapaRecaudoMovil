import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListaCobradoresService } from '../../services/lista-cobradores.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu-lista-cobradores',
  templateUrl: './menu-lista-cobradores.component.html',
  styleUrls: ['./menu-lista-cobradores.component.css']
})
export class MenuListaCobradoresComponent implements OnInit {

  tblusuarios: any[] = [];
  coordenadas: any[] = [];

  @Output() menuToggle = new EventEmitter<void>();

  // para conener la fecha actual
  fecha = new FormControl(new Date());
  form: FormGroup;

  constructor(private listaCobradoresService: ListaCobradoresService,
    private fb: FormBuilder) {

    console.log('este es el constructor');

  }

  ngOnInit(): void {

    this.cargarFormulario();
    this.listaUsuario();

  }

  // cerrar el menu de lista cobradores
  onCerrarMenu(usuario: String) {

    this.menuToggle.emit();
    console.log('este es el cobrador:', usuario);

  }


  listaUsuario() {

    this.listaCobradoresService.getCobradores()
      .subscribe(cobradores => {
        this.tblusuarios = cobradores;
      });

  }

  cargarFormulario() {

    this.form = new FormGroup({
      fecha: new FormControl({ value: this.fecha, disabled: false }, Validators.required),

    });
  }

  consultarPagos(usuario: string, fecha: string) {

    console.log('usuario:', usuario, 'fecha:', fecha);

    this.listaCobradoresService.obtenerCordenadas(usuario, fecha)
      .subscribe((resp: any) => {
        this.coordenadas = resp;
        localStorage.setItem('listapagos', JSON.stringify(resp));
        console.log('este es consulta pagos', this.coordenadas);
      });

  }


}

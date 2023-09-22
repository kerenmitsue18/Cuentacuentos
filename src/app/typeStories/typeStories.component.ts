import { style } from "@angular/animations";
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { TipoCuento, tipos } from "../../models/TipoCuento";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-typeStories',
  templateUrl: './typeStories.component.html',
  styleUrls: ['./typeStories.component.css']
})

export class typeStoriesComponent {

  @Input() formGroup: FormGroup;
  typeSelected: TipoCuento = {} as TipoCuento;

  tipos = tipos;


  constructor(private _formBuilder: FormBuilder){
    this.formGroup = this._formBuilder.group({});
  }

  changeSelected(elemento: any): void {
    if (this.typeSelected === elemento) {
      elemento.seleccionado = !elemento.seleccionado
    } else {
      //desenmarcar el elemento anteriormente seleccionado
      if (this.typeSelected) {
        this.typeSelected.seleccionado = false;
      }
      elemento.seleccionado = true;
      this.typeSelected = elemento;
    }
    console.log(this.typeSelected.nombre);
  }
}
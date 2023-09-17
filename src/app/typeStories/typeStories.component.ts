import { style } from "@angular/animations";
import { Component, Output, EventEmitter } from "@angular/core";
import { TipoCuento, tipos } from "src/models/TipoCuento";


@Component({
  selector: 'app-typeStories',
  templateUrl: './typeStories.component.html',
  styleUrls: ['./typeStories.component.css']
})

export class typeStoriesComponent {

  @Output() type = new EventEmitter<any>();
  typeSelected: TipoCuento = {} as TipoCuento;

  tipos = tipos;
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
    this.type.emit(this.typeSelected);
  }
}
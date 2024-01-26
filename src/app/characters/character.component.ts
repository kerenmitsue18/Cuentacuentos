
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters implements OnInit {

  @Input() formulario: FormGroup;
  @Output() arrayCharacters = new EventEmitter<Character[]>(); //emmiter del formulario
  Allcharacters: Character[] = characters;
  personajesArray: Set<string> = new Set<string>;

  maxItems = 3;

  constructor(private _formBuilder: FormBuilder) {
    this.formulario = this._formBuilder.group({});
  }

  ngOnInit() {
    const arrayCharacters = this._formBuilder.array([]); //inicializar array de formulario
    this.formulario.setControl('arrayCharacters', arrayCharacters);
  }

  /** Agregar o eliminar personajes del arreglo  */
  onCardClick(character: Character): void {
    if (this.personajesArray.size >= this.maxItems) {
      this.personajesArray.delete(character.nombre);
    } else {
      if (this.isSelected(character)) {
        this.personajesArray.delete(character.nombre);
      } else {
        this.personajesArray.add(character.nombre);
      }
    }
    this.onCheckboxChange(character)
  }

  /** Agregar o eliminar personajes del FormArray */
  onCheckboxChange(character: Character) {
    const arrayCharacters: FormArray = this.formulario.get('arrayCharacters') as FormArray;
    if (arrayCharacters.value.includes(character)) {
      arrayCharacters.removeAt(arrayCharacters.value.indexOf(character));
    }
    else if (arrayCharacters.length < this.maxItems) {
      arrayCharacters.push(new FormControl(character));
    }
    const selectedCharacters = arrayCharacters.value;
    this.arrayCharacters.emit(selectedCharacters);
  }

  isSelected(character: Character): boolean {
    return this.personajesArray.has(character.nombre);
  }

  getPersonajes(): any {
    let string_personajes = "";
    if (this.personajesArray.size == 0) {
      string_personajes = "";
    } else {
      this.personajesArray.forEach(element => {
        string_personajes += element + ", ";
      });
    }

    return string_personajes.slice(0, -2);
  }


  /** Indica la propiedad CSS que debe cambiar al seleccionar  */
  changeStyleSelected(character: Character): any {
    return {
      "selected-card": this.isSelected(character)
    }
  }

  getRandomCharacters() {
    //limpir el emmit y arreglo para asegurar que no hay seleccionados.
    this.arrayCharacters.emit([]);
    this.personajesArray.clear();

    while (this.personajesArray.size < 3) {
      const index = Math.floor(Math.random() * this.Allcharacters.length);
      this.onCardClick(this.Allcharacters[index]);
    }

    console.log(this.personajesArray)
  }


}

import { NodeWithI18n } from "@angular/compiler";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters implements OnInit  {

  @Input() formulario: FormGroup;
  @Output() arrayCharacters = new EventEmitter<Character[]>();
  Allcharacters: Character[] = characters;
  maxItems = 3;

  constructor(private _formBuilder: FormBuilder) {
    this.formulario = this._formBuilder.group({});    
  }

  ngOnInit() {
    // Inicializa el FormArray en el ngOnInit después de que se haya inicializado el formulario
    const arrayCharacters = this._formBuilder.array([]);
    this.formulario.setControl('arrayCharacters', arrayCharacters);
  }

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



 
}

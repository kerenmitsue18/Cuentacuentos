
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters implements OnInit  {

  @Input() formulario: FormGroup;
  @Output() arrayCharacters = new EventEmitter<Character[]>();
  Allcharacters: Character[] = characters;
  personajesArray: Set<string> = new Set<string>;
  
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
      this.personajesArray.delete(character.nombre);
    }
    else if (arrayCharacters.length < this.maxItems) {
      arrayCharacters.push(new FormControl(character));
      this.personajesArray.add(character.nombre);
      
    }
    const selectedCharacters = arrayCharacters.value;
    this.arrayCharacters.emit(selectedCharacters);
  }

  isSelected(character: Character): boolean {
    return this.personajesArray.has(character.nombre);
  }

  getPersonajes(): any{
    let string_personajes= "";
    if (this.personajesArray.size == 0){
      string_personajes = "";
    }else{
      this.personajesArray.forEach(element => {
        string_personajes += element + ", ";
      });
    }
   
    return string_personajes.slice(0, -2);
  }
  

  getCardClasses(character: Character): any{
    return {
      "selected-card": this.isSelected(character)
    }

  }

  getRandomCharacters() {
    this.arrayCharacters.emit([]);
    this.personajesArray.clear();
    
    for (let i = 0; i < this.maxItems; i++) {
      const index = Math.floor(Math.random() * this.Allcharacters.length);
      //this.arrayCharacters.push(new FormControl(this.Allcharacters[index]));
      this.personajesArray.add(this.Allcharacters[index].nombre);
      console.log(this.personajesArray)
    }
  }

 
}

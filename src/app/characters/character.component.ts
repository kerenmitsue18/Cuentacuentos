import { NodeWithI18n } from "@angular/compiler";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters implements OnInit{

  @Input() characterFormArray: FormArray;
  @Output() selectedCharactersChange = new EventEmitter<Character[]>();
  characters: Character[] = characters;
  maxItems = 3;

  constructor(private _formBuilder: FormBuilder) {
    this.characterFormArray = this._formBuilder.array([]);
  }


  ngOnInit(): void {
    this.characterFormArray.clear();
     // Utiliza FormBuilder.control para crear instancias de FormControl
     this.characters.forEach(() => {
      this.characterFormArray.push(this._formBuilder.control(false));
    });
  }
 
  updateSelectedCharacters(): void {
    const selectedCharacters: Character[] = [];
    const characterArray = this.characterFormArray.get('selectedItems') as FormArray;
    characterArray.controls.forEach((control, index) => {
      if (control.value) {
        selectedCharacters.push(this.characters[index]);
      }
    });
    this.selectedCharactersChange.emit(selectedCharacters);
  }

}
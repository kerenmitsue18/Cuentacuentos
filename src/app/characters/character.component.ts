import { NodeWithI18n } from "@angular/compiler";
import { Component, Input } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters {

  @Input() formGroup: FormArray;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.array([]);
  }

  characters = characters;
  maxItems = 3;
  selectedItems = new Array<Character>();

  changeSelected(e: any, character: Character) {
    if (e.target.checked) {
      if (this.selectedItems.length < this.maxItems) {
        this.selectedItems.push(character);
        this.formGroup.push(character);
      } else {
        e.preventDefault();
        e.target.checked = false;
      }
    } else {
      this.selectedItems = this.selectedItems.filter(m => m != character);
    }
    //Asignar selectedItems al FormControl en el FormGroup
    if (this.formGroup.get('selectedItems')) {
      //this.formGroup.get('selectedItems').setValue(this.selectedItems);
    console.log(this.selectedItems);
    
    }

    
  }




}
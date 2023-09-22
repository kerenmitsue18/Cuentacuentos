import { NodeWithI18n } from "@angular/compiler";
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Character, characters } from "src/models/Character";
import { FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class Characters {

  @Input() formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder){
    this.formGroup = this._formBuilder.group({});
  }

  characters = characters;
  maxItems = 3;
  selectedItems = new Array<Character>();

  changeSelected(e: any, character: Character) {
    if (e.target.checked) {
      if (this.selectedItems.length < this.maxItems) {
        this.selectedItems.push(character);
      } else {
        e.preventDefault();
        e.target.checked = false;
      }
    } else {
      this.selectedItems = this.selectedItems.filter(m => m != character);
    }

    console.log(this.selectedItems);

  }
}
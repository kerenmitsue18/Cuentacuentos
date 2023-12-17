import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { TipoCuento } from 'src/models/TipoCuento';
import { Character } from 'src/models/Character';
import { Router } from '@angular/router';
import { Prompt } from 'src/models/Prompt';
import { Topic } from 'src/models/Topic';


@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})

export class formulary {

  value: any = null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirthFormGroup: FormGroup;
  maxItems: number = 3;
  selectedCharacters: Character[] = [];

  constructor(private _formBuilder: FormBuilder, private router: Router) {

    this.firstFormGroup = this._formBuilder.group({
      typeSelected: new FormControl(null, Validators.required)
    });
    this.secondFormGroup = this._formBuilder.group({
      selectedItems: this._formBuilder.array([])
    });
    this.thirthFormGroup = this._formBuilder.group({
      topicSelected: new FormControl(null, Validators.required)
    });
  }

  // Validacion de que sean tres personajes 
  validateCharacterArray(maxItems: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedItems = control.value as Character[];
      if (selectedItems && selectedItems.length === maxItems) {
        return null; // La validación pasa si la longitud es igual a maxItems (3)
      } else {
        return { invalidLength: true }; // La validación falla si la longitud no es igual a maxItems
      }
    };
  }


  onSelectedCharactersChange(selectedCharacters: Character[]) {
    const selectedItems: FormArray = this.secondFormGroup.get('selectedItems') as FormArray;
    selectedItems.clear(); // Limpiar el FormArray antes de agregar nuevos elementos
    selectedCharacters.forEach(character => {
      selectedItems.push(this._formBuilder.control(character));
    });
  }

  getPersonajes() {
    const selectedItems: FormArray = this.secondFormGroup.get('selectedItems') as FormArray;
    return selectedItems.value as Character[]
  }


  Generate() {

    //Obtener datos del formulario 
    var tipo_cuento = this.firstFormGroup.value['typeSelected'] as TipoCuento
    var topico = this.thirthFormGroup.value['topicSelected'] as Topic
    var personajes = this.getPersonajes();
    let prompt = new Prompt(tipo_cuento, personajes, topico).getPrompt();

    this.router.navigate(['storie'], { state: { message: prompt} });

  }

}
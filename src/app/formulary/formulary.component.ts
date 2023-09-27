import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators, ValidatorFn, FormArray} from '@angular/forms';
import { Component, OnInit  } from "@angular/core";
import { TipoCuento } from 'src/models/TipoCuento';
import { Character } from 'src/models/Character';
import { Prompt } from 'src/models/Prompt';
import { typeStoriesComponent } from '../typeStories/typeStories.component';
import { Topic } from 'src/models/Topic';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})

export class formulary{

  value: any = null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormArray;
  thirthFormGroup: FormGroup;
  maxItems:number = 3;

  constructor(private _formBuilder: FormBuilder) { 

    this.firstFormGroup = this._formBuilder.group({
      typeSelected: new FormControl(null, Validators.required)
    });    
    this.secondFormGroup = this._formBuilder.array({
      characters: new FormControl([], [this.validateCharacterArray(this.maxItems)])
    });
    this.thirthFormGroup = this._formBuilder.group({
      topicSelected: new FormControl(null, Validators.required)
    });
  }

 // Validacion de que sean tres personajes 
  validateCharacterArray(maxItems: number): ValidatorFn{
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedItems = control.value as Character[];
      if (selectedItems && selectedItems.length === maxItems) {
        return null; // La validación pasa si la longitud es igual a maxItems (3)
      } else {
        return { invalidLength: true }; // La validación falla si la longitud no es igual a maxItems
      }
    };
  }


  Generate(){
    console.log("los datos requeridos son: ");
    var tipo_cuento = this.firstFormGroup.value['typeSelected'] as TipoCuento
    var topico = this.thirthFormGroup.value['topicSelected'] as Topic
    var personajes = this.secondFormGroup.value['characters'] as Character[]

    prompt: new Prompt(tipo_cuento, this.secondFormGroup.value, topico).getPrompt();
  }


}
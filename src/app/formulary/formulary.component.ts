import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit  } from "@angular/core";
import { TipoCuento } from 'src/models/TipoCuento';
import { Character } from 'src/models/Character';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})

export class formulary{

  value: any = null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 

    
    this.firstFormGroup = this._formBuilder.group({
      typeSelected: new FormControl(null, Validators.required)
    });
    
    this.secondFormGroup = this._formBuilder.group({
      characters: new FormControl([], this.validateCharacterArray())
    });
    this.thirthFormGroup = this._formBuilder.group({
      topicSelected: new FormControl(null, Validators.required)
    });


  }

 // Validacion de que sean tres personajes 
  validateCharacterArray() {

    return (control: AbstractControl): { [key: string]: any } | null => {
      const characters: Character[] = control.value;

      // Verificar que haya exactamente 3 elementos en el arreglo
      if (characters.length !== 3) {
        return { invalidLength: true };
      }

      // Verificar que cada elemento sea una instancia de Character
      for (const character of characters) {
        if (!(character instanceof Character)) {
          return { invalidCharacter: true };
        }
      }

      return null; // Validación exitosa
    };
  }

  Generate(){
    console.log("los datos requeridos son: ");
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirthFormGroup.value);
  }


}
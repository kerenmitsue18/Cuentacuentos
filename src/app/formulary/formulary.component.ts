import { FormBuilder, AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { Component } from "@angular/core";
import { TipoCuento } from 'src/models/TipoCuento';
import { Character } from 'src/models/Character';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})

export class formulary {

  value: any = null;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 

    
    this.firstFormGroup = this._formBuilder.group({
      //typeSelected: [null, this.validateTipoCuento()], //recolecta el cuento
      typeSelected: new FormControl('', this.validateTipoCuento())
    });
    
    this.secondFormGroup = this._formBuilder.group({
      //characters: [[{}, {}, {}], [this.validateCharacterArray()]]}
      characters: new FormControl('', this.validateCharacterArray)
    });


  }


  //validación de que sea un TipoCuento
  validateTipoCuento(){
    return (control: AbstractControl): { [key: string]: any } | null => {
      const tipoCuento: TipoCuento = control.value;
      if (!(tipoCuento instanceof TipoCuento)) {
        return { invalidCuento: true };
      }
      return null;
    };
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


  getType(valor: TipoCuento) {
    this.firstFormGroup.controls['typeSelected'].setValue(valor);
    console.log("Recibi el valor " + valor.nombre);
  }

  getCharacters(valor: Array<Character>) {
    this.secondFormGroup.controls['characters'].setValue(valor);
    console.log("Recibi como personajes " + valor);
  }

}
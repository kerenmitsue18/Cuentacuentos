import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component } from "@angular/core";
import { TipoCuento } from 'src/models/TipoCuento';

@Component({
    selector: 'app-formulary',
    templateUrl: './formulary.component.html',
    styleUrls: ['./formulary.component.css']
})

export class formulary {

    value: any = null;
    firstFormGroup = this._formBuilder.group({
        typeSelected: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
    
      constructor(private _formBuilder: FormBuilder) {}
    
      recibirvalor(valor: TipoCuento){
        this.firstFormGroup.controls['typeSelected'].setValue(valor.nombre);
        console.log("Recibi el valor "+ valor.nombre);
      }
}
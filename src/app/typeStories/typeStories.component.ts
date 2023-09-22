import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { tipos } from "../../models/TipoCuento";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-typeStories',
  templateUrl: './typeStories.component.html',
  styleUrls: ['./typeStories.component.css']
})

export class typeStoriesComponent {

  @Input() formGroup: FormGroup;

  tipos = tipos;

  constructor(private _formBuilder: FormBuilder){
    this.formGroup = this._formBuilder.group({});    
  }
  
}
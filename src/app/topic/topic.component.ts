import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { topics } from 'src/models/Topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {

  @Input() formGroup: FormGroup;

  topics = topics;

  constructor(private _formBuilder: FormBuilder){
    this.formGroup = this._formBuilder.group({});    
  }

  
}

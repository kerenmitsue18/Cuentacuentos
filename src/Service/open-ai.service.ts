import { Injectable } from '@angular/core';
import { response } from 'express';
import { OpenAI } from 'openai';
import { Observable, filter, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OpenAiService {
  private openai: any;

  constructor() {
    this.openai = new OpenAI({
      apiKey: environment.openaiApiKey,
      dangerouslyAllowBrowser: true
    });
  }

  getDataFromOpenAI(message: string): Observable<any> {

    return new Observable(observer => {
      this.openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        max_tokens: 2048,
        temperature: 0,
      }).then(response =>{
        observer.next(response);
        observer.complete();
      }).catch(error => observer.error(error));
    });
  }


}




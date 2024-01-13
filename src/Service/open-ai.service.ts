import { Injectable } from '@angular/core';
import { from, filter, map, Observable } from 'rxjs';
import { envionment } from './connection';
import { Configuration } from 'openai';
import { OpenAIApi } from 'openai';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  constructor() { }

  readonly configuration = new Configuration({
    apiKey: envionment.apiKey
  });

  readonly openai = new OpenAIApi(this.configuration);



  getDataFromOpenAI(text: string): Observable<object> {
    return from(
      this.openai.createCompletion({
        model: 'gpt-3.5-turbo-instruct',
        prompt: text,
        max_tokens: 2048,
        temperature: 0.7,

      })
    ).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => {
        let jsonResponse = {};

        try {
          jsonResponse = JSON.parse(data.choices[0].text);
        } catch (error) {
          console.error('Error al parsear la respuesta como JSON:', error);
        }
        return jsonResponse;
      })
    );
  }
}











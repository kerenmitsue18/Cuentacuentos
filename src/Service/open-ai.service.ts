import { Injectable } from '@angular/core';
import { OpenAIApi, Configuration } from 'openai';
import { Observable, filter, from, map } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private openai: OpenAIApi;

  readonly configuration = new Configuration({
    apiKey: environment.openaiApiKey
  });
  constructor() {
    this.openai = new OpenAIApi(this.configuration)
  }

  getDataFromOpenAI(message: string): Observable<string> {
    return from(
      this.openai.createCompletion({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        max_tokens: 2048,
        temperature: 0,
      })
    ).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => {
        let response = '';
        try {
          response = data.choices[0].text;

        } catch (error) {
          console.error('Error al parsear la respuesta como JSON:', error);
        }
        return response;  // Corregido aquí
      })
    );
  }
  
}



/*
try {
  const completion = this.openai.completions.create({
    prompt: message,
    model: "gpt-3.5-turbo-instruct",
    temperature: 0,
    max_tokens: 2048, 
    stream: false,
  
  });

  console.log(completion.choices[0].text);
  return completion.choices[0].text;
} catch (error) {
  console.log(error)
}

}

*/










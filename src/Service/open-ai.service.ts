import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { Observable } from 'rxjs';
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
        temperature: 0.5,
        //response_format: { "type":"json_object" }
      }).then(response => {
        observer.next(response.choices[0].text);
        observer.complete();
      }).catch(error => observer.error(error));
    });
  }
  

  /*
  async getSpeechOpenAI(message: string): Promise<any | undefined> {
    
    try {
      const response = await this.openai.audio.speech.create({
        model: "tts-1-hd",
        voice: "alloy",
        input: message,
      });

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      console.log("URL segura del audio: ", url);
      return url;
      
    } catch (error) {
      console.error('Error obtenido en el audio', error);
    }

  }
  */
  
};







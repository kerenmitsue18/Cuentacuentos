import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OpenAiService } from "src/Service/open-ai.service";
import { Location } from '@angular/common';
import { Character, characters } from "src/models/Character";




@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})



export class Stories implements OnInit {


  message: any = "";
  resultadoJSON: any = "";
  storie: string = "";
  chatgpt: OpenAiService = new OpenAiService;
  characters = characters;
  personajes: any = [];
  urlImages: any = [];


  constructor(private location: Location, private router: Router) {
    const state: any = this.location.getState();
    this.message = state.message;
  }

  ngOnInit() {
    this.generate();
  }

  generate(){
    this.chatgpt.getDataFromOpenAI(this.message).subscribe(data => {
      //this.storie = data

      //this.storie = JSON.parse(data);
      //this.resultadoJSON = JSON.parse(this.storie);
      //this.personajes = this.resultadoJSON.personajes as [];
      //console.log(this.resultadoJSON)
      console.log("Título:", data);
      //console.log("Personajes:", this.storie.personajes);
      //console.log("Contenido:", this.storie.contenido);
      this.getCharacter();
    });
  }

  getCharacter(): void {
    for (let per of this.personajes) {
      for (let chara of characters) {
        if (chara.nombre == per) {
          console.log(chara.nombre + " " + per);
          this.urlImages.push(chara.urlImage);
        }
      }
    }

    console.log(this.urlImages);

  }

  back(){
    this.router.navigate(['formulary']);
  }


}
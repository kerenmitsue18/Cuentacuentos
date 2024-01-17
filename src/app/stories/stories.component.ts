import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { OpenAiService } from "src/Service/open-ai.service";
import { Location } from '@angular/common';
import { characters } from "src/models/Character";




@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})



export class Stories implements OnInit {


  message: any = "";
  storie: string = "";
  title: string = "";
  chatgpt: OpenAiService = new OpenAiService;
  characters = characters;
  personajes: any = [];


  constructor(private location: Location, private router: Router) {
    const state: any = this.location.getState();
    this.message = state.message;
  }

  ngOnInit() {
    this.generate();
  }

  generate() {
    this.chatgpt.getDataFromOpenAI(this.message).subscribe(data => {
      var storie = data.trim();
      console.log(storie)
      try {
        var formattedData = storie.replace(/^\s+|\s+$/g, "");
        formattedData = formattedData.trim();
        console.log(formattedData);
        this.extraerTituloYPersonajes(formattedData);
      } catch (error) {
        console.error('Error al parsear JSON:', error);
      }

     
    });
  }


  getCharacter(personajes: any[]): void {
    let auxcharacters: any =[]
    for (let per of personajes) {
      for (let chara of characters) {
        per = per.replace(" ", "")
        console.log(per)
        if (chara.nombre == per) {
          auxcharacters.push(chara)
          console.log(auxcharacters)
        }
      }
    }
    this.personajes = auxcharacters;
    
  }


  extraerTituloYPersonajes(texto: string): void {
    var tituloInicio = texto.indexOf('"titulo":') + '"titulo":'.length;
    var tituloFin = texto.indexOf(', "personajes":');
    this.title = texto.substring(tituloInicio, tituloFin).trim().replace(/"/g, '');
    console.log(this.title)

    var contenidoInicio = texto.indexOf('"contenido":') + '"contenido":'.length;
    var contenidoFin = texto.indexOf('"}');
    this.storie = texto.substring(contenidoInicio, contenidoFin).trim().replace(/"/g, '');
    
    var personajesInicio = texto.indexOf('"personajes": [') + '"personajes": ['.length;
    var personajesFin = texto.indexOf('], "contenido":');
    var personajes = texto.substring(personajesInicio, personajesFin).trim().replace(/"/g, '');
    const per = personajes.split(",")
    this.getCharacter(per);
  }


  back() {
    this.router.navigate(['formulary']);
  }


}
import { Component, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { OpenAiService } from "src/Service/open-ai.service";
import { Location } from '@angular/common';
import { characters } from "src/models/Character";
//import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})


export class Stories implements OnInit {


  message: any = "";
  storie: string = "";
  title: string = "";
  characters = characters;
  personajes: any = [];
  //audioUrl: SafeResourceUrl | undefined;
  isPlaying: boolean = false;


  constructor(private location: Location, private router: Router,
     private openAiService: OpenAiService, 
     //private sanitizer: DomSanitizer,
    ) {
    const state: any = this.location.getState();
    this.message = state.message;
  }

  ngOnInit() {
    this.generate();
  }
  
  generate() {
    /*
    this.openAiService.getDataFromOpenAI(this.message).subscribe(data => {
      var storie = data.trim();
      console.log(storie);
      try {
        var formattedData = storie.replace(/^\s+|\s+$/g, "");
        formattedData = formattedData.trim();
        this.extraerTituloYPersonajes(formattedData);
      } catch (error) {
        console.error('Error al parsear JSON:', error);
      }
    });
    */
    this.title = "El Festival de la Tolerancia";
    this.storie = "En un pintoresco pueblo mexicano, Fernanda, una niña valiente con discapacidad visual, organizó el primer Festival de la Tolerancia. Invitó a su amigo Andrés, quien a pesar de su discapacidad en una mano, irradiaba alegría y optimismo. También invitó a Omar, un niño con ceguera, conocido por su sonrisa luminosa. Juntos, prepararon el festival, decorando el pueblo con mensajes de inclusión y respeto. Durante el evento, niños y adultos compartieron historias de superación y solidaridad. Fernanda recorrió el festival con su bastón, guiando a Omar y Andrés con la voz llena de determinación. Andrés ayudó a decorar con sus habilidades creativas, mientras Omar compartía sus conocimientos sobre la importancia del braille. Al final del día, el pueblo brillaba con la diversidad y la aceptación. El Festival de la Tolerancia se convirtió en un recordatorio de que juntos, podemos superar cualquier barrera y construir un mundo donde todos sean bienvenidos.";
    this.getCharacter(["Fernanda", "Andrés", "Omar"])
  }
  

  // async speech() {

  //   const audioPlayer = document.querySelector('#audioPlayer') as HTMLAudioElement;
  //   let message = this.title + " " + this.storie;
  //   let message = this.message.replace("<br>", "")
  //   let message = "Había una vez en un pequeño pueblo de México, tres mujeres que se destacaban por su sabiduría y" +
  //     "dedicación a sus oficios. Sofia, una curandera de piel cálida y arrugas suaves, era conocida por sus habilidades" +
  //     "para sanar con hierbas y remedios naturales. Isabella, una animalista de tez morena y ojos compasivos, luchaba por los " +
  //     "derechos de los animales y su bienestar. Y Juanita, una artesana de ojos brillantes y manos pacientes, creaba hermosas piezas de artesanía";

  //   if (this.audioUrl == null) { //No se ha generado el audio
  //     try{
  //       this.audioUrl = await this.openAiService.getSpeechOpenAI(message);
  //       Asignar la URL y el título al elemento <audio>
  //       audioPlayer.load();
  //       audioPlayer.play();

  //     }catch(error){
  //       console.error("Ocurrio algo mal", error);
  //     }
  //   }

  //   if (this.isPlaying) {
  //     audioPlayer.pause();
  //   } else {
  //     audioPlayer.play();
  //   }
  //   this.isPlaying = !this.isPlaying;

  // }
  // async speech(){
  //   console.log("Aqui")
  //   let message = "Había una vez en un pequeño pueblo de México, tres mujeres que se destacaban por su sabiduría y" +
  //   "dedicación a sus oficios. Sofia, una curandera de piel cálida y arrugas suaves, era conocida por sus habilidades" +
  //   "para sanar con hierbas y remedios naturales. Isabella, una animalista de tez morena y ojos compasivos, luchaba por los " +
  //   "derechos de los animales y su bienestar. Y Juanita, una artesana de ojos brillantes y manos pacientes, creaba hermosas piezas de artesanía";
  //   const outFile = 'cuento.pm3'
  //   const outputFile = this.ttsService.sythesize(message, outFile);

  // }
   

  getCharacter(personajes: any[]): void {
    let auxcharacters: any = []
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
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
    console.log(this.message)
    this.title = "El Misterio del Mural de la Tolerancia";
    this.storie = "En el corazón de un pequeño pueblo mexicano, la escuela local era conocida por un hermoso mural que representaba la historia y los valores de la comunidad. Sin embargo, con el tiempo, el mural se había desgastado y muchos de sus detalles se habían perdido. La maestra decidió que era hora de restaurarlo y convocó a todos los alumnos para ayudar. Fernanda y Omar, dos amigos inseparables, fueron los primeros en ofrecerse.\n\nFernanda, siempre curiosa, sugirió que invitaran al historiador Diego para que les contara la historia detrás del mural. Diego aceptó encantado y, una tarde, se reunió con los niños en el patio de la escuela. Con su voz cálida, comenzó a narrar:\n\n\"Este mural fue pintado hace muchos años por un artista local que quería representar la diversidad y la unión de nuestro pueblo. Cada figura y cada color tiene un significado especial.\" Mientras Diego hablaba, Fernanda tocaba el mural con sus manos, intentando sentir cada detalle, mientras Omar escuchaba atentamente, imaginando las imágenes en su mente.Diego continuó: \"El artista también quería enseñar a todos la importancia de la tolerancia, de cómo podemos vivir en armonía a pesar de nuestras diferencias.\" Fernanda y Omar, inspirados por la historia, decidieron que querían añadir algo nuevo al mural, algo que representara su generación.\n\nLos niños se dividieron en grupos para trabajar en diferentes partes del mural. Fernanda y Omar lideraron su equipo con entusiasmo. Fernanda, con su habilidad para visualizar colores vibrantes, sugirió un arco iris que abarcara todo el mural, simbolizando la diversidad. Omar, utilizando su creatividad, propuso incluir figuras que representaran a personas con diferentes habilidades, todas interactuando y colaborando.\n\nMientras trabajaban, algunos niños comenzaron a discutir sobre los colores y las figuras. Fue entonces cuando Fernanda y Omar recordaron las palabras de Diego sobre la tolerancia. \"Recuerden que cada uno de nosotros tiene una visión única y eso es lo que hace especial nuestro mural,\" dijo Fernanda. \"Debemos aprender a escuchar y respetar las ideas de los demás,\" agregó Omar.\n\nCon paciencia y respeto, los niños lograron integrar todas sus ideas en un diseño armonioso. Cuando el mural estuvo terminado, Diego lo observó con orgullo. \"Han hecho un trabajo maravilloso. Este mural no solo es hermoso, sino que también refleja los valores de nuestra comunidad.\"\n\nEl mural renovado se convirtió en un símbolo de la escuela y del pueblo, recordando a todos la importancia de la tolerancia y la inclusión. Cada vez que los niños pasaban frente a él, se sentían orgullosos de su trabajo y del mensaje que transmitía. Así, Fernanda, Omar y sus amigos demostraron que, trabajando juntos y respetando las diferencias, se pueden lograr cosas increíbles.";
    this.getCharacter(["Omar", "Fernanda", "Diego"])
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
        if (chara.nombre == per) {
          auxcharacters.push(chara)
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
import { Character } from "./Character";
import { TipoCuento } from "./TipoCuento";
import { Topic } from "./Topic";

export class Prompt{

    tipo_cuento: TipoCuento;
    characters: Character[];
    topic: Topic;
    prompt: string = "";
    characters_string: string = "";
    
    constructor(tipo_cuento: TipoCuento, characters: Character[], topic: Topic){
        this.tipo_cuento = tipo_cuento;
        this.characters = characters;
        this.topic = topic;
    }

    getPrompt(){
        this.prompt = "Crea un " + this.tipo_cuento.nombre + " de " + this.tipo_cuento.descripcion
         +  " acerca de " + this.topic.nombre + 
         " en el que participen los siguientes personajes: \n" + this.getCharacters();
        console.log(this.prompt);
        
    }

    getCharacters(){
        
        for(let i=0; this.characters.length; i++){
            this.characters_string + " " + this.characters[i].nombre + "un " + 
            this.characters[i].oficio + ". Que tiene las siguientes características físicas: \n" + this.characters[i].descripcion_fisica +
            "Su personalidad es: " + this.characters[i].descripcion_personalidad + "\n";


        }
    }

}

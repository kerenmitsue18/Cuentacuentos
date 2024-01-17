import { Character } from "./Character";
import { TipoCuento } from "./TipoCuento";
import { Topic } from "./Topic";

export class Prompt {

    tipo_cuento: TipoCuento;
    characters: Character[] = [];
    topic: Topic;
    prompt: string = "";

    constructor(tipo_cuento: TipoCuento, characters: Character[], topic: Topic) {
        this.tipo_cuento = tipo_cuento;
        this.characters = characters;
        this.topic = topic;
    }

    getPrompt(): string {
        this.prompt = `Eres un cuentacuentos creativo que inculca los valores en sus cuentos. 
            La respuesta debe ser un objeto JSON válido sin espacios extra y sin saltos de linea, en el contenido no coloques \n , con la siguiente estructura: {"titulo": string, "personajes": [solo nombre], "contenido": string}
            Crea un ${this.tipo_cuento.nombre} de ${this.tipo_cuento.descripcion} acerca de ${this.topic.nombre} en el que participen los siguientes personajes:
            ${this.getCharacters()} utiliza la siguiente información para generar la historia`;
        return this.prompt;
    }
    

    getCharacters(): String {
        var characters_string: string = "";
        for (const character of this.characters) {
            characters_string += " " + character.nombre + " un " +
                character.oficio + ". \nQue tiene las siguientes características físicas: \n" + character.descripcion_fisica +
                "\nSu personalidad es: \n" + character.descripcion_personalidad + "\n";
        }
        return characters_string
    }

}

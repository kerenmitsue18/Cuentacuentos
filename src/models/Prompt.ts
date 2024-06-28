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
        this.prompt = `Eres un cuentacuentos creativo que inculca valores en sus cuentos para niños de
        latinoamérica, los cuentos son divertidos, intersantes y originales, y a veces misteriosos. La respuesta debe ser en formato JSON con la siguiente estructura:  {"titulo": string, "personajes": [solo nombre], "contenido": string}
            Crea un ${this.tipo_cuento.nombre} de ${this.tipo_cuento.descripcion} sobre el tema ${this.topic.nombre} en el que participen los siguientes personajes:
            ${this.getCharacters()}. \n 
            
        Consideraciones para el cuento: 

        - El cuento debe ser original, por favor, esfuérzate en que no se repitan los cuentos. 
        - Si hay personajes con alguna discapacidad, asegúrate de que sean los protagonistas. Enfoca la atención en ellos para que la trama del cuento resalte el valor de ${this.topic.nombre} hacia los personajes con discapacidad.
        - Evita colocar en el cuento la descripción física y de personalidad de los personajes,solo menciona implicitamente cual es la discapacidad del personaje, si así lo tuvieran.
        - El contexto en el que se desarrollan los personajes debe ser ambientado en la nacionalidad del protagonista o los protagonistas, ya sean lugares turísticos, pueblos, costumbres, cultura, ideologías, economia, etc.Se especifico en el lugar en el que se encuentran, puedes mencionar nombre de los lugares. 

        - Puedes elegir el estilo narrativo entre monólogo, narración en segunda persona, narración epistolar, narración como testigo, narración omnisciente,etc. además de cambiar la atmósfera, el ambiente y el simbolismo; la idea es crear un cuento original, creativo y único o inédito que inculque  valores a los niños.
        - Es importante que los cuentos no sean repetidos en cada una de las iteraciones que se realicen, debe de cambiar el contexto, ambiente, el nombre del cuento, su trama y la forma de narración.
        - Es importante que el cuento deje un mensaje o impacto sobre los valores.  Este mensaje no debe ser explícito en el cuento, debe ser tratado con una intención didáctica (el niño debe ser capaz de comprender el mensaje o valores a lo largo del desarrollo del cuento).
`;
        return this.prompt;
    }
    

    getCharacters(): String {
        var characters_string: string = "";
        for (const character of this.characters) {
            characters_string += " " + character.nombre + " un " +
                character.oficio + " de nacionalidad " + character.nacionalidad + ". \nQue tiene las siguientes características físicas: \n" + character.descripcion_fisica +
                "\nSu personalidad es: \n" + character.descripcion_personalidad + "\n" ;
        }
        return characters_string
    }

}

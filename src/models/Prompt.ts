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
        latinoamérica, los cuentos son divertidos e intersantes, y a veces misteriosos. La respuesta debe ser en formato JSON con la siguiente estructura:  {"titulo": string, "personajes": [solo nombre], "contenido": string}
            Crea un ${this.tipo_cuento.nombre} de ${this.tipo_cuento.descripcion} sobre el tema ${this.topic.nombre} en el que participen los siguientes personajes:
            ${this.getCharacters()} Evita colocar en el cuento los datos que ya se han mencionado en el prompt,
            estos son solo una idea de como son los personajes, no es necesario colocar sus
            características de los personajes. Puedes elegir el estilo narrativo entre monólogo, narración en segunda persona,
            narración epistolar, narración como testigo, narración omnisciente,etc,además de
            cambiar la atmósfera, el ambiente y el simbolismo; la idea es crear un cuento
            original, creativo y único o inédito que inculque  valores a los niños.        
            Es importante que los cuentos no sean repetidos en cada una de las iteraciones
            que se realicen.           
            Es importante que el cuento deje un mensaje o impacto sobre los valores. 
            Este mensaje no debe ser explícito en el cuento, debe ser tratado con una
            intención didáctica. (el niño debe ser capaz de comprender el mensaje o valores
            a lo largo del desarrollo del cuento).
            El contexto en el que se desenvuelven los personajes, debe ser variante.
            Si te es útil, puedes especificar lugares de latinoamérica.`;
            console.log(this.prompt);
        return this.prompt;
    }
    

    getCharacters(): String {
        var characters_string: string = "";
        for (const character of this.characters) {
            characters_string += " " + character.nombre + " un " +
                character.oficio + ". \nQue tiene las siguientes características físicas: \n" + character.descripcion_fisica +
                "\nSu personalidad es: \n" + character.descripcion_personalidad + "\n" +
                "Evita colocar en el cuento datos que ya se han mencionado en el prompt, estos son solo una idea de como son los personajes, no es necesario colocar sus características.";
        }
        return characters_string
    }

}

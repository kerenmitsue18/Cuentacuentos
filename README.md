# IncluAventuras: Cuentacuentos basado en IA generativa para promover la inclusión de personas con discapacidades


## Resumen
Se presenta el diseño completo y la evaluación de un sistema cuentacuentos digital, destinado a niños de entre 4 y 6 años en Latinoamérica. Este sistema está basado en inteligencia artificial generativa. Se realizaron pruebas que abarcaron el funcionamiento del sistema, la diversidad de contenidos, los tiempos de generación, la evaluación
de voz, entonación, velocidad y calidad de pronunciación. El sistema crea historias diferentes, que promueven valores en los niños de habla hispana, fomentando la importancia de la inclusión de personas con capacidades diferentes. Cabe destacar que en ningún cuento se encontró contenido no apto para niños.
> Keywords: ChatGPT, Cuenta cuentos, Discapacidad, IA Generativa, Inclusión

## Objetivos
1. Inculcar en la niñez los valores de respeto, tolerancia y empatía hacia personas con discapacidad a través de historias.
2. Promover las habilidades de lectura y comprensión en niños de habla hispana.

## Contribuciones
- Alternativa para abordar el desafío de fomentar la inclusión de personas con discapacidades en América Latina, mediante una solución tecnológica del estado del arte.
- Diseño completo de un sistema de software basado en IAG orientado a generar y contar historias para niñas y niños de habla hispana.
- Diseño de un ***prompt*** especialmente diseñado para generar distintos cuentos que promueven valores de empatía y respeto hacia personas con discapacidad.
- Evaluación del sistema en cuanto a la diversidad de historias generadas.
- Evaluación de la entonación, velocidad y calidad de pronunciación en las narrativas de los cuentos.
- Proporcionar el ***código fuente*** y los archivos complementarios para fines no comerciales.

## Metodología aplicada


A continuación se muestra un resumen gráfico de la metodología empleada. 

<img src="https://github.com/kerenmitsue18/Cuentacuentos/blob/master/Diagrama_cuentacuentos.png" alt="Metodología aplicada" width="550px" align="center">

El sistema cuenta con una estructura general de un prompt adecuado que orienta al sistema hacia la generación de resultados coherentes. Por lo que se definieron tres elementos fundamentales de dicha estructura, que el usuario puede personalizar. Los parámetros son los siguientes: 
| Parámetro | Descripción                    |
| ------------- | ------------------------------ |
| `Tipo de cuento`      | Se refiere a la extensión del cuento. Este puede ser microcuento (menos de 200 palabras), cuento flash (200 - 700 palabras)  o cuento corto (700 a 2,000 palabras)     |
| `Personajes`   |  Se refiere a las características físicas y de personalidad de cada uno de los personajes. Cada historis puede tener un máximo de tres personajes.  |
| `Tema`   | Se trata del contexto o tema en el que se desarrollará la historia. Puedes elegir entre respeto, tolerancia, equidad y cuidado del medio ambiente.    |

Una vez seleccionados los parámetros, el sistema genera el prompt correspondiente para ingresarlo a la IA generativa. 


```javascript
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
        return this.prompt;
    }

    getCharacters(): String {
        var characters_string: string = "";
        for (const character of this.characters) {
            characters_string += " " + character.nombre + " un " +
                character.oficio + ". \nQue tiene las siguientes características físicas: \n" + character.descripcion_fisica +
                "\nSu personalidad es: \n" + character.descripcion_personalidad + "\n" +
                "Evita colocar en el cuento datos que ya se han mencionado en el prompt, estos son solo una idea de como son los personajes, no es necesario colocar sus     características.";
        }
        return characters_string
    }


```

Para la generación de las historias se utilizó el chat completions de openAI, usando las siguiente configuración de parámetros:
| Parámetro | Valor asignado                    |
| ------------- | ------------------------------ |
| Mensaje      | Es el prompt anteriormente planteado     |
| Modelo   | Modelo gpt-3.5-turbo-instruct.   |
| Numero de tokens   | 2048 tokens  |
| Temperatura  | 0.5  |

El chat completions devuelve el contenido generado en formato JSON. La respuesta obtenida es procesada por la aplicación, extrayendo los contenidos y mostrándolos en la interfaz de usuario (bloque 7 de la arquitectura). Además de mostrar el cuento en forma te texto, el sistema desarrollado permite narrar las historias con el uso de voces sintéticas obtenidas igualmente de openAI. 

Para implementar la voz sintética, se implementó el TTS (Text to Speech) de OpenAI (Bloque 6A de la arquitectura). 

## Resultados y discusión

### Prueba de funcionamiento 
La prueba de funconamiento del sistema consistió en ingresar parámetros elegidos por el usuario. Para propósitos demostrativos se seleccionó un tipo de cuento ***microcuento***; se eligieron 3 personajes: ***Andrés*** (niño con discapacidad en una mano), ***Fernanda*** (niña con discapacidad visual) y ***Omar*** (Un niño con ceguera), finalmente se eligió el tema de la ***tolerancia***. La voz con la que se reproduce el cuento es con la voz ***fable*** de openAI. 
Puedes acceder a ver el ejemplo en el video [Ejemplo del cuento](https://youtu.be/KxRVmPbGPlc)

### Medición de similitudes entre cuentos 
Para medir la diversidad de contenidos en los cuentos generados, es decir, que tan diferentes son las historias que genera el sistema; se realizaron dos experimentos.
- **Primer experimento:** Mantener invariables al tipo de cuento, personajes y tema, generando así 30 cuentos con la misma temática.
- **Segundo experimento:** 

A partir de los cuentos generados, se calcularon todos los índices de Jaccard entre pares de cuentos, tanto del primer como del segundo experimento. Como se observa graficamente a continuación:

<img src="https://github.com/kerenmitsue18/Cuentacuentos/blob/master/resultados_sistemas/Matriz.png" alt="Metodología aplicada" width="550px" align="center">

> Indice de Jaccard del primer experimento

<img src="https://github.com/kerenmitsue18/Cuentacuentos/blob/master/resultados_sistemas/MatrizJaccard2.png" alt="Metodología aplicada" width="550px" align="center">

> Indice de Jaccard del segundo experimento


### Análisis de las voces en la reproducción de cuentos
Para comparar las diversas voces proprocionadas por OpenAI, se analizaron las siguientes características: el tiempo de generación del cuento, el tono de voz, la variación de entonación, la velocidad del habla y la claridad de pronunciación.

#### Tiempos de generación
|   Descripción   |    Micro cuento   |    Cuento Flash     |    Cuento Corto   |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| Creación (prom) |  9.31s  | 11.82s    |    12.49s    |
| Creación (std)  |  1.03s  | 2.41s     |    1.82s     |
| Duración (prom) |  58s    | 66s       |    74s       |
| Duración (std)  |  13s    | 10s       |    14s       |

#### Evaluación de tono de voz

| Voz sintética | Descripción                    |
| ------------- | ------------------------------ |
| Alloy   | Emite un tono amigable.    |
| Fable   | Se caracteriza por una tonalidad seria, sin generar un sentimiento en particular.   |
| Echo   | Presenta una tonalidad seria con un enfoque narrativo.  |
| Onyx  | Su tono de voz es grave y pausado, ideal para la narración de cuentos.  |
| Nova  | Aunque posee una voz amigable, se percibe poco natural.  |
| Shimmer  | Presenta una voz amigable y natural, ideal para la narración de cuentos.   |


#### Variación de entonación

| Voz sintética | Descripción                    |
| ------------- | ------------------------------ |
| Alloy   | Presenta una entonación constante y precisa, respetando los puntos y comas; por lo que, contribuye a una lectura agradable y fluida.    |
| Fable   | Mantiene una entonación constante y adecuada en cuanto a la puntuación.   |
| Echo   | Se presenta una entonación constante y adecuada en cuanto a la puntuación, sin embargo, las pausas no son muy notorias, lo que afecta la claridad y la narrativa del cuento.  |
| Onyx  | Realiza una buena entonación, ya que realiza pausas correctamente, lo que mejora la narrativa del cuento.  |
| Nova  | No tiene una buena entonación, realiza una narración lineal  |
| Shimmer  | Proporciona una buena entonación en los párrafos, a pesar de no tener buenas pausas en la narración.   |

#### Velocidad del habla

| Voz sintética | Descripción                    |
| ------------- | ------------------------------ |
| Alloy   | Gracias a que tiene una velocidad constante, mantiene una audición clara y comprensible.    |
| Fable   | Se caracteriza por tener una velocidad rápida, a pesar de contar con pausas durante la narración, la rápidez le resta expresividad narrativa al audio.   |
| Echo   | La velocidad es constante, solo que no realiza pausas tan largas que parace una simple lectura, más no un cuento.  |
| Onyx  | La velocidad es constante, y tranquila, lo que se plantea que es la voz más adecuada para la narración de cuentos e historias.  |
| Nova  | Muestra un ritmo variable, con momentos de rápida pronunciación seguido de momentos más lentos.  |
| Shimmer  | Mantiene una velocidad constante a lo largo del audio.    |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Publicaciones


> Elaborado por: Keren Mitsue Ramírez Vergara


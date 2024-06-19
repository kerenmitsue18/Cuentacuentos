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
        latinoamérica, los cuentos son divertidos, intersantes y originales, y a veces misteriosos. La respuesta debe ser en formato JSON con la siguiente estructura:  {"titulo": string, "personajes": [solo nombre], "contenido": string}
            Crea un ${this.tipo_cuento.nombre} de ${this.tipo_cuento.descripcion} sobre el tema ${this.topic.nombre} en el que participen los siguientes personajes:
            ${this.getCharacters()}. \n 
            
        Consideraciones para el cuento: 

        - El cuento debe ser original, por favor, esfuérzate en que no se repitan los cuentas. 
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

El chat completions devuelve el contenido generado en formato JSON. La respuesta obtenida es procesada por la aplicación, extrayendo los contenidos y mostrándolos en la interfaz de usuario (bloque 7 de la arquitectura). Además de mostrar el cuento en forma te texto, el sistema desarrollado permite narrar las historias con el uso de voces sintéticas obtenidas igualmente de openAI. Para implementar la voz sintética, se implementó el TTS (Text to Speech) de OpenAI (Bloque 6A de la arquitectura). 


## Resultados y discusión

### Prueba de funcionamiento 
se realizó una prueba de funconamiento del sistema, donde el usuario ingresó parámetros personalizados. Para propósitos demostrativos se seleccionó un tipo de cuento ***microcuento***; se eligieron 3 personajes: ***Andrés*** (niño con discapacidad en una mano), ***Fernanda*** (niña con discapacidad visual) y ***Omar*** (Un niño con ceguera), finalmente se eligió el tema de la ***tolerancia***. La voz con la que se reproduce el cuento es con la voz ***fable*** de openAI. 
Puedes acceder a ver el ejemplo en el video [Ejemplo del cuento](https://youtu.be/KxRVmPbGPlc)

Además, hay otros ejemplos disponibles para visualizar, como
[El viaje de tita](https://youtu.be/LJlufk5BuFs)
[El juego de las diferencias](https://youtu.be/Na1OakPW_JE)
[El respeto en la cancha](https://youtu.be/xcFAF3wXioU)

### Medición de similitudes entre cuentos 
Para medir la diversidad de contenidos en los cuentos generados, es decir, que tan diferentes son las historias que genera el sistema; se realizaron dos experimentos.
- **Primer experimento:** Mantener invariables al tipo de cuento, personajes y tema, generando así 30 cuentos con la misma temática.
- **Segundo experimento:** Colocar el tipo de cuento, personajes y tema de manera aleatoria, generando así 30 cuentos con diferentes parámetros.

Los resultados de cada uno de los experimentos los puedes consultar en la carpeta ***resultados_sistemas***.
[Cuentos generados del primer experimento ](https://github.com/kerenmitsue18/Cuentacuentos/tree/master/resultados_sistemas/audios_cuento_demostrativo).
[Cuentos generados del segundo experimento ](https://github.com/kerenmitsue18/Cuentacuentos/tree/master/resultados_sistemas/cuentos_segundo_experimento).
[Audios generados del cuento demostrativo (6 voces) ](https://github.com/kerenmitsue18/Cuentacuentos/tree/master/resultados_sistemas/audios_primer_experimento).
[Audios generados del segundo experimento ](https://github.com/kerenmitsue18/Cuentacuentos/tree/master/resultados_sistemas/audios_segundo_experimento).


A partir de los cuentos generados, se calcularon todos los índices de Jaccard entre pares de cuentos, tanto del primer como del segundo experimento. Como se observa graficamente a continuación:

<img src="https://github.com/kerenmitsue18/Cuentacuentos/blob/master/resultados_sistemas/Matriz.png" alt="Metodología aplicada" width="550px" align="center">

> Indice de Jaccard del primer experimento

<img src="https://github.com/kerenmitsue18/Cuentacuentos/blob/master/resultados_sistemas/MatrizJaccard2.png" alt="Metodología aplicada" width="550px" align="center">

> Indice de Jaccard del segundo experimento


### Análisis de las voces en la reproducción de cuentos
Para comparar las diversas voces proprocionadas por OpenAI, se analizaron las siguientes características: el tiempo de generación del cuento, el tono de voz, la variación de entonación, la velocidad del habla y la claridad de pronunciación; los datos que se utilizaron para analizar la voz fueron los contenidos de los 30 cuentos que se eligieron aleatoriamente (segundo experimento). En total, se obtuvieron 8 archivos de audio para historias de tipo micro cuento, 11 para cuento flash y 11 para cuento corto.

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

#### Claridad de pronunciación

| Voz sintética | Descripción                    |
| ------------- | ------------------------------ |
| Alloy   | La pronunciación de las palabras contiene un tono extranjero, arrastrando ciertos sonidos. específiamente en palabras como "Respetar", "perspectiva" y "Ximena", que no se pronucian correctamente en español.    |
| Fable   | Se detectaron palabras que no se pronuncian correctamente en español, como "Isabella" y "respeto", e incluso hubo casos en los que no se terminaron de decir algunas palabras, como "igualdad"  |
| Echo   | Se observaron errores de pronunciación en palabras en español como "hábil", "Ximena", "rumoreaba", "baille", "barrera" y "Sofía". A pesar de estos errores, esta voz no suena tan extranjera como otras.  |
| Onyx  | La pronunciación de las palabras es clara y precisa,unque presenta dificultades con algunos nombres de personajes como "Isabella" y "Ximena". |
| Nova  | La pronunciación no es precisa, con errores notables en palabras, especialmente en los nombres de los personajes. Además, de los 5 cuentos analizados con esta voz, 4 cambiaron de idioma durante la reproducción.  |
| Shimmer  | Esta voz en español tiene una pronunciación clara y precisa, aunque presenta dificultades con algunos nombres de personajes como "Isabella" y "Ximena".    |

## Conclusiones
La IAG está siendo usada actualmente como una herramienta valiosa para atender una plétora de problemáticas de diversos tipos. Entre estos desafíos, la discapacidad es una de las problemáticas más significativas en América Latina y el Caribe, afectando a más de 85 millones de personas en la región. En este artículo, se propuso el diseño de un sistema de generación de cuentos (cuenta cuentos) para niños de habla hispana basado en IAG. El sistema permite la creación de cuentos personalizados en los que participan personajes infantiles con algún tipo de discapacidad.

La inclusión de personajes con discapacidades en las historias es un factor crucial que contribuye significativamente a promover la diversidad y la igualdad desde una edad temprana. Aprovechando las capacidades de la IAG sobre la que se basa el sistema, se generan cuentos únicos en cada solicitud, incluso con los mismos parámetros, lo que proporciona una experiencia variada y enriquecedora en cada uso. En las diferentes pruebas realizadas al sistema, se realizó una comparación cuantitativa de la diversidad de las historias generadas, aplicando para ello el criterio del índice de Jaccard. Los valores encontrados confirman la poca similitud entre los cuentos analizados.

Además se evaluó la entonación, velocidad y calidad de pronunciación de las voces sintéticas, encontrándose que todavía existen áreas de oportunidad en la tecnología del estado del arte para la generación de audio en la narrativa de las historias.

A pesar de los desafíos presentes, como el consumo de recursos durante el servicio de conversión de texto a voz, la falta de naturalidad en la voz, los errores en la pronunciación y la latencia del sistema, se puede afirmar que la propuesta presentada es novedosa y podría ser útil para los educadores que buscan implementar herramientas de educación inclusiva en sus aulas.

Actualmente, se continúa trabajando en el desarrollo de otros sistemas que ayuden a cerrar las brechas y mejorar la accesibilidad y la calidad de vida para las personas con discapacidad.

## Implementación

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

- Ejecute `ng serve` para un servidor de desarrollo. Navigue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archvosentes.
- Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Publicaciones

Cuentacuentos basado en IA generativa para promover la inclusión de personas con discapacidades.

> Elaborado por: Keren Mitsue Ramírez Vergara, Asdrúbal López-Chau, Rafael Rojas Hernández


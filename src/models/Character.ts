export class Character {

    id: string;
    nombre: string;
    nacionalidad: string;
    oficio: string;
    descripcion_fisica: string;
    descripcion_personalidad: string;
    urlImage: string;
    seleccionado: boolean;

    constructor(id: string, nombre: string, nacionadidad: string, oficio: string, descripcion_fisica: string, descripcion_personalidad: string, urlImage: string, seleccionado: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionadidad;
        this.oficio = oficio;
        this.descripcion_fisica = descripcion_fisica;
        this.descripcion_personalidad = descripcion_personalidad;
        this.seleccionado = seleccionado;
        this.urlImage = urlImage;
    }

}


export const characters: Character[] = [
    new Character("6", 'Ricardo','Colombiana', 'Pescador',
    'El niño pescador colombiano tiene la piel bronceada. Su cabello es corto y oscuro alborotado por el viento marino. Sus ojos son grandes y de un color café profundo.  Su rostro está marcado por el sol y pecas. Viste con una camiseta sin mangas y unos pantalones cortos.  A menudo lleva puesta una gorra o un sombrero de paja para protegerse del sol mientras navega en su pequeña embarcación o lanza sus redes al mar.',
    'Aventurero y apasionado. Paciente y observador. Conexión con la naturaleza. Reflexivo y humilde. Hábil con las técnicas de pesca aprendidas de generaciones pasadas, mostrando destreza y paciencia para capturar peces y mariscos frescos. Habilidad para navegar y pescar',
    '../assets/src/ricardo.jpg',
    false),


    new Character("10", 'Fernanda','Ecuatoriana', 'Niña sorda',
        'Niña ecuatoriana, tiene cabello largo y rizado de color negro que cae hasta debajo de sus hombros.  Su rostro es de forma ovalada y siempre muestra una sonrisa cálida. Viste con vestidos de colores vivos de ecuador.',
        'Determinada y valiente. Curiosa e inquisitiva. Empática y amigable. Inspiradora y resiliente.',
        '../assets/src/fernanda.jpg',
        false),

    new Character("1", 'Juanita','Mexicana', 'Artesana',
        'Mujer artesana mexicana, tiene el cabello largo y oscuro que lleva recogido en una trenza adornada con cintas de colores brillantes. Su piel es de tono canela y sus ojos son grandes, de un color café oscuro. Suele llevar puestos aretes grandes y coloridos que complementan su atuendo tradicional mexicano. Viste una blusa bordada a mano con motivos florales y una falda larga de tela tejida, ambos en tonos vibrantes como el rojo, azul o verde. Sus manos están adornadas con pulseras y anillos artesanales.',
        'Apasionada y dedicada a su oficio de artesana. Es paciente y minuciosa. Tiene una sabiduría adquirida a lo largo de los años y una conexión profunda con la naturaleza. Es tranquila, reflexiva y muestra comprensión hacia los demás.',
        '../assets/src/juanita.jpg',
        false),

        new Character("9", 'Diego','Jamaicana', 'Historiador',
        'un niño jamaicano, tiene el cabello corto y rizado de color negro, que a veces lleva cubierto con una gorra de béisbol. Sus ojos son oscuros y vivaces. Su piel es de un tono cálido y dorado. Diego suele vestir con camisetas coloridas con estampados de símbolos históricos o figuras relevantes para la historia de Jamaica, combinadas con pantalones cortos cómodos y zapatillas deportivas. Lleva consigo un pequeño cuaderno donde anota detalles sus experiencias. ',
        'Apasionado por la historia. Curioso y analítico. Respetuoso y humilde. Comunicador elocuente. Comprometido con la preservación cultural. Expresa concentración y entusiasmo cuando habla sobre eventos históricos o descubrimientos arqueológicos. Cuenta historias fascinantes sobre el pasado de Jamaica. Sabe de la herencia cultural de Jamaica',
        '../assets/src/diego.jpg',
        false),


    new Character("11", 'Andrés','Ecuatoriana','Niño con amputación de brazo',
        'Niño ecuatoriano, tiene el cabello corto y lacio de color castaño oscuro. Sus ojos son marrones y su piel es de tono canela. Su brazo izquierdo ha sido amputado a la altura del codo y no utiliza prótesis. Suele vestir con ropa casual, como camisetas y jeans, y prefiere colores neutros y cómodos.',
        'Valentía. Optimista y alegre. Empático y solidario. Amistoso y cariñoso. Independiente y decidido. Voluntad inquebrantable de participar plenamente en todas las actividades que le interesan. Utilizando su mano derecha y aprendiendo técnicas que le permiten realizar tareas y juegos con habilidad. Su sentido del humor y su sonrisa contagiosa son señales de su aceptación y confianza en sí mismo',
        '../assets/src/andres.jpg',
        false),
    new Character("2", 'Carlos','Puertorriqueña', 'Aventurero',
        'Niño puertorriqueño aventurero, tiene el cabello corto, rizado de color negro intenso, y desordenado. Sus ojos son grandes y de un marrón profundo. Su piel es de un tono cálido y dorado, bronceada por el sol tropical. Tiene una sonrisa mostrando sus dientes blancos. Viste con ropa cómoda y funcional para sus aventuras: camiseta colorida con estampados de animales o superhéroes, pantalones cortos  y zapatos deportivos.',
        '• Niño intrépido y lleno de energía. Curiosos y con espíritu explorador. Valiente y dispuesto a los desafíos. Inspirador para otros con entusiasmo contagioso. Líder natural que guía en momentos difíciles. Descubre el mundo y su propio crecimiento personal.',
        '../assets/src/carlos.jpg',
        false),

    new Character("3", 'Sofía', 'Cubana', 'Curandera',
        'Mujer curandera cubana, tiene el cabello largo y oscuro que cae en ondas sobre sus hombros. Su piel es de tono canela, sus ojos son profundos y oscuros.Su rostro está marcado por líneas de experiencia y tranquilidad, reflejando años de conocimiento y conexión con la naturaleza y las tradiciones ancestrales. Tiene una sonrisa gentil. Lleva una falda larga y una blusa bordada a mano, adornada con colores vivos y motivos típicos de la cultura cubana. Lleva consigo diversos objetos simbólicos y herramientas de su práctica curativa, como hierbas, piedras o amuletos, que utiliza en sus rituales y tratamientos.',
        'Sabia y comprensiva. Empática y calmada. Respetuosa de la naturaleza y la cultura. Comprometida con el bienestar',
        '../assets/src/sofia.jpg',
        false),
        new Character("12", 'Ximena','Mexicana','Niña con síndrome de dawn',
        'Una niña mexicana con síndrome de Down tiene un rostro de facciones suaves y expresivas, con ojos grandes y brillantes de un color cálido. Su cabello es lacio de un tono oscuro como el castaño o negro. Su piel es de un tono cálido, típico de la herencia mexicana, con mejillas rosadas. Tiene una sonrisa contagiosa y afectuosa que ilumina su rostro, mostrando su alegría innata y amor por la vida. Viste con ropa cómoda y colorida que representan a México.',
        'Amorosa y cariñosa. Alegre y positiva. Social y amigable. Determinada y perseverante. Creativa y expresiva. Inclusiva y compresiva. Muestra una curiosidad genuina por aprender y experimentar nuevas cosas',
        '../assets/src/ximena.jpg',
        false),


    new Character("4", 'Isabella','carlos ', 'Animalista',
        'Niña puertorriqueña defensora de animales, tiene el cabello largo y ondeado de un tono castaño, que lleva recogido en una coleta alta. Sus ojos son grandes y expresivos, de un color avellana que refleja su compasión y determinación. Su piel es de un tono cálido y bronceado. Viste con ropa cómoda y práctica para sus actividades al aire libre: camisetas con estampados de animales, pantalones cortos y zapatillas deportivas.',
        'Apasionada por la causa animal. Compasiva y empática. Persuasiva y comunicativa. Valiente y decidida. Educada y conocedora. Organizada. Musetra su compromiso con la protección de los seres vivos',
        '../assets/src/isabella.jpg',
        false),

    new Character("5", 'Emilio','Republica Dominicana', 'Agricultor',
        'Hombre agricultor de la República Dominicana, tiene la piel bronceada. Tiene ojos oscuros y profundos. Su cabello es corto y oscuro, cubierto por un sombrero de paja. Es de complexión robusta y musculosa, resultado del trabajo físico exigente en la agricultura. Viste con camisa de manga larga y pantalones de trabajo, a menudo con botas de goma para protegerse del barro y la humedad del campo.',
        'Trabajador y dedicado. Conexión con la tierra. Paciente, comunitario y generoso. Sabio y experimentado. Tiene sabiduría en técnicas agrícolas tradicionales y su habilidad para obtener buenos rendimientos de sus tierras. ',
        '../assets/src/emilio.jpg',
        false),

    new Character("7", 'Tita','Mexicana', 'aventurera',
        'Una tortuga mexicana de tierra, tiene un caparazón robusto y redondeado, adornado con un patrón único de tonos marrones y beige que se mezclan con manchas oscuras. Su cabeza es pequeña y posee ojos brillantes, tiene un pico fuerte y curvado. Sus patas son robustas',
        'Aventurera y curiosa. Valiente y decidida. Amante de la naturaleza. Sociable y amigable. Cautelosa y observadora. Inspiradora y motivadora. Sabe historias interesantes de México',
        '../assets/src/tita.jpg',
        false),

    new Character("8", 'Omar', 'Cubana','Niño con ceguera',
        'Niño cubano con ceguera, tiene el cabello corto y oscuro. Sus ojos, aunque no pueden ver, tienen una expresión tranquila y profunda. Su piel es de un tono cálido y dorado. Suele vestir con ropa cómoda y práctica, como camisetas sueltas y pantalones o shorts. A menudo lleva consigo un perro guía que le ayuda a desplazarse con seguridad por su entorno.',
        'Alegre y optimista. Determinado y valiente. Empático y compresivo. Creativo y curioso. Se mueve con confianza gracias a su habilidad para orientarse usando otros sentidos, como el oído y el tacto. Tiene la capacidad para adaptarse, inspirando a otros con su valentía y actitud positiva ante los desafíos',
        '../assets/src/omar.jpg',
        false),
        
];
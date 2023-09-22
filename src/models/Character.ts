export class Character {

    id: number;
    nombre: string;
    oficio: string;
    descripcion_fisica: string;
    descripcion_personalidad: string;
    urlImage: string;
    seleccionado: boolean;

    constructor(id: number, nombre: string, oficio: string, descripcion_fisica: string, descripcion_personalidad: string, urlImage: string,  seleccionado: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.oficio = oficio;
        this.descripcion_fisica = descripcion_fisica;
        this.descripcion_personalidad = descripcion_personalidad;
        this.seleccionado = seleccionado;
        this.urlImage = urlImage;
    }
}


export const characters: Character[] = [

    new Character(1, 'Juanita', 'Artesana',
        'Mujer mexicana apasionada por la artesanía, ojos brillantes, tez caramelo, cejas arqueadas de interés ,cabello negro y ondulado trenzado en lateral, sonrisa amable, manos pacientes y minuciosas',
        'Apasionada y dedicada a su oficio de artesana. Es paciente y minuciosa. Tiene una sabiduría adquirida a lo largo de los años y una conexión profunda con la naturaleza.Es tranquila, reflexiva y muestra comprensión hacia los demás.',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png',
        false),

    new Character(2, 'Carlos', 'Aventurero',
        'Niño mexicano, piel tostada por el sol,  un brillo travieso en sus ojos oscuros. Su cabello oscuro y desordenado, vestido de camiseta cómoda y pantalones resistentes. Es curioso y con espiritu explorador, le gusta descubrir el mundo y su propio crecimiento personal',
        'Niño intrépido y lleno de energía. Curiosos y con espíritu explorador Valiente y dispuesto a los desafíos. Inspirador para otros con entusiasmo contagioso. Líder natural que guía en momentos difíciles. Descubre el mundo y su propio crecimiento personal.',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png',
        false),

    new Character(3, 'Sofia', 'Curandera',
        'Mujer mexicana curandera, de piel cálida y arrugas suaves, tiene ojos oscuros que brillan, cabello largo color negro. Viste con ropa cómoda y colorida que refleja su conexión con la naturaleza y espiritualidad.',
        'Sabia y comprensiva. Empática y calmada. Respetuosa de la naturaleza y la cultura. Comprometida con el bienestar',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(3, 'Isabella', 'Defensora de los animales',
        'Chica Mexicana de tez morena, con un rostro suave y ojos cálidos y compasivos. Cabello largo y oscuro que cae en ondas naturales sobre sus hombros. Viste con camisas con mensajes a favor de los animales y pantalones vaqueros desgastados. Lleva una mochila que tiene cosas para defender a los animales. ',
        'Apasionada por la causa animal. Compasiva y empática. Persuasiva y comunicativa. Valiente y decidida. Educada y conocedora. Organizada. ',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png',
        false),

    new Character(4, 'Emilio', 'Agricultor',
        'Hombre mexicano de edad mediana con tono de piel tostado por sol, cabello oscuro y rizado que lo cubre con un sombrero de agricultor, vestir con camisa de manga larga y pantalones gruesos, con botas de campo. ',
        'Trabajador y dedicado. Conexión con la tierra.Paciente, comunitario y generoso.Sabio y experimentado',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png',
        false),

    new Character(5, 'Ricardo', 'Pescador',
        'Hombre de mediana edad con piel bronceada por el sol, cabello oscuro, corto y alborotado, con ojos azul profundo, barba de candado con aspecto rústico y aventurero. Estatura promedio, complexión atlética y robusta.Viste con ropa cómoda y práctica como camisetas, pantalones cortos y botas de agua. ',
        'Aventurero y apasionado.Paciente y observador. Conexión con la naturaleza. Comunitario y solidario. Contador de historias. Reflexivo y humilde',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(6, 'La tortuga tita', 'aventurera',
        'Tortuga de tierra de tamaño pequeño con caparazón con patrones únicos, ojos pequeños y curiosos que reflejan su espíritu aventurero. Tiene un cuello y patas cortas pero robustas, su expresión es valiente y con entusiasmo de nuevas aventuras. ',
        'Aventurera y curiosa. Valiente y decidida. Amante de la naturaleza. Sociable y amigable. Cautelosa y observadora. Inspiradora y motivadora',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(7, 'Omar', 'niño con ceguera',
        'Niño mexicano de estatura promedio, cabello oscuro y ondulado, sus ojos aunque no ve tienen una expresión cálida y amable. Lleva gafas oscuras que protegen sus ojos. Tiene una sonrisa luminosa que ilumina su rostro. Utiliza una camisa de manga corta con mensajes o diseños en braile y pantalones cómodos para caminar, utiliza un bastón de ciegos',
        'Alegre y optimista. Determinado y valiente. Empático y compresivo. Creativo y curioso. Amigo leal',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(8, 'Diego', 'Le gusta jugar con muñecas',
        'Niño mexicano con complexión delgada y atlética, tiene el color castaño claro y ligeramente ondulado, sus ojos son un tono avellana. Su rostro es ovalado y con mejillas sonrosadas, una sonrisa amable y contagiosa. Diego se viste de manera colorida y cómoda, no se preocupa por las normas de género en la vestimenta.',
        'Empático y cariñoso. Creativo y artístico. Curioso y ávido aprendiz. Amigable y sociable. Seguro de sí mismo. Defensor de la igualdad',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(9, 'Fernanda', 'Niña con discapacidad visual',
        'Niña mexicana que tiene cabello largo y liso de color negro azabache que cae hasta debajo de sus hombros. Ella tiene lentes de botella por su discapacidad visual, su rostro es de forma ovalada, sonrisa cálida. Utiliza vestidos de colores vivos',
        'Determinada y valiente. Curiosa e inquisitiva. Empática y amigable. Inspiradora y resiliente',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(10, 'Andrés', 'un niño que no cuenta con una mano',
        'Niño mexicano de cabello color negro y liso, sonrisa amable y contagiosa, ojos de tono café oscuro que expresan confianza y determinación. Nació sin una de sus manos. ',
        'Valentía. Optimista y alegre. Empático y solidario. Amistoso y cariñoso. Independiente y decidido',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false),

    new Character(11, 'Ximena', 'con síndrome de dawn',
        'Niña mexicana de cabello color oscuro, rizado y corto. Sus ojos son de un tono cálido y expresan curiosidad y ternura. Tiene rasgos faciales suaves y una expresión alegre que ilumina un rostro. Lleva ropa cómoda que refleja su personalidad alegre y su amor por la vida',
        'Valentía. Optimista y alegre. Empático y solidario. Amistoso y cariñoso. Independiente y decidido',
        'https://holatelcel.com/wp-content/uploads/2022/06/Mama%CC%81-Coco-es-real-y-vive-en-Michoaca%CC%81n.png', 
        false)






];
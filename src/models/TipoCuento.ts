export class TipoCuento {

    id: string;
    nombre: string;
    descripcion: string;
    urlImage: string;

    constructor(id: string, nombre: string, descripcion: string, urlImage: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImage = urlImage;
    }
}
export const tipos: TipoCuento[] = [
    new TipoCuento('STORY_MICRO', 'Microcuento', 'Menos de 200 palabras', '../assets/src/micro-story.jpg'),
    new TipoCuento('STORY_FLASH', 'Cuento Flash', '200 - 700 palabras',  '../assets/src/flash-story.jpg'),
    new TipoCuento('STORY_SHORT', 'Cuento corto', '750 - 2,000 palabras', '../assets/src/short-story.jpg')
];


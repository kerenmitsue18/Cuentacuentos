export class TipoCuento {

    id: string;
    nombre: string;
    descripcion: string;
    seleccionado: boolean;
    urlImage: string;

    constructor(id: string, nombre: string, descripcion: string, seleccionado: boolean, urlImage: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.seleccionado = seleccionado;
        this.urlImage = urlImage;
    }
}
export const tipos: TipoCuento[] = [
    new TipoCuento('STORY_MICRO', 'Microcuento', 'Menos de 200 palabras', false, 'https://plutonkids.es/wp-content/uploads/2021/09/365-Cuentos-para-Dormir.jpg'),
    new TipoCuento('STORY_FLASH', 'Cuento Flash', '200 - 700 palabras', false, 'https://http2.mlstatic.com/D_NQ_NP_941147-MLA46918468266_072021-O.webp'),
    new TipoCuento('STORY_SHORT', 'Cuento corto', '750 - 2,000 palabras', false, 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG018AM.jpg')
];


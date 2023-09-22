export class Topic{

    id: number;
    nombre: string;
    urlImage: string;

    constructor(id: number, topic: string, urlImage: string){
        this.id = id;
        this.nombre = topic;
        this.urlImage = urlImage;
    }
}

export const topics: Topic[] = [
    new Topic(1, "Respeto","https://media.istockphoto.com/id/1146425090/es/vector/apret%C3%B3n-de-manos-de-socios-comerciales-apret%C3%B3n-de-manos-de-negocios-trato-exitoso.jpg?s=612x612&w=0&k=20&c=Hcv5IDPPcb6hHHIXX07-dq6D3LFNASytYuWGWE932Q0="),
    new Topic(2, "Tolerancia","https://www.estrategiaynegocios.net/binrepository/1208x900/4c0/1200d900/none/26086/ILYA/Respeto.111_EN1352539_MG223194770.jpg"),
    new Topic(3, "Equidad","https://www.estrategiaynegocios.net/binrepository/1208x900/4c0/1200d900/none/26086/ILYA/Respeto.111_EN1352539_MG223194770.jpg"),
    new Topic(4, "Cuidado del medio ambiente","https://www.estrategiaynegocios.net/binrepository/1208x900/4c0/1200d900/none/26086/ILYA/Respeto.111_EN1352539_MG223194770.jpg"),
];
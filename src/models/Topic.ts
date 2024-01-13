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
    new Topic(1, "Respeto","../assets/src/respect-topic.jpg"),
    new Topic(2, "Tolerancia","../assets/src/tolerance.jpg"),
    new Topic(3, "Equidad","../assets/src/equity.jpg"),
    new Topic(4, "Cuidado del medio ambiente","../assets/src/enviroment.jpg"),
];
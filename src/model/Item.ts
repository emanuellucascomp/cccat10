export default class Item {
    id: number;
    name: string;
    value: number;
    height: number;
    width: number;
    depth: number;
    weight: number;

    constructor(id: number, name: string, value: number, height: number, width: number, depth: number, weight: number){
        this.id = id;
        this.name = name;
        this.value = value;
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.weight = weight;
    }
}
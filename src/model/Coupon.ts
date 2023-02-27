export default class Coupon {
    id: number;
    name: string;
    value: number;
    expirationDate: Date;

    constructor(id: number, name: string, value: number, expirationDate: Date){
        this.id = id;
        this.name = name;
        this.value = value;
        this.expirationDate = expirationDate;
    }

    isExpired(): boolean{
        const today = new Date();
        return today.getTime() > this.expirationDate.getTime()
    }
}
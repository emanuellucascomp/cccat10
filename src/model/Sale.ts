export default class Sale {
    id: number;
    customerDocument: string;
    totalAmount: number;

    constructor(id: number, customerDocument: string, totalAmount: number){
        this.id = id;
        this.customerDocument = customerDocument;
        this.totalAmount = totalAmount;
    }
}
import CpfValidator from "../common/CpfValidator";
import SalesRepository from "../repository/SalesRepository";

export default class SalesService {

    constructor(readonly salesRepository: SalesRepository){}

    public createSaleForCustomer = (document: string, items: any[], coupon: number) => {
        const cpfValidator = new CpfValidator(document)
        let total = 0
        if(!cpfValidator.validate()) throw new Error('CPF Inválido')
        items.forEach(item => {
            total += item.price * item.quantity
        })
    
        total -= (total * coupon) / 100

        this.salesRepository.inserSale(document, total)
    
        return { total }
    }
    
}
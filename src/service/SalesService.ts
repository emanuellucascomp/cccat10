import CpfValidator from "../common/CpfValidator";
import SalesRepository from "../repository/SalesRepository";
import CouponsService from "./CouponsService";

export default class SalesService {

    constructor(readonly salesRepository: SalesRepository, readonly couponsService: CouponsService){}

    public createSaleForCustomer = async (document: string, items: any[], coupon: string) => {
        const cpfValidator = new CpfValidator(document)
        let total = 0
        if(!cpfValidator.validate()) throw new Error('CPF Inválido')
        items.forEach(item => {
            total += item.price * item.quantity
        })

        const couponInDb = await this.couponsService.retrieveCoupon(coupon)

        if(couponInDb == null){
            throw new Error('Cupom não encontrado ou inválido.')
        }
    
        total -= (total * couponInDb.value) / 100

        //this.salesRepository.inserSale(document, total)
    
        return { total }
    }
    
}
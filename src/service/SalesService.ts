import CpfValidator from "../common/CpfValidator";
import SalesRepository from "../repository/SalesRepository";
import CouponsService from "./CouponsService";
import ItemsService from "./ItemsService";

export default class SalesService {

    constructor(readonly salesRepository: SalesRepository, readonly couponsService: CouponsService, readonly itemsService: ItemsService){}

    public createSaleForCustomer = async (document: string, items: any[], coupon: string) => {
        const cpfValidator = new CpfValidator(document)
        let total = 0
        if(!cpfValidator.validate()) throw new Error('CPF Inválido')

        items.forEach(async item => {
            const product = await this.itemsService.retrieveItem(item.id);
            if(product == null) throw new Error('Produto não encontrado')
            total += product.value * item.quantity
        })

        const couponInDb = await this.couponsService.retrieveCoupon(coupon)

        if(couponInDb == null){
            throw new Error('Cupom não encontrado ou inválido.')
        }

        if(couponInDb.isExpired()){
            throw new Error('Cupom expirado.')
        }
    
        total -= (total * couponInDb.value) / 100

        //this.salesRepository.inserSale(document, total)
    
        return { total }
    }
    
}
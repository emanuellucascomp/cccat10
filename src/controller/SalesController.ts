import SalesService from "../service/SalesService";

export default class SalesController {
    
    constructor(readonly salesService: SalesService){}

    public createSale = async (req: any, res: any) => {
        const { document, items, coupon } = req.body;
        const createSaleResponse = await this.salesService.createSaleForCustomer(document, items, coupon);
        res.json(createSaleResponse)
    }
}
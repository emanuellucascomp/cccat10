import { Router } from "express";
import SalesController from "../controller/SalesController";

export default class SalesRouter {
    router: Router

    constructor(readonly salesController: SalesController){
        this.router = Router()
        this.createSalesRoutes()
    }

    private createSalesRoutes(){
        this.router.post('/sales-order', this.salesController.createSale);
    }
}
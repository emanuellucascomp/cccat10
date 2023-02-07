import { NextFunction, Request, Response } from "express"
import { createSaleForCustomer } from "../service/sales.service";

export const createSale = (req: Request, res: Response) => {
    const { document, items, coupon } = req.body;
    const createSaleResponse = createSaleForCustomer(document, items, coupon);
    res.json(createSaleResponse)
}
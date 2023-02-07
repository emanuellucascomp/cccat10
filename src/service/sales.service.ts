import { validate } from "../common/validator"

export const createSaleForCustomer = (document: string, items: any[], coupon: number) => {
    let total = 0
    if(!validate(document)) throw new Error('CPF Inválido')
    items.map(item => {
        total += item.price * item.quantity
    })

    total -= (total * coupon) / 100

    return { total }
}
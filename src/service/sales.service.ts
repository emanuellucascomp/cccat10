import { validate } from "../common/validator"
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sales',
    password: 'admin123',
    port: 5432,
  })

export const createSaleForCustomer = (document: string, items: any[], coupon: number) => {
    let total = 0
    if(!validate(document)) throw new Error('CPF Inválido')
    items.forEach(item => {
        total += item.price * item.quantity
    })

    total -= (total * coupon) / 100

    pool.query('INSERT INTO sales(customer_document, total_amount) VALUES ($1, $2) RETURNING *', [document, total], (error, results) => {
        if(error) throw error
        console.log(`Sale added with ID: ${results.rows[0].id}`)
    })

    return { total }
}
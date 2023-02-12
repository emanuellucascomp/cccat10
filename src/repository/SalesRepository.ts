import { Pool } from "pg";

export default class SalesRepository {
    constructor(readonly pool: Pool){}

    public inserSale(document: string, total: number){
        this.pool.query('INSERT INTO sales(customer_document, total_amount) VALUES ($1, $2) RETURNING *', [document, total], (error, results) => {
            if(error) throw error
            console.log(`Sale added with ID: ${results.rows[0].id}`)
        })
    }
}
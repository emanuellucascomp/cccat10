import { Pool } from "pg";
import Coupon from "../model/Coupon";

export default class CouponsRepository {
    constructor(readonly pool: Pool){}

    public async retrieveCoupon(name: string): Promise<Coupon | null> {
        const { rows } = await this.pool.query('SELECT * FROM coupon WHERE name = $1', [name])
        return new Coupon(rows[0].id, rows[0].name, rows[0].value, rows[0].expiration_date);
    }
}
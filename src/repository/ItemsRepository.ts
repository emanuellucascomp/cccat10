import { Pool } from "pg";
import Item from "../model/Item";

export default class ItemsRepository {
    constructor(readonly pool: Pool){}

    public async retrieveItem(id: number): Promise<Item | null> {
        const { rows } = await this.pool.query('SELECT * FROM item WHERE id = $1', [id])
        return new Item(rows[0].id, rows[0].name, rows[0].value, rows[0].height, rows[0].width, rows[0].depth, rows[0].weight);
    }
}
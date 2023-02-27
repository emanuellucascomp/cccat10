import Item from "../model/Item";
import ItemsRepository from "../repository/ItemsRepository";

export default class ItemsService {

    constructor(readonly itemsRepository: ItemsRepository){}

    public retrieveItem = async (id: number): Promise<Item | null> => {
        const item = await this.itemsRepository.retrieveItem(id);
        return item;
    }
    
}
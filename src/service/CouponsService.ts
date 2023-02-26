import Coupon from "../model/Coupon";
import CouponsRepository from "../repository/CouponsRepository";

export default class CouponsService {

    constructor(readonly couponsRepository: CouponsRepository){}

    public retrieveCoupon = async (name: string): Promise<Coupon | null> => {
        const coupon = await this.couponsRepository.retrieveCoupon(name);
        return coupon;
    }
    
}
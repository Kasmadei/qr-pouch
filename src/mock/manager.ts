import { Business } from './../types';
import { createBusiness, getAllBusinesses, deleteBusiness, resetBusiness } from './mockDB';

const DELAY = 1000

const delay = async (ms: number) => {
    return new Promise ((res, rej) => setTimeout(() => res(), ms))
}

export class Manager {
    async createBusinessAsync(business: Business) {
        await delay(DELAY);
        return createBusiness(business);
    }
    async getAllBusinessesAsync() {
        await delay(DELAY)
        const res = getAllBusinesses();
        return res
    }
    async deleteBusinessAsync(id: string) {
        await delay(DELAY)
        return deleteBusiness(id);
    }
    async resetBusinessAsync(id: string) {
        await delay(DELAY);
        return resetBusiness(id);
    }
}


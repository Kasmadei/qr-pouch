import { Business } from "../types";

let businesses: Business[] = [
    {
        uuid: "1",
        name: "test1",
        voucher: {
            numberOfScans: 1,
            metadata: {
                numberOfExpectedScans: 11
            }
        }
    },
]

export const createBusiness = (business: Business) => {
    businesses.unshift(business)
    return businesses
}

export const getAllBusinesses = () => {
    return businesses
}

export const deleteBusiness = (id: string) => {
    const res = businesses.filter(bus => bus.uuid !== id)
    businesses = res
    return businesses
}

export const resetBusiness = (id: string) => {
    const business = businesses.find(bus => bus.uuid === id)
    if(business !== undefined) {
        business.voucher.numberOfScans = 0;
    }
    return businesses
}


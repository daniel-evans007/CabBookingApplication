import { Customer } from "./customer";
import { Deserializable } from "./deserializable.model";
import { Driver } from "./driver";

export class TripBooking implements Deserializable {

    tripBookingId: number;
    customer: Customer;
    driver: Driver;
    fromLocation: string;
    toLocation: string;
    fromDateTime: string | null;
    toDateTime: string;
    status: string = "notAccepted";
    distanceInKm: number;
    bill: number;
    
    constructor() { }
    
    deserialize(input: any): this {
        Object.assign(this, input);
        this.customer = new Customer().deserialize(input.customer);
        return this;
    }
}
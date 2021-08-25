import { Customer } from "./customer";
import { Driver } from "./driver";

export class TripBooking {

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
}
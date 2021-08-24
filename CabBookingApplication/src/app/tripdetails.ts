import { DatePipe } from "@angular/common";
import * as moment from "moment";
import { Customer } from "./customer";
import { Driver } from "./driver";

export class Tripdetails {

    date: Date = new Date();
    
    fromLocation: string;
    toLocation: string;
    fromDateTime: string | null;
    toDateTime: string;
    status: boolean;
    distanceInKm: number;
    bill: number;
    customer: Customer;
    driver: Driver;
}



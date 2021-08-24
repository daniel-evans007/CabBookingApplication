import { Customer } from "./customer";
import { Driver } from "./driver";

export class Tripdetails {
 
    public date: Date = new Date();

    dateNow: string;

    showDate() {
        this.dateNow = this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds()+" "+this.date.getDate()+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
        return this.dateNow;
  }
    
    fromLocation: string;
    toLocation: string;
    fromDateTime: string = this.showDate();
    toDateTime: string;
    status: boolean;
    distanceInKm: number;
    bill: number;
    customer: Customer;
    driver: Driver;
}



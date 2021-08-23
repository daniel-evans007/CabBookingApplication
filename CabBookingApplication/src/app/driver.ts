import { Cab } from "./cab";

export class Driver {
    driverId: number;
    username: String = "";
    email: String = "";
    password: String = "";
    mobile: String = "";
    licenseNo: number;
    rating: number;
    cab: Cab = new Cab();

    constructor() {}
}
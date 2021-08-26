import {Deserializable} from "./deserializable.model";

export class Customer implements Deserializable {
    username: String;
    password: String;
    email: String;
    mobileNumber: String;
    customerId: number; 
	
	constructor(){}

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }


}
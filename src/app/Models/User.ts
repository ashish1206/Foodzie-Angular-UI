import { Address } from './Address';

export class User {
    email: string;
    password: string;
    newPassword: string
    phoneNumber: string;
    username: string;
    addresses: Address[];
}
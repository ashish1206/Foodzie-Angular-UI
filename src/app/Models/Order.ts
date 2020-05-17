import { Menu } from './../Models/Menu'
export class Order {
    orderId: number;
    dishes: Menu[];
    userEmail: string;
    sellerEmail: string;
}
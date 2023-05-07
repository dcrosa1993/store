import { Order } from './order';

export type Service = {
  id: string;
  name: string;
  description: string;
  minOrder: string;
  maxOrder: string;
  speed: string;
  price: string;
  available: boolean;
  orders: Order[];
};

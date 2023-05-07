import { Service } from '../models/service';
import { ServiceInput } from '../models/service-input';

export const service: Service = {
  id: '1',
  name: 'Example',
  description: 'Example Des',
  minOrder: '100',
  maxOrder: '10000',
  speed: '10/seg',
  price: '$150.00',
  available: true,
  orders: [],
};
export const serviceInput: ServiceInput = {
  name: 'Example',
  description: 'Example Des',
  minOrder: '100',
  maxOrder: '10000',
  speed: '10/seg',
  price: '$150.00',
  available: true,
};
export const services: Service[] = [
  {
    id: '1',
    name: 'Example',
    description: 'Example Des',
    minOrder: '100',
    maxOrder: '10000',
    speed: '10/seg',
    price: '$150.00',
    available: true,
    orders: [],
  },
  {
    id: '2',
    name: 'Example',
    description: 'Example Des',
    minOrder: '100',
    maxOrder: '10000',
    speed: '10/seg',
    price: '$150.00',
    available: true,
    orders: [],
  },
  {
    id: '3',
    name: 'Example',
    description: 'Example Des',
    minOrder: '100',
    maxOrder: '10000',
    speed: '10/seg',
    price: '$150.00',
    available: true,
    orders: [],
  },
];

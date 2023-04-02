import { Order } from '../models/order';
import { OrderInput } from '../models/order-input';
import { User } from '../models/user';
import { UserInput } from '../models/user-input';
import { service } from './moked-services';
import { user } from './moked-user';

export const order: Order = {
  createdBy: '02/02/2022',
  updatedBy: '02/02/2022',
  id: '1',
  service: service,
  user: user,
  status: 'pendign',
};
export const orderInput: OrderInput = {
  service: service,
};
export const services: Order[] = [
  {
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
    id: '1',
    service: service,
    user: user,
    status: 'pendign',
  },
  {
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
    id: '2',
    service: service,
    user: user,
    status: 'pendign',
  },
  {
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
    id: '3',
    service: service,
    user: user,
    status: 'pendign',
  },
];

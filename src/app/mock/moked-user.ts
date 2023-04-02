import { User } from '../models/user';
import { UserInput } from '../models/user-input';

export const user: User = {
  password: '123',
  phone: '56424280',
  baned: false,
  name: 'Fulano',
  email: 'fulano@gmail.com',
  role: 'client',
  createdBy: '02/02/2022',
  updatedBy: '02/02/2022',
};
export const userInput: UserInput = {
  password: '123',
  phone: '56424280',
  name: 'Fulano',
  email: 'fulano@gmail.com',
  baned: false,
};
export const users: User[] = [
  {
    password: '123',
    phone: '56424280',
    baned: false,
    name: 'Fulano',
    email: 'fulano@gmail.com',
    role: 'client',
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
  },
  {
    password: '123',
    phone: '56424280',
    baned: false,
    name: 'Fulano',
    email: 'fulano@gmail.com',
    role: 'client',
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
  },
  {
    password: '123',
    phone: '56424280',
    baned: false,
    name: 'Fulano',
    email: 'fulano@gmail.com',
    role: 'client',
    createdBy: '02/02/2022',
    updatedBy: '02/02/2022',
  },
];

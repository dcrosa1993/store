import { Service } from './service';
import { User } from './user';

export type Order = {
  id: string;
  service: Service;
  user: User;
  status: 'pendign' | 'complete' | 'failed';
  createdBy: string;
  updatedBy: string;
};

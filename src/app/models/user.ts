export type User = {
  password: string;
  phone: string;
  baned: boolean;
  name: string;
  email: string;
  role: 'Administrator' | 'Standard';
};

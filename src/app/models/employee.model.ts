export interface Employee {
  id: string;
  name: string;
  department: string;
  status: Status;
  email: string;
  equipments: Equipment[];
}

export interface Equipment {
  id: string;
  name: string;
}

export enum Status {
  Active = 'ACTIVE',
  Offboarded = 'INACTIVE',
}

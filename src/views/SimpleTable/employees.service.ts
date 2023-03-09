export interface Empoloyee {
  EmployeeID: number;
  FullName: string;
  BirthDate: string;
  ReportsTo: number | null;
}

const employees: Empoloyee[] = [
  {
    EmployeeID: 1,
    FullName: 'Nancy Davolio',
    BirthDate: '1968-12-08T00:00:00.000Z',
    ReportsTo: 2,
  },
  {
    EmployeeID: 2,
    FullName: 'Andrew Fuller',
    BirthDate: '1972-02-19T00:00:00.000Z',
    ReportsTo: null,
  },
  {
    EmployeeID: 3,
    FullName: 'Janet Leverling',
    BirthDate: '1983-08-30T00:00:00.000Z',
    ReportsTo: 2,
  },
  {
    EmployeeID: 4,
    FullName: 'Margaret Peacock',
    BirthDate: '1957-09-19T00:00:00.000Z',
    ReportsTo: 2,
  },
  {
    EmployeeID: 5,
    FullName: 'Steven Buchanan',
    BirthDate: '1975-03-04T00:00:00.000Z',
    ReportsTo: 2,
  },
  {
    EmployeeID: 6,
    FullName: 'Michael Suyama',
    BirthDate: '1983-07-02T00:00:00.000Z',
    ReportsTo: 5,
  },
  {
    EmployeeID: 7,
    FullName: 'Robert King',
    BirthDate: '1980-05-29T00:00:00.000Z',
    ReportsTo: 5,
  },
  {
    EmployeeID: 8,
    FullName: 'Laura Callahan',
    BirthDate: '1978-01-09T00:00:00.000Z',
    ReportsTo: 2,
  },
  {
    EmployeeID: 9,
    FullName: 'Brett Wade',
    BirthDate: '1986-01-27T00:00:00.000Z',
    ReportsTo: 5,
  },
];

export default {
  getEmployees(): Empoloyee[] {
    return employees;
  },
};

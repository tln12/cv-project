import { v4 as uuidv4 } from 'uuid';

const today = new Date().toISOString().slice(0, 10);

const personal = {
  firstName: 'Max',
  lastName: 'Mustermann',
  address: 'Musterstr. 1, 12345 Leipzig',
  phone: '0123456789',
  email: 'email@example.com',
};
const education = [
  {
    startingDate: '2022-10-01',
    endDate: today,
    name: 'RWTH Aachen University',
    title: 'Environmental Engineering (B.Sc.)',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
  {
    startingDate: '2018-10-01',
    endDate: '2021-10-01',
    name: 'HTW Berlin',
    title: 'Communication Design (B.A.)',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
];
const work = [
  {
    startingDate: '2023-12-01',
    endDate: today,
    name: 'Clean Waters GmbH',
    title: 'Working Student',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
  {
    startingDate: '2019-02-01',
    endDate: '2023-12-01',
    name: "Johnny's Hand Pulled Noodles",
    title: 'Waiter',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
  {
    startingDate: '2018-10-01',
    endDate: '2021-05-01',
    name: 'Panda Delivery',
    title: 'Delivery Driver',
    description: 'Delivered groceries to customers.',
    id: uuidv4(),
    hidden: false,
  },
];

export { personal, education, work };

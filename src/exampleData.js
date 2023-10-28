import { v4 as uuidv4 } from 'uuid';

const personal = {
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstr.',
  houseNr: '1',
  postcode: '12345',
  city: 'Leipzig',
  phone: '0123456789',
  email: 'email@example.com',
};
const education = [
  {
    startingDate: '2010-10-01',
    endDate: '2015-04-01',
    name: 'RWTH Aachen University',
    title: 'Mechanical Engineering',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
  {
    startingDate: '2023-10-01',
    endDate: '2026-04-01',
    name: 'HTW Berlin',
    title: 'Graphic Design',
    description: '',
    id: uuidv4(),
    hidden: false,
  },
];
const work = [
  {
    startingDate: '2010-10-01',
    endDate: '2015-04-01',
    name: 'Panda Delivery',
    title: 'Warehouse Support',
    description: 'blablibl and I did this to blasd so thats work yay',
    id: uuidv4(),
    hidden: false,
  },
  {
    startingDate: '2010-10-01',
    endDate: '2015-04-01',
    name: 'Flaschenpost',
    title: 'Driver',
    description: 'Driving through the city',
    id: uuidv4(),
    hidden: false,
  },
];

export { personal, education, work };

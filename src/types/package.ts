export interface Package {
  id: string;
  code: number;
  name: string;
  description: string;
  price: number;
  category: 'data-repeatable' | 'minutes' | 'data-daily' | 'sms';
  duration: string;
  isRepeatable?: boolean;
}

export const packages: Package[] = [
  // Repeatable Data Offers
  {
    id: 'data-rep-1',
    code: 23,
    name: '1GB Data',
    description: '1GB data valid for 1 hour',
    price: 23,
    category: 'data-repeatable',
    duration: '1 hour',
    isRepeatable: true,
  },
  {
    id: 'data-rep-2',
    code: 53,
    name: '1.5GB Data',
    description: '1.5GB data valid for 3 hours',
    price: 53,
    category: 'data-repeatable',
    duration: '3 hours',
    isRepeatable: true,
  },
  {
    id: 'data-rep-3',
    code: 105,
    name: '2GB Data',
    description: '2GB data valid for 24 hours',
    price: 105,
    category: 'data-repeatable',
    duration: '24 hours',
    isRepeatable: true,
  },

  // Minutes
  {
    id: 'mins-1',
    code: 22,
    name: '45 Minutes',
    description: '45 minutes airtime valid for 3 hours',
    price: 22,
    category: 'minutes',
    duration: '3 hours',
  },
  {
    id: 'mins-2',
    code: 51,
    name: '50 Minutes',
    description: '50 minutes airtime till midnight',
    price: 51,
    category: 'minutes',
    duration: 'Till midnight',
  },

  // Daily Data
  {
    id: 'data-daily-1',
    code: 19,
    name: '1GB Express',
    description: '1GB data for 1 hour',
    price: 19,
    category: 'data-daily',
    duration: '1 hour',
  },
  {
    id: 'data-daily-2',
    code: 20,
    name: '250MB Daily',
    description: '250MB data for 24 hours',
    price: 20,
    category: 'data-daily',
    duration: '24 hours',
  },
  {
    id: 'data-daily-3',
    code: 49,
    name: '350MB Weekly',
    description: '350MB data for 7 days',
    price: 49,
    category: 'data-daily',
    duration: '7 days',
  },
  {
    id: 'data-daily-4',
    code: 50,
    name: '1.5GB Quick',
    description: '1.5GB data for 3 hours',
    price: 50,
    category: 'data-daily',
    duration: '3 hours',
  },
  {
    id: 'data-daily-5',
    code: 55,
    name: '1.25GB Night',
    description: '1.25GB data till midnight',
    price: 55,
    category: 'data-daily',
    duration: 'Till midnight',
  },
  {
    id: 'data-daily-6',
    code: 99,
    name: '1GB Daily Plus',
    description: '1GB data for 24 hours',
    price: 99,
    category: 'data-daily',
    duration: '24 hours',
  },
  {
    id: 'data-daily-7',
    code: 300,
    name: '2.5GB Weekly',
    description: '2.5GB data for 7 days',
    price: 300,
    category: 'data-daily',
    duration: '7 days',
  },
  {
    id: 'data-daily-8',
    code: 700,
    name: '6GB Weekly',
    description: '6GB data for 7 days',
    price: 700,
    category: 'data-daily',
    duration: '7 days',
  },

  // SMS Packages
  {
    id: 'sms-1',
    code: 5,
    name: '20 SMS',
    description: '20 SMS for 24 hours',
    price: 5,
    category: 'sms',
    duration: '24 hours',
  },
  {
    id: 'sms-2',
    code: 10,
    name: '200 SMS',
    description: '200 SMS for 24 hours',
    price: 10,
    category: 'sms',
    duration: '24 hours',
  },
  {
    id: 'sms-3',
    code: 21,
    name: '100 SMS Weekly',
    description: '100 SMS for 1 week',
    price: 21,
    category: 'sms',
    duration: '1 week',
  },
  {
    id: 'sms-4',
    code: 30,
    name: '1,000 SMS Weekly',
    description: '1,000 SMS for 1 week',
    price: 30,
    category: 'sms',
    duration: '1 week',
  },
  {
    id: 'sms-5',
    code: 101,
    name: '1,500 SMS Monthly',
    description: '1,500 SMS for 30 days',
    price: 101,
    category: 'sms',
    duration: '30 days',
  },
];

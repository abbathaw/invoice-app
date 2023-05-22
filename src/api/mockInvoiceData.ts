import { Invoice } from '../types';

export const mockInvoice: Invoice = {
  phases: [
    {
      id: 'phase_1',
      name: 'Design',
      costItems: [
        { name: 'Concept Development', pricePerUnit: 50, units: 20, taxRate: 0.21 },
        { name: 'Design Revisions', pricePerUnit: 75, units: 10, taxRate: 0.21 },
      ],
      discountOrFee: -40,
    },
    {
      id: 'phase_2',
      name: 'Development',
      costItems: [
        { name: 'Frontend Development', pricePerUnit: 100, units: 30, taxRate: 0.21 },
        { name: 'Backend Development', pricePerUnit: 150, units: 20, taxRate: 0.21 },
      ],
      discountOrFee: 0,
    },
    {
      id: 'phase_3',
      name: 'Deployment',
      costItems: [
        { name: 'Hosting Setup', pricePerUnit: 200, units: 1, taxRate: 0.21 },
        { name: 'Domain Registration', pricePerUnit: 10, units: 1, taxRate: 0 },
      ],
      discountOrFee: -50,
    },
  ],
  project: {
    id: '1',
    name: 'The App Project',
  },
  totalDiscountOrFee: -100,
};

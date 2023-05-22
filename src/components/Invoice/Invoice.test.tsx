import { render, screen } from '@testing-library/react';
import Invoice from './index.tsx';
import { Invoice as InvoiceModel } from '../../types';

describe('Invoice', () => {
  const mockInvoice: InvoiceModel = {
    project: {
      id: 'project_1',
      name: 'Project 1',
    },
    totalDiscountOrFee: 200,
    phases: [],
  };

  test('renders project name', () => {
    render(<Invoice invoice={mockInvoice} />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
  });
});

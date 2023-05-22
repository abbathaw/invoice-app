import { calculatePhaseTotal, calculateInvoiceTotal } from './invoiceCalculator';
import { Phase, Invoice } from '../types/invoice';

describe('invoiceCalculator', () => {
  const mockPhase: Phase = {
    id: 'phase_1',
    name: 'Phase 1',
    discountOrFee: 100,
    costItems: [
      { name: 'Item 1', units: 10, pricePerUnit: 50, taxRate: 0.21 },
      { name: 'Item 2', units: 5, pricePerUnit: 100, taxRate: 0.09 },
    ],
  };

  const mockInvoice: Invoice = {
    project: {
      name: 'Project 1',
      id: 'project_1',
    },
    totalDiscountOrFee: 200,
    phases: [mockPhase],
  };

  test('calculatePhaseTotal', () => {
    const result = calculatePhaseTotal(mockPhase);
    expect(result).toEqual({
      remainingDiscountOrFee: 0,
      subTotal: 1100,
      phaseTax: 171,
    });
  });

  test('calculateInvoiceTotal', () => {
    const result = calculateInvoiceTotal(mockInvoice);
    expect(result).toEqual({
      totalInvoice: 1300,
      totalTax: 213,
    });
  });
});

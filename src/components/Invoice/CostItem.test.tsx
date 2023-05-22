import { render, screen } from '@testing-library/react';
import CostItem from './CostItem';
import { CostItem as CostItemModel } from '../../types';

describe('CostItem', () => {
  const mockCostItem: CostItemModel = {
    name: 'Item 1',
    units: 10,
    pricePerUnit: 50,
    taxRate: 0.21,
  };

  beforeEach(() => {
    render(<CostItem costItem={mockCostItem} />);
  });

  test('renders cost item name', () => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  test('renders cost item name', () => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  test('renders the correct unit count', () => {
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('renders the correct price per unit', () => {
    expect(screen.getByText('€50.00')).toBeInTheDocument();
  });

  test('renders the correct tax rate', () => {
    expect(screen.getByText('21%')).toBeInTheDocument();
  });

  test('renders the correct total cost', () => {
    expect(screen.getByText('€500.00')).toBeInTheDocument();
  });
});

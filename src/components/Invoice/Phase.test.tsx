import { render, screen } from '@testing-library/react';
import Phase from './Phase';
import { Phase as PhaseModel } from '../../types';

describe('Phase', () => {
  const mockPhase: PhaseModel = {
    id: 'phase_1',
    name: 'Phase 1',
    discountOrFee: 100,
    costItems: [
      {
        name: 'Item 1',
        units: 10,
        pricePerUnit: 50,
        taxRate: 0.21,
      },
    ],
  };

  beforeEach(() => {
    render(<Phase phase={mockPhase} />);
  });

  test('renders phase name', () => {
    expect(screen.getByText('Phase 1')).toBeInTheDocument();
  });

  test('renders phase name', () => {
    expect(screen.getByText('Phase 1')).toBeInTheDocument();
  });

  test('renders discount or fee correctly', () => {
    expect(screen.getByText(/Extra Fee: €100.00/i)).toBeInTheDocument();
  });

  test('renders cost item within the phase', () => {
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('€50.00')).toBeInTheDocument();
    expect(screen.getByText('21%')).toBeInTheDocument();
    expect(screen.getByText('€500.00')).toBeInTheDocument();
  });

  test('renders correct phase subtotal and tax', () => {
    // Assume calculatePhaseTotal returns correct values
    expect(screen.getByText(/Subtotal \(excl. Tax\) €600.00/i)).toBeInTheDocument();
    expect(screen.getByText(/Tax €126.00/i)).toBeInTheDocument();
  });
});

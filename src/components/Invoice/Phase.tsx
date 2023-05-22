import { Phase as PhaseModel } from '../../types';
import CostItem from './CostItem';
import { formatPrice } from '../../utils/formatter.ts';
import { calculatePhaseTotal } from '../../utils/invoiceCalculator.ts';

const Phase = ({ phase }: { phase: PhaseModel }) => {
  const isDiscount = phase.discountOrFee <= 0;
  const calculatePhaseSubTotals = calculatePhaseTotal(phase);
  return (
    <div className="table-section">
      <h2 className="section-header">{phase.name}</h2>
      {phase.costItems.map((costItem, index) => (
        <CostItem key={index} costItem={costItem} />
      ))}
      <div className="section-summary">
        <div className="summary-details">
          <div className="summary-row">
            {isDiscount ? 'Discount' : 'Extra Fee'}: {formatPrice(phase.discountOrFee)}
          </div>
          <div className="summary-row bold">Subtotal (excl. Tax) {formatPrice(calculatePhaseSubTotals.subTotal)}</div>
          <div className="summary-row">Tax {formatPrice(calculatePhaseSubTotals.phaseTax)}</div>
        </div>
      </div>
    </div>
  );
};
export default Phase;
